import { Footer, Navbar } from "@/components/LayoutComponents";

function layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Navbar locale={locale} />
      <main className="w-full   min-h-[calc(100vh-171px)]">{children}</main>
      <Footer locale={locale} />
    </>
  );
}

export default layout;
