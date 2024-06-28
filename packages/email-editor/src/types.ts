export interface MenuItem {
    name: string;
    link: string;
}

export interface DetailsItem {
    title: string
    description: string
    buttonText: string
}

export interface TodosItem {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}