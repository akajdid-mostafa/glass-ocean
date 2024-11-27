import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Simulat from "../components/desService/Electricity";

export default async function Page({ params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <Simulat locale={locale} />
    </NextIntlClientProvider>
  );
}
