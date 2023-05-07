/** Set html lang for screen readers */
export default function navigatorLanguage() {
  const navigatorLang = navigator.language.substring(0, 2)
  const languagesAvailables = ['es', 'en']
  const lang = languagesAvailables.includes(navigatorLang) ? navigatorLang : 'en'
  document.getElementsByTagName('html')[0].setAttribute('lang', lang)
}
