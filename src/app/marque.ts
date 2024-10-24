export interface Marque{
    id:number,
    nom:string,
    description:string,
    image:string,
    creation:string,
    etoiles: number,
    type: string,
    produits: []
}

export type marqueListe = Marque[]