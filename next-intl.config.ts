/** @type {import('next-intl').NextIntlConfig} */
const config = {
  locales: ["pl", "en"], // dostępne języki
  defaultLocale: "pl", // język domyślny
  messagesDirectory: "./src/messages", // folder z plikami JSON
};

export default config;
