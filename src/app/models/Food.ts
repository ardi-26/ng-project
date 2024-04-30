export class Food{
    Name:string;
    Price : Number;
    Favorite:boolean;
    Origins:String[];
    CookTime:String;
    Stars:number=0;
    ImgUrl:String;
  
    constructor(Name:string,Price:Number,Favorite:boolean,Origins:String[],CookTime:String,Stars:number,ImgUrl:String){
        this.Name=Name;
        this.Price=Price;
        this.Favorite=Favorite;
        this.Origins=Origins;
        this.CookTime=CookTime;
        this.Stars=Stars;
        this.ImgUrl=ImgUrl;
    }
}