import initTranslations from "@/app/i18n";

async function Navbar({ locale }: { locale: string }) {
  const { t, i18n } = await initTranslations(locale, ["LayoutComponents"]);
  const user = false;
  return <header>Navbar</header>;
}

export default Navbar;
