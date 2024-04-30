import { Injectable } from '@angular/core';
import { Food } from '../../models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
   constructor() { }

  getAll():Food[]{
    return [
      {
        Name:"Ice-Cream",
        Price:5,
        Favorite:true,
        Origins:['Napoli','Italy'],
        CookTime:'5',
        Stars:3.5,
        ImgUrl:'/assets/images/foods/food1.jpg'
      },
      {
        Name:"Ice-cream",
        Price:4,
        Favorite:true,
        Origins:['Bergamo','Italy'],
        CookTime:'2',
        Stars:2.3,
        ImgUrl: '/assets/images/foods/food2.jpg'
      },
      {
        Name:"Spaghetti",
        Price:12,
        Favorite:false,
        Origins:['Rome','Italy'],
        CookTime:'5-10',
        Stars:3,
        ImgUrl:'/assets/images/foods/food3.jpg'
      },
      {
        Name:"Souffle",
        Price:11,
        Favorite:true,
        Origins:['Paris','France'],
        CookTime:'5-15',
        Stars:3,
        ImgUrl:'/assets/images/foods/food4.jpg'
      },
      {
        Name:"Salmon",
        Price:20,
        Favorite:false,
        Origins:['Napoli','Italy'],
        CookTime:'5-10',
        Stars:2.1,
        ImgUrl:'/assets/images/foods/food5.jpg'
      },
      {
        Name:"Meat with salad and avoccado",
        Price:16,
        Favorite:true,
        Origins:['Napoli','Italy'],
        CookTime:'5-10',
        Stars:1,
        ImgUrl:'/assets/images/foods/food6.jpg'
      },
     
    ] ;
    }

}

 
