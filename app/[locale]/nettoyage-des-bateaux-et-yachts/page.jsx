import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Simulat from "../components/desService/boatclean";

// The component doesn't need explicit typing in JSX, but we handle params via destructuring
export default async function Page({ params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <Simulat locale={locale} />
    </NextIntlClientProvider>
  );
}
