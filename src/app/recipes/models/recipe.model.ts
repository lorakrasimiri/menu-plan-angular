import { IngerdientModel } from "./ingredients.model";

export interface RecipeModel{
    id: number, 
    name: string,
    description: string
    time: number
    ingredients: IngerdientModel[];
}