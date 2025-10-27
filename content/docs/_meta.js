import { newLabel } from "@components/new_label";

export default {
    index: "Introduction",
    terminology: "Terminologie & Concepts",
    faq: <div>FAQ</div>,
    _1: {
        type: 'separator',
        title: 'Espace de Travail',
    },
    accueil: "L'accueil",
    chats_room: "Chats Room",
    ai_search: "Documents",
    projects: <div key="projet">Projets {newLabel}</div>,
    workbooks:"Carnets de travail",
    _2: {
        type: 'separator',
        title: 'Plugins Externes',
    },
    excel:"Plugin Excel",
    _3: {
        type: 'separator',
        title: 'Catalogue',
    },
    prompts_store: "Prompts Store",
    assistants: "Assistants",
    applications: "Applications",
    experiences: <div key="experiences">Expériences {newLabel}</div>,
    _4: {
        type: 'separator',
        title: 'Administration',
    },
    settings: 'Réglages',
    observability: 'Observabilité',
}
