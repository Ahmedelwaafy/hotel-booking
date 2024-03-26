import initTranslations from "../../i18n";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  console.log(locale);
  const { t } = await initTranslations(locale, ["HomePage"]);
  const data = {
    cards: [
      {
        id: 1,
        img: "/assets/images/slider_1.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        sub_title:
          "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        link: "/",
      },
      {
        id: 2,
        img: "/assets/images/slider_2.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        sub_title:
          "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        link: "/",
      },
      {
        id: 3,
        img: "/assets/images/slider_3.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        sub_title:
          "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        link: "/",
      },
      {
        id: 4,
        img: "/assets/images/slider_4.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        sub_title:
          "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        link: "/",
      },
      {
        id: 5,
        img: "/assets/images/slider_5.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        sub_title:
          "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        link: "/",
      },
      {
        id: 6,
        img: "/assets/images/slider_6.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        sub_title:
          "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        link: "/",
      },
      {
        id: 7,
        img: "/assets/images/slider_7.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        sub_title:
          "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
        link: "/",
      },
    ],
    TopStores: {
      title: "Top Stores in Egypt",
      cards: [
        { id: 1, img: "/assets/images/TopStores_img_1.png" },
        { id: 2, img: "/assets/images/TopStores_img_2.png" },
        { id: 3, img: "/assets/images/TopStores_img_3.png" },
        { id: 4, img: "/assets/images/TopStores_img_4.png" },
        { id: 5, img: "/assets/images/TopStores_img_5.png" },
        { id: 6, img: "/assets/images/TopStores_img_6.png" },
        { id: 7, img: "/assets/images/TopStores_img_7.png" },
        { id: 8, img: "/assets/images/TopStores_img_8.png" },
        { id: 9, img: "/assets/images/TopStores_img_9.png" },
        { id: 10, img: "/assets/images/TopStores_img_10.png" },
      ],
    },
    coupons_grid: {
      title: "Best Coupons in Egypt",
      cards: [
        {
          id: 1,
          is_fav: 0,
          rate: 1,
          img: "/assets/images/TopStores_img_1.png",
          discount: 10,
          brand_name: "Noon",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "1 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 2,
          is_fav: 0,
          rate: 2,
          img: "/assets/images/TopStores_img_2.png",
          discount: 20,
          brand_name: "Noon Suadi",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "2 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 3,
          is_fav: 1,
          rate: 3,
          img: "/assets/images/TopStores_img_3.png",
          discount: 30,
          brand_name: "Noon",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "3 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 4,
          is_fav: 1,
          rate: 4,
          img: "/assets/images/TopStores_img_4.png",
          discount: 40,
          brand_name: "Noon Egypt",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "4 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 5,
          is_fav: 0,
          rate: 5,
          img: "/assets/images/TopStores_img_5.png",
          discount: 50,
          brand_name: "Noon Egypt",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "5 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 6,
          is_fav: 0,
          rate: 0,
          img: "/assets/images/TopStores_img_6.png",
          discount: 60,
          brand_name: "Noon Egypt",
          active: 0,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "6 days ago",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
      ],
    },
    deals: {
      title: "Best Deals in Egypt",
      cards: [
        {
          id: 1,
          is_fav: 0,
          rate: 1,
          img: "/assets/images/TopStores_img_1.png",
          discount: 10,
          type: "deal",
          featured: 0,
          brand_name: "Noon",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "1 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 2,
          is_fav: 0,
          rate: 2,
          img: "/assets/images/TopStores_img_2.png",
          discount: 20,
          type: "deal",
          featured: 0,
          brand_name: "Noon Suadi",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "2 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 3,
          is_fav: 1,
          rate: 3,
          img: "/assets/images/TopStores_img_3.png",
          discount: 30,
          type: "deal",
          featured: 0,
          brand_name: "Noon",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "3 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 4,
          is_fav: 1,
          rate: 4,
          img: "/assets/images/TopStores_img_4.png",
          discount: 40,
          type: "deal",
          featured: 0,
          brand_name: "Noon Egypt",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "4 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 5,
          is_fav: 0,
          rate: 5,
          img: "/assets/images/TopStores_img_5.png",
          discount: 50,
          type: "deal",
          featured: 0,
          brand_name: "Noon Egypt",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "5 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 6,
          is_fav: 0,
          rate: 0,
          img: "/assets/images/TopStores_img_6.png",
          discount: 60,
          type: "deal",
          is_featured: 0,
          brand_name: "Noon Egypt",
          active: 0,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "6 days ago",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
      ],
    },
    offers: {
      title: "New Year offers",
      sub_title: "Lorem ipsum dolor sit amet consectetur adipisic",
      link_text: "See All New Year Offers",
      img: "https://images.unsplash.com/photo-1498673394965-85cb14905c89?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cards: [
        {
          id: 1,
          is_fav: 0,
          rate: 1,
          img: "/assets/images/TopStores_img_1.png",
          discount: 10,
          brand_name: "Noon",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "1 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 2,
          is_fav: 0,
          rate: 2,
          img: "/assets/images/TopStores_img_2.png",
          discount: 20,
          brand_name: "Noon Suadi",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "2 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 3,
          is_fav: 1,
          rate: 3,
          img: "/assets/images/TopStores_img_3.png",
          discount: 30,
          brand_name: "Noon",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "3 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 4,
          is_fav: 1,
          rate: 4,
          img: "/assets/images/TopStores_img_4.png",
          discount: 40,
          brand_name: "Noon Egypt",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "4 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 5,
          is_fav: 0,
          rate: 5,
          img: "/assets/images/TopStores_img_5.png",
          discount: 50,
          brand_name: "Noon Egypt",
          active: 1,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "5 hour",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
        {
          id: 6,
          is_fav: 0,
          rate: 0,
          img: "/assets/images/TopStores_img_6.png",
          discount: 60,
          brand_name: "Noon Egypt",
          active: 0,
          sub_title:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim corrupti, repudiandae officiis blanditiis odio!",
          title: " UP TO 50% OFF",
          code: "XFJ8",
          last_used: "6 days ago",
          link: "https://www.noon.com/egypt-en/ceramic-iron-1600-watt-gsw103ir1-6b-blackxblue/Z1E92D062029690E2915DZ/p/?o=z1e92d062029690e2915dz-1&gclid=CjwKCAiAkp6tBhB5EiwANTCx1Ip4_7e86wsLOkYq2wm2CEpBRFGerONnlXGumrEbjS5YgdBG8yJ9KBoCySMQAvD_BwE",
        },
      ],
    },
    about_us: {
      img: "/assets/images/about_us.png",
      title: "What you can get from our site",
      sub_title:
        "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur",
      cards: [
        {
          id: 1,
          icon: "https://demo.dashboard.lanacrm.com/media/our_feature/2024011013424896425.png",
          title: "The latest discount on any brand",
          sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
        {
          id: 2,
          icon: "https://demo.dashboard.lanacrm.com/media/our_feature/2024011013424896425.png",
          title: "Discounts up to 70% for all categories products",
          sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
        {
          id: 3,
          icon: "https://demo.dashboard.lanacrm.com/media/our_feature/2024011013424896425.png",
          title: "Big discounts on your beloved brands",
          sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
      ],
    },
    best_coupons: { title: "", cards: [] },
    best_deals: { title: "", cards: [] },
    featured_coupons: {
      title: "",
      sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      cards: [],
    },
    latest_categories: {
      title: "Latest Categories",
      sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      cards: [
        { id: 1, title: "Category 1", img: "/assets/images/Categories_1.png" },
        { id: 2, title: "Category 2", img: "/assets/images/Categories_2.png" },
        { id: 3, title: "Category 3", img: "/assets/images/Categories_3.png" },
        { id: 4, title: "Category 4", img: "/assets/images/Categories_1.png" },
        { id: 5, title: "Category 5", img: "/assets/images/Categories_2.png" },
        { id: 6, title: "Category 6", img: "/assets/images/Categories_3.png" },
        { id: 7, title: "Category 7", img: "/assets/images/Categories_1.png" },
        { id: 8, title: "Category 8", img: "/assets/images/Categories_2.png" },
      ],
    },
    testimonials: {
      title: "Testimonials",
      sub_title:
        "All users who are happy with us, they are happy because they can get big discounts quickly.",
      cards: [
        {
          id: 1,
          name: "Hanivan Adif",
          job: "Illustrator",
          rate: 1,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 2,
          name: "Andres Pamungkas",
          job: "3D Artist",
          rate: 2,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 3,
          name: "Faiza Abubakar",
          job: "UI Designer",
          rate: 3,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 4,
          name: "Praja Pramudi",
          job: "UX Designer",
          rate: 4,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me. I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 5,
          name: "Hanivan ",
          job: "Illustrator",
          rate: 5,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 6,
          name: "navich teso",
          job: "Illustrator",
          rate: 4,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 7,
          name: "Hanivan Adif",
          job: "Illustrator",
          rate: 1,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 8,
          name: "Hanivan Adif",
          job: "Illustrator",
          rate: 2,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 9,
          name: "yaho limon",
          job: "Illustrator",
          rate: 4,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 10,
          name: "Hanivan Adif",
          job: "Illustrator",
          rate: 0,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 11,
          name: "Hanivan Adif",
          job: "Illustrator",
          rate: 3,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
        {
          id: 12,
          name: "Hanivan Adif",
          job: "Illustrator",
          rate: 2,
          review:
            "I really love discounts, and this place where all the discounts are unite. Thank you so much Penimbun for providing such a wonderful place for me.",
          img: "/assets/images/Testimonials_1.jpg",
        },
      ],
    },
    ad: {
      type: "img",
      title: "Latest Categories",
      sub_title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      imgSrc:
        "https://images.unsplash.com/photo-1607083206139-7c5b07e66ac3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://images.unsplash.com/photo-1607083206139-7c5b07e66ac3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };
  return (
    <section className="mt-12 flex-col flex gap-11">
      homepage
{/*       <RandomAdPopUp />
 */}    
    </section>
  );
}
