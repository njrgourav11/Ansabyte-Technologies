import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  linkedin,
} from "../assets";
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Services",
    url: "#services",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [logo1, logo2, logo3, logo4];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const benefits = [
  {
    id: "0",
    title: "Data Analysis",
    text: "We help clients make informed decisions by leveraging data through our analytics services, using ML-powered models and frameworks, and aligning them with their business goals. ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "ESG Services",
    text: "Our ESG services help organizations improve sustainability and corporate social responsibility through sustainable business strategies, risk management, and performance monitoring.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Data Science",
    text: "We specialize in solving intricate data challenges for our clients, allowing them to predict product and service demand, boost customer satisfaction, and develop business strategies based on insight and expertise.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Decision Science",
    text: "Our decision science services use data-driven insights derived from advanced analytics, modeling, and simulation techniques to inform strategic planning and improve business outcomes for organizations.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Cybersecurity",
    text: "Our comprehensive cybersecurity services employ advanced technologies and practices to safeguard digital assets and sensitive data, while our training programs enhance cybersecurity practices.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Digital Transformation",
    text: "We help businesses navigate the complex digital landscape by providing end-to-end transformation services, from strategy to implementation and optimization. ",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/ansabyte/",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/ansabyte_tech/",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/ansabytetech",
  },
];
