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
      "Self-order dan queue management platform untuk membantu UMKM mengelola pesanan dengan lebih terstruktur.",

    description:
      "Maxsten adalah aplikasi pemesanan mandiri berbasis QR Code yang dirancang untuk membantu warung, kafe, dan UMKM F&B mengelola pesanan secara lebih terstruktur.",

    problem: [
      "Pesanan dapat terlewat ketika banyak pelanggan datang secara bersamaan.",
      "Penjual harus mengingat banyak pesanan dalam waktu yang sama.",
      "Pelanggan tidak selalu mengetahui perkembangan pesanannya.",
    ],

    solution:
      "Maxsten memindahkan proses pemesanan langsung kepada pelanggan. Pelanggan cukup memindai QR Code, memilih produk, dan mengirim pesanan tanpa perlu membuat akun.",

    features: [
      {
        number: "01",
        title: "QR Self-Order",
        description:
          "Pelanggan dapat melakukan pemesanan langsung melalui smartphone tanpa perlu menginstal aplikasi.",
      },
      {
        number: "02",
        title: "Real-time Queue",
        description:
          "Pesanan dapat dipantau berdasarkan status sehingga penjual dapat melihat antrean yang sedang berjalan.",
      },
      {
        number: "03",
        title: "Product Management",
        description:
          "Penjual dapat mengelola produk, harga, varian, dan add-on.",
      },
      {
        number: "04",
        title: "Order Status",
        description:
          "Status pesanan dapat diperbarui sehingga pelanggan mengetahui perkembangan pesanannya.",
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
          "Menangani kemungkinan beberapa pelanggan melakukan pemesanan pada waktu yang hampir bersamaan.",
      },
      {
        number: "02",
        title: "Real-time Updates",
        description:
          "Menyinkronkan perubahan status pesanan antara pelanggan dan penjual tanpa refresh manual.",
      },
      {
        number: "03",
        title: "Simple Ordering Flow",
        description:
          "Membuat alur pemesanan yang mudah digunakan tanpa mengharuskan pelanggan membuat akun.",
      },
    ],

    learning:
      "Project ini memperdalam pengalaman dalam membangun aplikasi full-stack dari frontend hingga backend, termasuk database, validasi, autentikasi, real-time communication, dan state management.",
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
      "Website brand parfum dengan pendekatan visual minimal dan premium.",

    description:
      "Rnee merupakan konsep website untuk brand parfum yang berfokus pada visual, storytelling, dan presentasi produk.",

    problem: [
      "Produk fragrance membutuhkan presentasi visual yang mampu menyampaikan karakter brand.",
      "Informasi produk perlu disampaikan tanpa membuat halaman terasa terlalu padat.",
    ],

    solution:
      "Website dirancang dengan pendekatan minimal, typography yang kuat, dan visual yang memberikan ruang bagi produk untuk menjadi fokus utama.",

    features: [
      {
        number: "01",
        title: "Product Showcase",
        description:
          "Produk ditampilkan dengan layout yang memberikan fokus pada visual dan identitas fragrance.",
      },
      {
        number: "02",
        title: "Brand Storytelling",
        description:
          "Konten disusun untuk membangun karakter dan suasana brand.",
      },
      {
        number: "03",
        title: "Responsive Design",
        description:
          "Layout disesuaikan untuk desktop maupun perangkat mobile.",
      },
      {
        number: "04",
        title: "Micro Interaction",
        description:
          "Animasi digunakan untuk memberikan pengalaman browsing yang lebih hidup.",
      },
    ],

    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],

    challenges: [
      {
        number: "01",
        title: "Visual Balance",
        description:
          "Menjaga keseimbangan antara typography, whitespace, gambar, dan elemen dekoratif.",
      },
      {
        number: "02",
        title: "Responsive Layout",
        description:
          "Memastikan visual tetap memiliki karakter yang sama pada berbagai ukuran layar.",
      },
    ],

    learning:
      "Project ini membantu memperdalam kemampuan dalam membangun website yang mengutamakan visual design, typography, responsive layout, dan micro-interactions.",
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
      "Website rental kamera yang menyederhanakan proses memilih kamera dan mengajukan penyewaan.",

    description:
      "Satnight merupakan website rental kamera yang dirancang untuk menyederhanakan proses dari memilih perangkat hingga mengajukan penyewaan. Website menyediakan katalog kamera yang lebih terstruktur, informasi rental yang lengkap, serta form rental yang mengumpulkan data pelanggan sebelum diteruskan langsung ke WhatsApp admin.",

    problem: [
      "Katalog kamera yang disajikan secara manual dapat membuat pelanggan kesulitan menemukan perangkat yang sesuai karena harus melihat produk satu per satu.",
      "Proses penyewaan membutuhkan banyak tanya jawab antara pelanggan dan admin untuk mengetahui harga, jaminan, dan informasi rental lainnya.",
    ],

    solution:
      "Satnight menyediakan katalog kamera yang lebih terstruktur sehingga pelanggan dapat melihat dan memilih perangkat dengan lebih mudah. Informasi harga, jaminan, dan ketentuan rental tersedia langsung di website. Setelah menemukan kamera yang diinginkan, pelanggan dapat mengisi form rental dan seluruh data yang dibutuhkan akan otomatis disusun dan dikirim ke WhatsApp admin sehingga mengurangi kebutuhan tanya jawab berulang.",

    features: [
      {
        number: "01",
        title: "Structured Camera Catalog",
        description:
          "Menampilkan kamera dalam katalog yang terstruktur sehingga pelanggan dapat menjelajahi pilihan perangkat dengan lebih mudah.",
      },
      {
        number: "02",
        title: "Rental Information",
        description:
          "Informasi harga, jaminan, dan ketentuan rental tersedia langsung sehingga pelanggan dapat memahami detail penyewaan sebelum menghubungi admin.",
      },
      {
        number: "03",
        title: "Rental Form",
        description:
          "Form rental mengumpulkan data yang dibutuhkan pelanggan untuk mengajukan penyewaan.",
      },
      {
        number: "04",
        title: "WhatsApp Integration",
        description:
          "Data rental otomatis disusun menjadi pesan WhatsApp yang lengkap dan dikirim kepada admin.",
      },
    ],

    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],

    challenges: [
      {
        number: "01",
        title: "Product Presentation",
        description:
          "Mengubah katalog kamera menjadi pengalaman browsing produk yang terstruktur tanpa membuat halaman terasa penuh.",
      },
      {
        number: "02",
        title: "Rental Form Flow",
        description:
          "Merancang form yang dapat mengumpulkan informasi penting dari pelanggan sebelum data diteruskan kepada admin.",
      },
      {
        number: "03",
        title: "WhatsApp Integration",
        description:
          "Menyusun seluruh data dari form menjadi pesan WhatsApp yang lengkap sehingga admin tidak perlu menanyakan informasi yang sudah diberikan pelanggan.",
      },
    ],

    learning:
      "Project ini memperdalam pengalaman menggunakan React dan membangun website rental yang menggabungkan katalog produk, informasi penyewaan, form pengajuan, dan integrasi WhatsApp dalam satu alur yang sederhana.",
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
      "Website rental iPhone yang menyederhanakan proses memilih perangkat dan mengajukan penyewaan.",

    description:
      "Munivy merupakan website rental iPhone yang dirancang untuk menyederhanakan proses dari memilih perangkat hingga mengajukan penyewaan. Website menggantikan katalog berbasis poster di Google Drive dengan katalog yang lebih terstruktur, sekaligus menyediakan form rental yang mengumpulkan informasi penting sebelum diteruskan langsung ke WhatsApp admin.",

    problem: [
      "Katalog produk sebelumnya disimpan di Google Drive dalam bentuk poster atau gambar daftar produk, sehingga pelanggan harus melihat katalog satu per satu dan tidak dapat dengan mudah mencari perangkat yang diinginkan.",
      "Proses penyewaan membutuhkan banyak tanya jawab antara pelanggan dan admin, seperti menanyakan harga, jaminan, metode pengambilan, dan detail penyewaan lainnya.",
    ],

    solution:
      "Munivy menyediakan katalog perangkat yang lebih terstruktur sehingga pelanggan dapat melihat dan memilih iPhone dengan lebih mudah. Informasi rental juga tersedia langsung di website, sementara form rental mengumpulkan data yang dibutuhkan, termasuk metode pengambilan seperti mengambil langsung di toko atau COD. Jika pelanggan memilih COD, mereka dapat memasukkan lokasi yang diminta. Setelah form selesai, seluruh data tersebut otomatis disusun dan dikirim ke WhatsApp admin sehingga pelanggan tidak perlu melakukan tanya jawab berulang.",

    features: [
      {
        number: "01",
        title: "Structured iPhone Catalog",
        description:
          "Mengubah katalog berbasis poster di Google Drive menjadi katalog yang lebih terstruktur dan mudah dijelajahi.",
      },
      {
        number: "02",
        title: "Rental Information",
        description:
          "Informasi harga, jaminan, dan ketentuan rental tersedia langsung sehingga pelanggan dapat memahami detail penyewaan sebelum menghubungi admin.",
      },
      {
        number: "03",
        title: "Rental Form",
        description:
          "Form rental mengumpulkan data yang dibutuhkan, termasuk perangkat, metode pengambilan, dan informasi penyewaan lainnya.",
      },
      {
        number: "04",
        title: "WhatsApp Integration",
        description:
          "Data rental otomatis disusun menjadi pesan WhatsApp yang lengkap dan dikirim kepada admin, termasuk lokasi yang diminta ketika pelanggan memilih metode COD.",
      },
    ],

    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],

    challenges: [
      {
        number: "01",
        title: "Product Presentation",
        description:
          "Mengubah katalog berbasis poster menjadi pengalaman browsing produk yang lebih terstruktur dan mudah digunakan.",
      },
      {
        number: "02",
        title: "Rental Form Flow",
        description:
          "Merancang form yang dapat menyesuaikan field berdasarkan metode pengambilan yang dipilih pelanggan, termasuk meminta lokasi ketika memilih COD.",
      },
      {
        number: "03",
        title: "WhatsApp Integration",
        description:
          "Menyusun seluruh data dari form menjadi pesan WhatsApp yang lengkap sehingga admin tidak perlu menanyakan informasi yang sudah diberikan pelanggan.",
      },
    ],

    learning:
      "Project ini memperdalam pengalaman menggunakan Next.js dan membangun website bisnis yang tidak hanya berfokus pada visual, tetapi juga menyederhanakan alur pengguna dari memilih perangkat hingga mengajukan rental.",
  },
];
