import display from "/assets/display.png";
import tvHome from "/assets/tv-home.png";
import tvScreen from "/assets/tv-screen.png";
import tv from "/assets/tv.png";

import {
  autoIncrementIdGenerator,
  getNumericId,
  getUUID,
} from "@/common/utils/generator";

import { Advertisement, Faq } from "../types";

export const faq: Array<Faq> = [
  {
    id: getUUID(),
    question: "¿Qué diferencia STEAM Platform de otras alternativas educativas?",
    answer: " Nuestra plataforma se distingue por su avanzada gamificación, que incluye logros, insignias, y un sistema de puntos que los estudiantes pueden usar para desbloquear contenido exclusivo.",
  },
  {
    id: getUUID(),
    question: "¿Cómo asegura la plataforma que la UI sea la mejor?",
    answer: "Trabajamos con diseñadores de UI y UX de primer nivel y realizamos pruebas de usuario exhaustivas para asegurarnos de que cada elemento de la plataforma sea intuitivo y fácil de usar. También utilizamos tecnologías de vanguardia y seguimos las últimas tendencias en diseño para mantenernos al dia.",
  },
  {
    id: getUUID(),
    question: "¿Qué tipo de contenido educativo ofrece la plataforma?",
    answer: "Ofrecemos una amplia gama de contenido educativo que abarca desde materias escolares básicas hasta cursos avanzados en tecnología, ciencia, arte, y más. Cada curso está diseñado para ser interactivo y está acompañado de elementos gamificados que hacen que el aprendizaje sea más dinámico y efectivo.",
  },
  {
    id: getUUID(),
    question: "¿Cómo integra la gamificación en el proceso de aprendizaje?",
    answer: "La gamificación se integra a través de desafíos interactivos, quizzes, reconocimiento de voz y misiones que los estudiantes deben completar para avanzar. Los estudiantes ganan puntos y recompensas por sus logros, lo que los motiva a seguir aprendiendo y les proporciona un sentido de progreso y competencia sana.",
  },
  {
    id: getUUID(),
    question: "¿Qué tipo de contenido educativo ofrece la plataforma?",
    answer: "Ofrecemos una amplia gama de contenido educativo que abarca desde materias escolares básicas hasta cursos avanzados en tecnología, ciencia, arte, y más. Cada curso está diseñado para ser interactivo y está acompañado de elementos gamificados que hacen que el aprendizaje sea más dinámico y efectivo.",
  },
  {
    id: getUUID(),
    question: "¿Qué ventajas ofrece el modelo de suscripción a los usuarios de esta plataforma?",
    answer: "El modelo de suscripción ofrece a los usuarios acceso ilimitado a todo nuestro contenido, actualizaciones regulares con nuevo material educativo, y la posibilidad de participar en eventos exclusivos y competiciones. Además, garantiza un flujo constante de contenido nuevo y permite a los usuarios aprender a su propio ritmo.",
  },
  {
    id: getUUID(),
    question: "¿Qué medidas de seguridad implementan para proteger los datos de los usuarios?",
    answer: "La seguridad de los datos de nuestros usuarios es una prioridad. Implementamos cifrado de extremo a extremo, utilizamos servidores seguros y seguimos estrictos protocolos de privacidad para garantizar que la información personal esté siempre protegida. Además, cumplimos con todas las regulaciones internacionales de protección de datos.",
  },
  {
    id: getUUID(),
    question: "¿Cómo evalúamos la efectividad del aprendizaje por medio de la plataforma?",
    answer: "Utilizamos una combinación de métricas cualitativas y cuantitativas, como la tasa de finalización de cursos, el feedback de los usuarios, y evaluaciones periódicas del progreso del estudiante. También realizamos estudios de caso y seguimiento del rendimiento de los estudiantes fuera de la plataforma para asegurarnos de que están aplicando lo que han aprendido de manera efectiva.",
  },
];

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
