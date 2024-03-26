import initTranslations from "@/app/i18n";
async function Footer({ locale }: { locale: string }) {
  const data = {
    stores: [
      { name: "Noon Egypt", coupons_no: 4444 },
      { name: "Ali express", coupons_no: 7589652 },
      { name: "Ali express", coupons_no: 52358 },
      { name: "Ali express", coupons_no: 21583 },
      { name: "Ali express", coupons_no: 5 },
    ],
    about_us:
      "Shop at Go Offer for a wide selection of quality products at great prices, all conveniently available online for your shopping pleasure.",
    app_store_link:
      "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
    google_play_link:
      "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
    facebook_link:
      "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
    instagram_link:
      "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
    twitter_link:
      "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
    news_letter_text:
      "Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.",
    copy_right: "Copyright 2024 GoOffer | Developed by ",
    linked_text: "e-RAMO For Digital Solutions",
    linked_text_link:
      "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
    whatsapp_link:
      "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
  };
  const { t } = await initTranslations(locale, ["LayoutComponents"]);
  return <footer className="mt-11">footer</footer>;
}

export default Footer;
