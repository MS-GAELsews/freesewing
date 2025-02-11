import { useState } from 'react'
import ClearIcon from 'shared/components/icons/clear.js'

const DesignOptionList = props => {
  const { dflt, list } = props.pattern.config.options[props.option]
  const val = (typeof props.gist?.options?.[props.option] === 'undefined')
    ? dflt
    : props.gist.options[props.option]

  const [value, setValue] = useState(val)

  const handleChange = (newVal) => {
    console.log('setting', newVal)
    if (newVal === dflt) reset()
    else {
      setValue(newVal)
      props.updateGist(['options', props.option], newVal)
    }
  }
  const reset = () => {
    setValue(dflt)
    props.unsetGist(['options', props.option])
  }

  return (
    <div className="py-4 mx-6 border-l-2 pl-2">
      <div className="flex flex-row">
        <div className="grow">
          {list.map(choice => (
            <button
              onClick={() => handleChange(choice)}
              className={`
                mr-1 mb-1 text-left text-lg w-full
                ${choice === value
                  ? choice === dflt
                    ? 'text-secondary'
                    : 'text-accent'
                  : 'text-neutral-content'
                }
              `}
            >
              <span className={`
                text-3xl mr-2 inline-block p-0 leading-3
                translate-y-3
              `}>
                <>&deg;</>
              </span>
              {props.app.t(`options.${props.pattern.config.name}.${props.option}.options.${choice}`)}
            </button>
          ))}
        </div>
        <button
          title={props.app.t('app.reset')}
          className=""
          disabled={val === dflt}
          onClick={reset}
        >
          <span className={val===dflt ? 'text-neutral' : 'text-accent'}><ClearIcon /></span>
        </button>
      </div>
    </div>
  )
}

export default DesignOptionList
