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
    id: 1,
    cover: "./images/hero/h4.png",
    name: "دراسة الجدوى الاقتصادية",
    name_en: "Economic Feasibility Study",
    desc_b:
      "من خلال هذه الخدمة، نقوم بتقييم المشاريع المقترحة بدقة، وتحليل البيانات المالية والاقتصادية للتأكد من جدوى المشروع. نضع بين أيديكم تحليلات معمقة تساعدكم على فهم كافة الأبعاد المالية والسوقية المتعلقة بالمشروع. كما نوفر لكم خططًا مستقبلية مدروسة تساعد على تحقيق النجاح والاستدامة في سوق الأعمال السعودي.",
    desc_b_en:
      "Through this service, we accurately evaluate proposed projects, analyze financial and economic data to ensure the project's feasibility. We provide in-depth analysis to help you understand all financial and market-related dimensions of the project. Additionally, we offer meticulously crafted future plans to assist in achieving success and sustainability in the Saudi business market.",
    desc_f:
      "في عالم الأعمال المتسارع، يأتي قرار الاستثمار مع تحديات ومخاطر عديدة. لذا، نقدم لكم خدمة دراسة الجدوى الاقتصادية التي تعد بمثابة بوصلتكم لاتخاذ القرارات الاستثمارية الصائبة.",
    desc_f_en:
      "In the fast-paced business world, investment decisions come with numerous challenges and risks. Therefore, we offer you an economic feasibility study service that serves as your compass for making sound investment decisions.",
  },
  {
    id: 2,
    cover: "./images/hero/h2.png",
    name: "استشارات اقتصادية و مالية و ادارية",
    name_en: "Industrial Sector",
    desc_b:
      "نقدم استشارات متخصصة في المجالات الاقتصادية، المالية، والإدارية، مع التركيز على تقديم نصائح عملية وإرشادات مهنية تساعد في صنع القرارات الاستراتيجية وتحقيق النمو المستدام. سواء كنتم تسعون لتطوير استراتيجيات جديدة أو تحتاجون إلى تحليل شامل للأوضاع المالية، فإن خبرائنا مستعدون لمساعدتكم في تجاوز التحديات واستغلال الفرص المتاحة في السوق السعودي.",
    desc_b_en:
      "We offer specialized consultancy services in economic, financial, and administrative fields, focusing on providing practical advice and professional guidance to aid in strategic decision-making and achieving sustainable growth. Whether you are seeking to develop new strategies or require comprehensive financial situation analysis, our experts are ready to assist you in overcoming challenges and capitalizing on opportunities available in the Saudi market.",
    desc_f:
      "في ظل التحديات المتزايدة التي تواجهها الشركات في السوق السعودي، تأتي خدماتنا الاستشارية لتقدم لكم الدعم اللازم لتعزيز كفاءة عملياتكم وتحسين أدائكم المالي والإداري.",
    desc_f_en:
      "Amidst the growing challenges facing companies in the Saudi market, our consultancy services come to provide you with the necessary support to enhance the efficiency of your operations and improve your financial and administrative performance.",
  },
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
    id: 4,
    cover: "./images/hero/h1.png",
    name: "خدمة إعادة الهيكلة الإدارية للشركات",
    name_en: "Entertainment Sector",
    desc_b:
      "نقوم بتقييم شامل للأنظمة الإدارية القائمة وتصميم هياكل تنظيمية جديدة تتناسب مع تحديات وفرص السوق المحلي. خدماتنا تشمل تطوير الإستراتيجيات، تحسين العمليات، وتدريب الفرق الإدارية لضمان تنفيذ فعّال ومستدام. استفيدوا من خبرتنا لإعادة هيكلة شركتكم بما يعزز من مرونتها وقدرتها التنافسية في السوق.",
    desc_b_en:
      "We conduct a comprehensive evaluation of existing management systems and design new organizational structures tailored to the challenges and opportunities of the local market. Our services include strategy development, process improvement, and management team training to ensure effective and sustainable implementation. Benefit from our expertise in restructuring your company to enhance its resilience and competitiveness in the market.",
    desc_f:
      "في بيئة الأعمال المتغيرة بالمملكة العربية السعودية، تبرز الحاجة الماسة للشركات لتعزيز فعاليتها وتحسين أدائها من خلال هياكل تنظيمية محسّنة.  نقدم خدمة إعادة الهيكلة الإدارية، التي تهدف إلى توفير حلول مخصصة وفعالة لتحسين كفاءة الشركات وتحقيق أهدافها بطرق أكثر فاعلية.",
    desc_f_en:
      "In the dynamic business environment of Saudi Arabia, there is a pressing need for companies to enhance their effectiveness and improve their performance through optimized organizational structures. We provide administrative restructuring services aimed at offering customized and efficient solutions to enhance companies' efficiency and achieve their goals more effectively.",
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
];
// const baseUrl = "http://127.0.0.1:8000/api";
// const baseUrlWithoutApi = "http://127.0.0.1:8000";

// export const list = [
//   {
//     id: 1,
//     cover: process.env.PUBLIC_URL + "/images/list/p-1.png",
//     name: "شقة في عمارة - الرياض حي طويق",
//     name_en: "Apartment in Building - Riyadh, Tuwaiq District",
//     location: "طويق الرياض, الرياض",
//     location_en: "Tuwaiq, Riyadh, Riyadh",
//     category: "مباع",
//     category_en: "Sold",
//     price: "9,750 ريال",
//     price_en: "9,750 SAR",
//     type: "شقة",
//     type_en: "Apartment",
//     property_area: "10m",
//     street_direction: "شمال",
//     street_direction_en: "",
//     bathrooms: "1m",
//     bedrooms: "10m",
//     land_length: "80s",
//     property_age: "70s",
//     property_age_en: "Apartment",
//     street_width: "100m",
//     land_width: "شقة",
//     description: "الوصف",
//     description_en: "Description",
//     license_number: "110005789",
//     map_location: "رابط موقع العقار على الخريطة",
//     imgs: [
//       // قم بإضافة روابط الصور هنا
//       // على سبيل المثال:
//       // { url: "/images/property1.jpg" },
//       // { url: "/images/property2.jpg" },
//       {
//         src: "https://media.istockphoto.com/id/1469952025/photo/a-business-person-is-working-in-a-cafe-at-night-using-a-tablet-device-and-a-stylus-to-look-up.webp?b=1&s=170667a&w=0&k=20&c=QSMWCuH5Wde2WQM8JJHz6QP2t5DNljUpxZ2J84M37Jg=",
//       },
//       {
//         src: "https://media.istockphoto.com/id/924994456/tr/foto%C4%9Fraf/sokakta-cep-telefonu-kullanan-kad%C4%B1n.jpg?s=2048x2048&w=is&k=20&c=HHc1tTeBHIkH1s4VQAcmplFcCkNdm2_ixLdTxMamdf0=",
//       },
//       {
//         src: "https://media.istockphoto.com/id/1469952025/photo/a-business-person-is-working-in-a-cafe-at-night-using-a-tablet-device-and-a-stylus-to-look-up.webp?b=1&s=170667a&w=0&k=20&c=QSMWCuH5Wde2WQM8JJHz6QP2t5DNljUpxZ2J84M37Jg=",
//       },
//     ],
//   },
// ];
const fetchRecentFromAPI = async () => {
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

    return processedData;
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
      post_rel: postsData.map((post) => ({
        img: `${baseUrlWithoutApi}${post.image_path}`,
        alt: post.type,
        srcSet: "",
      })),
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
      { list: "الرئيسية", url: "" },
      { list: "خدماتنا", url: "" },
      { list: "القطاعات", url: "" },
      { list: "من نحن", url: "" },
      { list: "تواصل معنا", url: "" },
      { list: "العقارات", url: "" },
    ],
  },
  {
    language: "english",
    title: "Main Pages",
    text: [
      { list: "Home", url: "" },
      { list: "Services", url: "" },
      { list: "Sectors", url: "" },
      { list: "About Us", url: "" },
      { list: "Contact Us", url: "" },
      { list: "Real Estate", url: "" },
    ],
  },
  {
    language: "arabic",
    title: "خدماتنا",
    text: [
      { list: " دراسة الجدوى", url: "" },
      { list: "استشارات اقتصادية", url: "" },
      { list: "إعادة الهيكلة للشركات", url: "" },
      { list: "التطوير وتنمية الإستثمارات", url: "" },
      { list: "حلول تمويلية", url: "" },
      { list: "إدارة المشاريع والإستثمارات", url: "" },
    ],
  },
  {
    language: "english",
    title: "Our Services",
    text: [
      { list: "Feasibility Study", url: "" },
      { list: "Economic Consulting", url: "" },
      { list: "Corporate Restructuring", url: "" },
      { list: "Development and Investment", url: "" },
      { list: "Financial Solutions", url: "" },
      { list: "Project and Investment Management", url: "" },
    ],
  },
  {
    language: "english",
    title: "Contact Us",
    text: [
      {
        list: "+966 50 860 5772",
        icons: <i className="fa-solid fa-phone" style={{ margin: "5px" }}></i>,
      },
      {
        list: "Saudi Arabia - Riyadh",
        icons: <i className="fa fa-location-dot" style={{ margin: "5px" }}></i>,
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
      },
      {
        list: "المملكة العربية السعودية- الرياض",
        icons: <i className="fa fa-location-dot" style={{ margin: "5px" }}></i>,
      },
    ],
  },
];
