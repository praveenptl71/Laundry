export interface IService{
    readonly id:number,
    title: string,
    description?: string,
    image?:any
}

export interface IDrawerMenu{
    readonly id:number,
    title: string,
    route: string,
    icon: string
}

export type ProductCategory = 'male' | 'female';

export interface IProduct{
    readonly id:number,
    title: string,
    description?: string,
    image?:any,
    price:number,
    category:ProductCategory,
    quantity:number,
    createAt: string
}