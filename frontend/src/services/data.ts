import tv from "/assets/tv.png";
import tvHome from "/assets/tv-home.png";
import tvScreen from "/assets/tv-screen.png";
import display from "/assets/display.png";
import planDuo from "/assets/plan-duo.png";
import planMono from "/assets/plan-mono.png";
import planFamiliar from "/assets/plan-familiar.png";

import {
  getUUID,
  getNumericId,
  autoIncrementIdGenerator,
} from "../utils/generator";

interface Advertisement {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  reverse: boolean;
}

const assignId: getNumericId = autoIncrementIdGenerator();

export const advertisements: Array<Advertisement> = [
  {
    id: assignId(),
    title: "Disfruta en TV",
    description:
      "Ve en smart TV, Consolas de Video Juegos, Chromecast, Apple TV y mucho más.",
    thumbnail: tvScreen,
    reverse: false,
  },
  {
    id: assignId(),
    title: "Descarga tus cursos para verlas offline",
    description:
      "Guarda tu contenido favorito y tendrás siempre algo para ver.",
    thumbnail: tv,
    reverse: true,
  },
  {
    id: assignId(),
    title: "Disfruta donde quieras",
    description:
      "Clases y cursos ilimitados en tu teléfono, tablet, laptop y TV.",
    thumbnail: display,
    reverse: false,
  },
  {
    id: assignId(),
    title: "Crea tus perfiles",
    description:
      "Pudiendo agregar hasta un maximo de 10 perfiles de usuario por plataforma. Una vez alcanzado el limite puedes remover cuentas para agregar otras.",
    thumbnail: tvHome,
    reverse: true,
  },
];

interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faq: Array<Faq> = [
  {
    id: getUUID(),
    question: "¿Lorem ipsum dolor?",
    answer: "Lorem ipsum",
  },
  {
    id: getUUID(),
    question: "¿Lorem ipsum dolor?",
    answer: "Lorem ipsum",
  },
  {
    id: getUUID(),
    question: "¿Lorem ipsum dolor?",
    answer:
      "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
  },
  {
    id: getUUID(),
    question: "¿Lorem ipsum dolor?",
    answer: "Lorem ipsum",
  },
];

interface Subcription {
  name: string;
  price: number;
  description: string;
  features: string[];
  icon: string;
  morePopular: boolean;
}

export const subcriptions: Subcription[] = [
  {
    name: "Duo",
    price: 78000,
    icon: planDuo,
    description:
      "Disfruta de contenido ilimitado con otra persona. Comparte y accede a tus series y películas favoritas juntos, desde cualquier dispositivo.",
    features: [
      "Access to all features",
      "1k lookups / per month",
      "10 Monitoring Quota",
      "30K API Credits / month",
      "60 minutes Monitoring intervel",
      "20% discount on backorders",
    ],
    morePopular: false,
  },
  {
    name: "Mono",
    price: 49000,
    icon: planMono,
    description:
      "Disfruta de contenido ilimitado con otra persona. Comparte y accede a tus series y películas favoritas juntos, desde cualquier dispositivo.",
    features: [
      "Access to all features",
      "1k lookups / per month",
      "10 Monitoring Quota",
      "30K API Credits / month",
      "60 minutes Monitoring intervel",
      "20% discount on backorders",
    ],
    morePopular: true,
  },
  {
    name: "Familiar",
    price: 99000,
    icon: planFamiliar,
    description:
      "Disfruta de contenido premium con toda la familia. Este plan permite que hasta cuatro personas accedan simultáneamente a sus series y películas favoritas desde cualquier dispositivo.",
    features: [
      "Access to all features",
      "1k lookups / per month",
      "10 Monitoring Quota",
      "30K API Credits / month",
      "60 minutes Monitoring intervel",
      "20% discount on backorders",
    ],
    morePopular: false,
  },
];

interface Goal {
  statistics: string;
  description: string;
}

export const goals: Goal[] = [
  {
    statistics: "+100",
    description:
      "Cursos de Tecnología, Programación, Diseño, Marketing, Robotica...",
  },
  {
    statistics: "+60",
    description:
      "Profesionales Dedicados están Aquí para Impulsar tu Éxito Educativo.",
  },
  {
    statistics: "90%",
    description: "De Nuestros Estudiantes Alcanzan sus Metas Educativas.",
  },
];
