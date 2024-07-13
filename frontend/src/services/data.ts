import tv from "../assets/tv.png";
import tvHome from "../assets/tv-home.png";
import tvScreen from "../assets/tv-screen.png";
import display from "../assets/display.png";

import {
    getUUID,
    getNumericId,
    autoIncrementIdGenerator
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
        description: "Ve en smart TV, Consolas de Video Juegos, Chromecast, Apple TV y mucho más.",
        thumbnail: tvScreen,
        reverse: false
    },
    {
        id: assignId(),
        title: "Descarga tus cursos para verlas offline",
        description: "Guarda tu contenido favorito y tendrás siempre algo para ver.",
        thumbnail: tv,
        reverse: true
    },
    {
        id: assignId(),
        title: "Disfruta donde quieras",
        description: "Clases y cursos ilimitados en tu teléfono, tablet, laptop y TV.",
        thumbnail: display,
        reverse: false
    },
    {
        id: assignId(),
        title: "Crea tus perfiles",
        description: "Pudiendo agregar hasta un maximo de 10 perfiles de usuario por plataforma. Una vez alcanzado el limite puedes remover cuentas para agregar otras.",
        thumbnail: tvHome,
        reverse: true
    }
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
        answer: "Lorem ipsum"
    },
    {
        id: getUUID(),
        question: "¿Lorem ipsum dolor?",
        answer: "Lorem ipsum"
    },
    {
        id: getUUID(),
        question: "¿Lorem ipsum dolor?",
        answer: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"
    },
    {
        id: getUUID(),
        question: "¿Lorem ipsum dolor?",
        answer: "Lorem ipsum"
    }
];
