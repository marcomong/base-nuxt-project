export default async function ({app }) {
  // on change locale
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    app.i18n.setLocale(newLocale)
  }
}
