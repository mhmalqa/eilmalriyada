import instance, { baseUrlWithoutApi } from "./BaseUrl";

export const nav = [
  {
    text_ar: "الصفحة الرئيسية",
    text_en: "Home",
    path: "/",
  },

  {
    text_ar: "خدماتنا",
    text_en: "Our Services",
    path: "/services",
  },
  {
    text_ar: "العقارات",
    text_en: "Real Estate",
    path: "/real-estate",
  },
  {
    text_ar: "تصوير عقاري",
    text_en: "Photography",
    path: "/RealEstatePhotography",
  },

  {
    text_ar: "من نحن",
    text_en: "About Us",
    path: "/about",
  },
  {
    text_ar: "اتصل بنا",
    text_en: "Contact Us",
    path: "/contact",
  },
  // {
  //   text_ar: "نشر منشور",
  //   text_en: "Publich Post",
  //   path: "/publichpost",
  // },
  // {
  //   text_ar: "جميع المناشير",
  //   text_en: "Posts",
  //   path: "/removepublichpost",
  // },
  // {
  //   text_ar: "المراسلات",
  //   text_en: "Messages",
  //   path: "/dash",
  // },
  // {
  //   text_ar: "الروابط",
  //   text_en: "Links",
  //   path: "/links",
  // },
];

export const homePage = [
  {
    language: "arabic",
    title: "علم الريادة",
    subtitle: "علم الريادة للاستشارات الإدارية والمالية",
    slogan: "التحول نحو النجاح",
    description: "لتحقيق نجاح مؤسستك",
    description2:
      "استشارات إدارية ومالية - تسويق  - استشارات حلول تمويل - خدمات تسويق عقاري",
    btn_view: "اضغط لتحميل الملف التعريفي",
  },
  {
    language: "english",
    title: "Elim Alriyada",
    slogan: "Shift to Success",
    subtitle: "For Administrative and Financial Consultations",
    description: "To achieve success for your institution",
    description2:
      "Administrative Consultations - Financial Consultations - Marketing - Development - Financing Solutions Consultations - Real Estate Marketing Services",
    btn_view: "Click to download profile",
  },
];

export const sectors = [
  {
    cover: `${process.env.PUBLIC_URL}/images/hero/h4.png`,
    name: "القطاع التجاري",
    name_en: "Commercial Sector",
    total: "",
    total_en: "",
  },
  {
    cover: `${process.env.PUBLIC_URL}/images/hero/h2.png`,
    name: "القطاع الصناعي",
    name_en: "Industrial Sector",
    total: "",
    total_en: "",
  },
  {
    cover: `${process.env.PUBLIC_URL}/images/hero/h3.png`,
    name: "القطاع التعليمي",
    name_en: "Educational Sector",
    total: "",
    total_en: "",
  },
  {
    cover: `${process.env.PUBLIC_URL}/images/hero/h1.png`,
    name: "القطاع الترفيهي",
    name_en: "Entertainment Sector",
    total: "",
    total_en: "",
  },
  {
    cover: `${process.env.PUBLIC_URL}/images/hero/h6.png`,
    name: "القطاع الخدمي",
    name_en: "Service Sector",
    total: "",
    total_en: "",
  },
];

export const services = [
  {
    id: 3,
    cover: "./images/hero/h3.png",
    name: "حلول مالية متطورة ",
    name_en: "Educational Sector",
    desc_b:
      "كما نقدم استشارات لتمويل برهن عقاري، لاستغلال قيمة الأصول العقارية في تعزيز السيولة المالية لمشاريعكم. بالإضافة إلى ذلك، نوفر حلول تمويل نقاط البيع للمحلات التجارية، التي تسهم في تسهيل العمليات وتحسين التدفقات النقدية. ونقدم أيضًا استشارات حلول تمويل للشركات، لدعم الشركات الطامحة في التوسع وتحسين أدائها المالي بحلول مبتكرة تساهم في تحقيق النمو والاستقرار المالي طويل الأمد.",
    desc_b_en:
      "We also provide consultancy for mortgage financing, leveraging the value of real estate assets to enhance the financial liquidity of your projects. Additionally, we offer financing solutions for point of sale for commercial outlets, facilitating operations and improving cash flows.Furthermore, we provide corporate financing solutions to support ambitious companies in expansion and improving their financial performance through innovative solutions that contribute to achieving long-term growth and financial stability.",
    desc_f:
      "في ظل التطورات الاقتصادية المستمرة في المملكة العربية السعودية، يقدم مكتب علم الريادة للاستشارات الإدارية والمالية خدمات استشارية متخصصة توفر حلول تمويل متكاملة تلائم كافة القطاعات. نحن نسعى لتقديم استشارات دقيقة لتمويل المشاريع المدعومة من الصناديق الحكومية.",
    desc_f_en:
      "Innovative and effective financial, administrative, and marketing solutions to achieve the goals of companies and individuals with the help of our skilled consultants .",
  },

  {
    id: 5,
    cover: "./images/hero/h6.png",
    name: "خدمات التسويق والتسويق الرقمي",
    name_en: "Marketing and Digital Marketing Services",
    desc_b:
      "خدماتنا في التسويق الرقمي تشمل إدارة الحملات الإعلانية عبر الإنترنت، تحسين محركات البحث (SEO)، التسويق عبر وسائل التواصل الاجتماعي، وإنشاء المحتوى الرقمي الذي يجذب ويحافظ على اهتمام العملاء. نقدم أيضًا تحليلات مفصلة تساعدكم على فهم سلوك المستهلك وتعزيز ROI (العائد على الاستثمار). استفيدوا من خبرتنا الواسعة لتعزيز وجودكم في السوق وتحقيق أفضل النتائج من خلال حملات تسويقية مدروسة ومستهدفة بعناية.",
    desc_b_en:
      "Our digital marketing services include online advertising campaign management, search engine optimization (SEO), social media marketing, and creating engaging digital content that attracts and retains customer interest. We also provide detailed analytics to help you understand consumer behavior and enhance ROI (Return on Investment). Benefit from our extensive expertise to strengthen your market presence and achieve optimal results through carefully crafted and targeted marketing campaigns.",
    desc_f:
      "في عصر التحول الرقمي، نقدم مجموعة شاملة من خدمات التسويق التقليدي والرقمي، مصممة خصيصًا لتلبية احتياجات السوق السعودي. نساعدكم في بناء استراتيجيات تسويقية فعّالة تستهدف جمهوركم المحلي بدقة وتعزز من هويتكم التجارية وتحقق أهدافكم الاستراتيجية.",
    desc_f_en:
      "In the digital age, we offer a comprehensive range of traditional and digital marketing services, specifically designed to meet the needs of the Saudi market. We help you build effective marketing strategies that precisely target your local audience, enhance your brand identity, and achieve your strategic objectives.",
  },
  {
    id: 6,
    cover: "./images/hero/h7.png",
    name: "خدمات العقارات",
    name_en: "Real Estate Services",
    desc_b:
      "نقدم مجموعة من الخدمات المهنية لضمان تحقيق أهدافكم العقارية بسهولة ويسر. نتميز بالعمل تحت تفويض رسمي من البائعين والمشترين عبر منصة الهيئة العامة للعقار، مما يضمن احترافية دائمة في تعاملاتنا.",
    desc_b_en:
      "We offer a range of professional services to ensure you achieve your real estate goals with ease. We work under official mandates from sellers and buyers through the General Authority for Real Estate platform, ensuring professionalism in all transactions.",
    desc_f:
      "تشمل خدماتنا: البحث عن فرص عقارية حقيقية، تسويق العقار باستخدام استراتيجيات مبتكرة، تنظيم معاينات مرنة بواسطة فريق متخصص، المساعدة في العروض والمفاوضات، والتسويق الشامل عبر شبكة واسعة من المسوقين المعتمدين لضمان نجاح عمليات البيع.",
    desc_f_en:
      "Our services include: searching for genuine real estate opportunities, marketing properties using innovative strategies, organizing flexible viewings by our specialized team, assisting in offers and negotiations, and comprehensive marketing through a wide network of certified marketers to ensure successful sales.",
  },
];
export const fetchRecentFromAPI = async () => {
  try {
    const response = await instance.get("/showrecent");
    const recentsData = response.data;

    // Process the data to match the `list` object structure
    const processedData = recentsData.map((recent) => ({
      id: recent.id,
      cover: `${baseUrlWithoutApi}${recent.cover}`, // التأكد من تضمين المسار الأساسي للصورة
      filePdfRecent: `${baseUrlWithoutApi}${recent.filePdfRecent}`,
      name: recent.name,
      name_en: recent.name_en,
      location: recent.location,
      location_en: recent.location_en,
      category: recent.category,
      category_en: recent.category_en,
      price: recent.price,
      price_en: recent.price_en,
      type: recent.type,
      type_en: recent.type_en,
      property_area: recent.property_area,
      street_direction: recent.street_direction,
      street_direction_en: recent.street_direction_en,
      bathrooms: recent.bathrooms,
      bedrooms: recent.bedrooms,
      land_length: recent.land_length,
      property_age: recent.property_age,
      property_age_en: recent.property_age_en,
      street_width: recent.street_width,
      land_width: recent.land_width,
      description: recent.description,
      description_en: recent.description_en,
      license_number: recent.license_number,
      map_location: recent.map_location,
      imgs: recent.recent_imags.map((image) => ({
        src: `${baseUrlWithoutApi}${image.url}`,
      })),
    }));

    // ترتيب العناصر حسب النوع
    const sortedData = processedData.sort((a, b) => {
      const order = ["castle", "villa", "apartment"];
      const aIndex = order.indexOf(a.type_en.toLowerCase());
      const bIndex = order.indexOf(b.type_en.toLowerCase());

      if (aIndex === -1) return 1; // إذا كان النوع غير موجود في الترتيب، يذهب إلى النهاية
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

    return sortedData;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Call the function and export the posts object
export const list = await fetchRecentFromAPI();

export const awards = {
  english: [
    {
      icon: <i className="fa-solid fa-trophy"></i>,
      num: "Consultations",
      name: "Best Consulting Experts",
    },
    {
      icon: <i className="fa-solid fa-briefcase"></i>,
      num: "Marketing",
      name: "Best Marketing Strategies",
    },
    {
      icon: <i className="fa-solid fa-lightbulb"></i>,
      num: "Development & Design",
      name: "Get a Design that Fits Your Company",
    },
    {
      icon: <i className="fa-solid fa-heart"></i>,
      num: "Solutions",
      name: "Find Solutions Here",
    },
  ],
  arabic: [
    {
      icon: <i className="fa-solid fa-trophy"></i>,
      num: "الاستشارات",
      name: "أفضل خبراء الاستشارات",
    },
    {
      icon: <i className="fa-solid fa-briefcase"></i>,
      num: "التسويق",
      name: "أفضل استراتيجيات التسويق",
    },
    {
      icon: <i className="fa-solid fa-lightbulb"></i>,
      num: "التطوير والتصميم",
      name: "احصل على تصميم يناسب شركتك",
    },
    {
      icon: <i className="fa-solid fa-heart"></i>,
      num: "الحلول",
      name: "ابحث عن افضل الحلول",
    },
  ],
};

// export const posts = {
//   post_rel: [
//     {
//       img: "/images/posts/post2.jpg",
//       alt: "Post 1",
//       srcSet: "",
//     },
//     {
//       img: "/images/posts/post3.jpg",
//       alt: "Post 2",
//       srcSet: "",
//     },
//   ],
//   post_adm: [],
// };

const fetchPostsFromAPI = async () => {
  try {
    const response = await instance.get("/showpost");
    const postsData = response.data;

    // Process the data to match the `posts` object structure
    const processedData = {
      post_rel: postsData
        .map((post) => ({
          img: `${baseUrlWithoutApi}${post.image_path}`,
          alt: post.type,
          srcSet: "",
        }))
        .reverse(),
      post_adm: [], // Add logic for post_adm if needed
    };

    return processedData;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      post_rel: [],
      post_adm: [],
    };
  }
};

// Call the function and export the posts object
export const posts = await fetchPostsFromAPI();
export const footer = [
  {
    language: "arabic",
    title: "اهم الصفحات",
    text: [
      { list: "الرئيسية", url: "/" },
      { list: "خدماتنا", url: "/services" },
      { list: "العقارات", url: "/real-estate" },
      { list: "من نحن", url: "/about" },
      { list: "تواصل معنا", url: "/contact" },
    ],
  },
  {
    language: "english",
    title: "Main Pages",
    text: [
      { list: "Home", url: "/" },
      { list: "Services", url: "/services" },
      { list: "Real Estate", url: "/real-estate" },
      { list: "About Us", url: "/about" },
      { list: "Contact Us", url: "/contact" },
    ],
  },
  {
    language: "arabic",
    title: "خدماتنا",
    text: [
      { list: "حلول مالية متطورة", url: "/services" },
      { list: "خدمات العقارات", url: "/services" },
      { list: "خدمات التسويق", url: "/services" },
    ],
  },
  {
    language: "english",
    title: "Our Services",
    text: [
      { list: "Advanced Financial Solutions", url: "/services" },
      { list: "Real Estate Services", url: "/services" },
      { list: "Marketing Services", url: "/services" },
    ],
  },
  {
    language: "english",
    title: "Contact Us",
    text: [
      {
        list: "+966 50 860 5772",
        icons: <i className="fa-solid fa-phone" style={{ margin: "5px" }}></i>,
        url: "https://wa.me/966508605772",
      },
      {
        list: "Saudi Arabia - Riyadh",
        icons: <i className="fa fa-location-dot" style={{ margin: "5px" }}></i>,
        url: "https://maps.app.goo.gl/Qq4H9s8dzw1z8RMXA",
      },
    ],
  },
  {
    language: "arabic",
    title: "تواصل معنا",
    text: [
      {
        list: "5772 860 50 966+",
        icons: <i className="fa-solid fa-phone" style={{ margin: "5px" }}></i>,
        url: "https://wa.me/966508605772",
      },
      {
        list: "الرياض،حي الحمراء، مقابل العثيم",
        icons: <i className="fa fa-location-dot" style={{ margin: "4px" }}></i>,
        url: "https://maps.app.goo.gl/VeArqA13AHou9eSS9",
      },
    ],
  },
];
