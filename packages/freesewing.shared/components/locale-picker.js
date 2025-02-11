import themes from 'shared/themes/index.js'
import LocaleIcon from 'shared/components/icons/i18n.js'
import { languages } from 'pkgs/i18n/src/index.js'


const LocalePicker = ({ app }) => (
  <div className="dropdown">
    <div tabIndex="0" className={`
      m-0 btn btn-neutral flex flex-row gap-2
      sm:btn-ghost
      hover:bg-neutral hover:border-neutral-content
    `}>
      <LocaleIcon />
      <span>{languages[app.locale]}</span>
    </div>
    <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
      {app.locales.map(locale => (
        <li key={locale}>
          <button onClick={() => app.changeLocale(locale)} className="btn btn-ghost text-base-content hover:bg-base-200">
            <span className="text-base-content">
              {languages[locale]}
            </span>
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default LocalePicker
