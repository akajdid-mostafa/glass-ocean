import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Matelas from "../components/desService/matelas";

// The component doesn't need explicit typing in JSX, but we handle params via destructuring
export default async function Page({ params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <Matelas locale={locale} />
    </NextIntlClientProvider>
  );
}
