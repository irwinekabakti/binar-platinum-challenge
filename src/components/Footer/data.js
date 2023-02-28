import facebook from "../Images/icon_facebook.svg";
import instagram from "../Images/icon_instagram.svg";
import twitter from "../Images/icon_twitter.svg";
import gmail from "../Images/icon_mail.svg";
import twitch from "../Images/icon_twitch.svg";
import pdfviewer from "../PDFViewer/Pdfviewer";

const contact_Footer = [
  { id: 1, data: "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000" },
  { id: 2, data: "binarcarrental@gmail.com" },
  { id: 3, data: "081-233-334-808" },
];

const paths_Footer = [
  { id: 1, path: "/#services", name: "Our services" },
  { id: 2, path: "/#WhyUs", name: "Why Us" },
  { id: 3, path: "/#testimonial", name: "Testimonial" },
  { id: 4, path: "/#faq", name: "FAQ" },
  { id: 5, path: "/viewerPdf", name: "Term of Service" },
];

const social_Media = [
  {
    id: 1,
    link: "https://web.facebook.com/binaracademy/",
    img: `${facebook}`,
    alt_Img: "icon-facebook",
    title: "Facebook",
  },
  {
    id: 2,
    link: "https://www.instagram.com/academybinar/",
    img: `${instagram}`,
    alt_Img: "icon_instagram",
    title: "Instagram",
  },
  {
    id: 3,
    link: "https://twitter.com/academybinar",
    img: `${twitter}`,
    alt_Img: "icon_twitter",
    title: "Twitter",
  },
  {
    id: 4,
    link: "mailto:service@binar.co.id",
    img: `${gmail}`,
    alt_Img: "icon_gmail",
    title: "Gmail",
  },
  {
    id: 5,
    link: "https://www.binaracademy.com/",
    img: `${twitch}`,
    alt_Img: "icon_twitch",
    title: "Twitch",
  },
];

export { contact_Footer, paths_Footer, social_Media };
