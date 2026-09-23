export const Website = [
  {
    slug: "maxsten",
    name: "Maxsten",
    category: "Web Application",
    year: "2026",
    type: "Personal Project",
    role: "Full-Stack Developer",

    image: "website-1.webp",
    imageHover: "website-1-hover.webp",
    alt: "Maxsten self-order and queue management website",

    projectUrl: "https://maxsten.vercel.app",

    shortDescription:
      "A self-order and queue management platform to help SMEs manage orders in a more structured way.",

    description:
      "Maxsten is a QR Code-based self-ordering application designed to help food stalls, cafes, and F&B SMEs manage their orders in a more structured manner.",

    problem: [
      "Orders can be missed when many customers arrive at the same time.",
      "Sellers have to remember multiple orders simultaneously.",
      "Customers are not always aware of their order's progress.",
    ],

    solution:
      "Maxsten shifts the ordering process directly to the customers. Customers simply scan a QR Code, select products, and submit their orders without needing to create an account.",

    features: [
      {
        number: "01",
        title: "QR Self-Order",
        description:
          "Customers can place orders directly through their smartphones without installing an application.",
      },
      {
        number: "02",
        title: "Real-time Queue",
        description:
          "Orders can be monitored based on their status, allowing sellers to view the ongoing queue.",
      },
      {
        number: "03",
        title: "Product Management",
        description:
          "Sellers can manage products, prices, variants, and add-ons.",
      },
      {
        number: "04",
        title: "Order Status",
        description:
          "Order statuses can be updated so customers know the progress of their orders.",
      },
    ],

    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
      "MySQL",
      "Socket.IO",
      "Supabase",
    ],

    challenges: [
      {
        number: "01",
        title: "Concurrent Orders",
        description:
          "Handling the possibility of multiple customers placing orders at almost the same time.",
      },
      {
        number: "02",
        title: "Real-time Updates",
        description:
          "Synchronizing order status changes between customers and sellers without manual refreshes.",
      },
      {
        number: "03",
        title: "Simple Ordering Flow",
        description:
          "Creating an easy-to-use ordering flow without requiring customers to create an account.",
      },
    ],

    learning:
      "This project deepened my experience in building a full-stack application from frontend to backend, including database design, validation, authentication, real-time communication, and state management.",
  },

  {
    slug: "rnee",
    name: "Rnee",
    category: "Brand Website",
    year: "2026",
    type: "Personal Project",
    role: "Frontend Developer",

    image: "website-2.webp",
    imageHover: "website-2-hover.webp",
    alt: "Rnee premium perfume website",

    projectUrl: "https://rnee-demo.vercel.app",

    shortDescription:
      "A perfume brand website with a minimal and premium visual approach.",

    description:
      "Rnee is a website concept for a perfume brand focusing on visuals, storytelling, and product presentation.",

    problem: [
      "Fragrance products require visual presentations capable of conveying the brand's character.",
      "Product information needs to be conveyed without making the page feel cluttered.",
    ],

    solution:
      "The website is designed with a minimalist approach, strong typography, and visuals that give room for the product to be the main focus.",

    features: [
      {
        number: "01",
        title: "Product Showcase",
        description:
          "Products are displayed with a layout that focuses on the visual and identity of the fragrance.",
      },
      {
        number: "02",
        title: "Brand Storytelling",
        description:
          "Content is structured to build the character and atmosphere of the brand.",
      },
      {
        number: "03",
        title: "Responsive Design",
        description:
          "The layout is optimized for both desktop and mobile devices.",
      },
      {
        number: "04",
        title: "Micro Interaction",
        description:
          "Animations are used to provide a livelier browsing experience.",
      },
    ],

    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],

    challenges: [
      {
        number: "01",
        title: "Visual Balance",
        description:
          "Maintaining the balance between typography, whitespace, images, and decorative elements.",
      },
      {
        number: "02",
        title: "Responsive Layout",
        description:
          "Ensuring the visuals retain the same character across various screen sizes.",
      },
    ],

    learning:
      "This project helped deepen my skills in building websites that prioritize visual design, typography, responsive layouts, and micro-interactions.",
  },

  {
    slug: "satnight",
    name: "Satnight",
    category: "Rental Website",
    year: "2026",
    type: "Personal Project",
    role: "Frontend Developer",

    image: "website-3.webp",
    imageHover: "website-3-hover.webp",
    alt: "Satnight camera rental website",

    projectUrl: "https://satnight-demo.vercel.app",

    shortDescription:
      "A camera rental website that simplifies the process of choosing a camera and requesting a rental.",

    description:
      "Satnight is a camera rental website designed to simplify the process from selecting a device to submitting a rental request. The website provides a structured camera catalog, comprehensive rental information, and a rental form that collects customer data before forwarding it directly to the admin's WhatsApp.",

    problem: [
      "A manually presented camera catalog can make it difficult for customers to find the right device because they have to browse products one by one.",
      "The rental process requires a lot of back-and-forth Q&A between the customer and the admin regarding pricing, guarantees, and other rental information.",
    ],

    solution:
      "Satnight provides a more structured camera catalog, making it easier for customers to view and select devices. Pricing, guarantees, and rental terms are available directly on the website. Once a customer finds the desired camera, they can fill out the rental form, and all necessary data is automatically compiled and sent to the admin's WhatsApp, reducing the need for repetitive Q&A.",

    features: [
      {
        number: "01",
        title: "Structured Camera Catalog",
        description:
          "Displays cameras in a structured catalog, allowing customers to easily explore device options.",
      },
      {
        number: "02",
        title: "Rental Information",
        description:
          "Pricing, guarantees, and rental terms are readily available so customers can understand the rental details before contacting the admin.",
      },
      {
        number: "03",
        title: "Rental Form",
        description:
          "The rental form collects the necessary data from customers to process a rental request.",
      },
      {
        number: "04",
        title: "WhatsApp Integration",
        description:
          "Rental data is automatically compiled into a complete WhatsApp message and sent to the admin.",
      },
    ],

    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],

    challenges: [
      {
        number: "01",
        title: "Product Presentation",
        description:
          "Transforming a camera catalog into a structured product browsing experience without making the page feel cluttered.",
      },
      {
        number: "02",
        title: "Rental Form Flow",
        description:
          "Designing a form capable of collecting vital information from customers before forwarding the data to the admin.",
      },
      {
        number: "03",
        title: "WhatsApp Integration",
        description:
          "Compiling all form data into a complete WhatsApp message so the admin doesn't need to ask for information the customer has already provided.",
      },
    ],

    learning:
      "This project deepened my experience in using React and building a rental website that combines a product catalog, rental information, submission form, and WhatsApp integration into one simple flow.",
  },

  {
    slug: "munivy",
    name: "Munivy",
    category: "Rental Website",
    year: "2026",
    type: "Personal Project",
    role: "Frontend Developer",

    image: "website-4.webp",
    imageHover: "website-4-hover.webp",
    alt: "Munivy iPhone rental website",

    projectUrl: "https://munivy.vercel.app",

    shortDescription:
      "An iPhone rental website that simplifies the process of selecting a device and requesting a rental.",

    description:
      "Munivy is an iPhone rental website designed to simplify the process from selecting a device to submitting a rental request. The website replaces a poster-based Google Drive catalog with a more structured one, while also providing a rental form that collects essential information before forwarding it directly to the admin's WhatsApp.",

    problem: [
      "The previous product catalog was stored in Google Drive as posters or product list images, meaning customers had to view the catalog one by one and couldn't easily search for their desired device.",
      "The rental process required extensive Q&A between customers and the admin, such as asking for prices, guarantees, pickup methods, and other rental details.",
    ],

    solution:
      "Munivy provides a more structured device catalog so customers can view and select iPhones more easily. Rental information is also directly available on the website, while the rental form collects necessary data, including pickup methods like in-store pickup or Cash on Delivery (COD). If the customer chooses COD, they can enter their requested location. Once the form is complete, all data is automatically compiled and sent to the admin's WhatsApp, eliminating repetitive Q&A.",

    features: [
      {
        number: "01",
        title: "Structured iPhone Catalog",
        description:
          "Transforms a poster-based Google Drive catalog into a more structured and easy-to-navigate catalog.",
      },
      {
        number: "02",
        title: "Rental Information",
        description:
          "Pricing, guarantees, and rental terms are readily available so customers can understand the rental details before contacting the admin.",
      },
      {
        number: "03",
        title: "Rental Form",
        description:
          "The rental form collects necessary data, including the device, pickup method, and other rental information.",
      },
      {
        number: "04",
        title: "WhatsApp Integration",
        description:
          "Rental data is automatically compiled into a complete WhatsApp message and sent to the admin, including the requested location if the customer chooses the COD method.",
      },
    ],

    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],

    challenges: [
      {
        number: "01",
        title: "Product Presentation",
        description:
          "Transforming a poster-based catalog into a more structured and user-friendly product browsing experience.",
      },
      {
        number: "02",
        title: "Rental Form Flow",
        description:
          "Designing a form that adjusts its fields based on the customer's selected pickup method, including asking for a location when COD is selected.",
      },
      {
        number: "03",
        title: "WhatsApp Integration",
        description:
          "Compiling all form data into a complete WhatsApp message so the admin doesn't need to ask for information the customer has already provided.",
      },
    ],

    learning:
      "This project deepened my experience with Next.js and building a business website that not only focuses on visuals but also simplifies the user flow from selecting a device to submitting a rental request.",
  },
];
