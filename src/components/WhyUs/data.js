import complete from "../Images/icon_complete.svg";
import price from "../Images/icon_price.svg";
import time from "../Images/icon_24hrs.svg";
import profesional from "../Images/icon_professional.svg";

const data_Card = [
  {
    id: 1,
    title: "Mobil Lengkap",
    paragraph:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    img: `${complete}`,
    alt_Img: "icon_complete",
  },
  {
    id: 2,
    title: "Harga Murah",
    paragraph:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    img: `${price}`,
    alt_Img: "icon_price",
  },
  {
    id: 3,
    title: "Layanan 24 Jam",
    paragraph:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    img: `${time}`,
    alt_Img: "icon_time",
  },
  {
    id: 4,
    title: "Sopir Profesional",
    paragraph:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    img: `${profesional}`,
    alt_Img: "icon_professional",
  },
];

export default data_Card;
