import planDuo from "/assets/plan-duo.png";
import planFamiliar from "/assets/plan-familiar.png";
import planMono from "/assets/plan-mono.png";

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
    description: "Cursos de Tecnología, Programación, Diseño, Marketing, Robotica...",
  },
  {
    statistics: "+60",
    description: "Profesionales Dedicados están Aquí para Impulsar tu Éxito Educativo.",
  },
  {
    statistics: "90%",
    description: "De Nuestros Estudiantes Alcanzan sus Metas Educativas.",
  },
];

export const paymentTypes: string[] = [
  "Tarjeta de crédito o débito",
  "Efecty",
  "PSE",
  "Código de regalo",
];
interface Synopsis {
  title: string;
  description: string;
}

export const synopsis_group: Synopsis[] = [
  {
    title: "React Intensivo ",
    description:
      "Este curso intensivo de React te llevará de principiante a experto en cuatro semanas, con un enfoque en la creación de aplicaciones interactivas y componentes reutilizables a través de ejercicios prácticos y proyectos reales.",
  },
];
