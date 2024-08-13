import { Injectable } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';

@Injectable()
export class RecipeService {

  constructor() { }

  public getRecipes(): RecipeModel[]{
    return [
      {
        "id": 1,
        "name": "Tomato Soup",
        "description": "A delicious tomato soup with fresh basil and garlic.",
        "time": 30,
        "ingredients": [
          {
            "id": 1,
            "name": "Tomato",
            "months": ["June", "July", "August"]
          },
          {
            "id": 2,
            "name": "Basil",
            "months": ["May", "June", "July"]
          },
          {
            "id": 3,
            "name": "Garlic",
            "months": ["June", "July", "August"]
          }
        ]
      },
      {
        "id": 2,
        "name": "Beef Stew",
        "description": "A hearty beef stew with vegetables and herbs.",
        "time": 120,
        "ingredients": [
          {
            "id": 4,
            "name": "Beef",
            "months": ["January", "February", "March"]
          },
          {
            "id": 5,
            "name": "Carrot",
            "months": ["October", "November", "December"]
          },
          {
            "id": 6,
            "name": "Potato",
            "months": ["September", "October", "November"]
          }
        ]
      },
      {
        "id": 3,
        "name": "Chicken Salad",
        "description": "A fresh chicken salad with mixed greens and a light vinaigrette.",
        "time": 15,
        "ingredients": [
          {
            "id": 7,
            "name": "Chicken",
            "months": ["January", "February", "March"]
          },
          {
            "id": 8,
            "name": "Lettuce",
            "months": ["April", "May", "June"]
          },
          {
            "id": 9,
            "name": "Tomato",
            "months": ["June", "July", "August"]
          }
        ]
      }
    ]



  }
}
