import { Injectable } from '@angular/core';
@Injectable()
export class ProductsService {
    imgsrc = "../assets/images/oneplus.jpg";
    imgsrc1 ="../assets/images/71IK6CnEupL._UX466_.jpg";
    imgsrc2 ="../assets/images/puma.jpeg";
    imgsrc3 ="../assets/images/Kettle.jpg";
    imgsrc4 ="../assets/images/fearri.jpg";
    imgsrc5 ="../assets/images/nike.jpg";
    imgsrc6="../assets/images/cool waters.jpg";


    
    categories = [
        {cat_id:"c1",cat_name:"Watches"},
        {cat_id:"c2",cat_name:"Shoes"},
        {cat_id:"c3",cat_name:"Perfumes"},
        {cat_id:"c4",cat_name:"Mobiles"},
        {cat_id: "c5",cat_name:"home"}
    ]
    // products = [
    //     {id:123,name:"Ferrari",price:6500,brand:"Ferrari",category:"c3",image:this.imgsrc},
    //     {id:124,name:"Cool waters",price:3500,brand:"David off",category:"c3",image:this.imgsrc},
    //     {id:125,name:"Diesel",price:1000,brand:"Diesel",category:"c1",image:this.imgsrc},
    //     {id:126,name:"oneplus 7",price:70000,brand:"oneplus",category:"c4",image:this.imgsrc},
    //     {id:127,name:"Nike",price:4800,brand:"Nike",category:"c2",image:this.imgsrc},
    //     {id:128,name:"Puma",price:7500,brand:"Nike",category:"c2",image:this.imgsrc}
    // ]
    products = {
        perfumes:[
            {id:123,name:"Ferrari",price:6500,brand:"Ferrari",category:"c3",image:this.imgsrc4},
            {id:124,name:"Cool waters",price:3500,brand:"David off",category:"c3",image:this.imgsrc6}
        ],
        watches:[{id:125,name:"Diesel",price:1000,brand:"Diesel",category:"c1",image:this.imgsrc1}],
        mobiles:[{id:126,name:"oneplus 7",price:70000,brand:"oneplus",category:"c4",image:this.imgsrc}],
        shoes:[
            {id:127,name:"Nike",price:4800,brand:"Nike",category:"c2",image:this.imgsrc5},
            {id:128,name:"Puma",price:7500,brand:"Nike",category:"c2",image:this.imgsrc2}
        ],
        home:[{id:129,name:"coffe heater",price:1200,bring:"philipes",category:"c5",image:this.imgsrc3}]
    }
    allproducts = []; 
    cartkeys = [];
    cart = {};
    constructor(){

    }
    getCats(){
        return this.categories;
    }
    getPros(){
        for(let x in this.products){
            for(let y in this.products[x]){
               // console.log(this.products[x][y]);
               this.allproducts.push(this.products[x][y])
            }
            // console.log(this.products[x]);
        }
        console.log(this.allproducts);
         return this.allproducts;
         
    }

    getMyPros(cat: string){
        // console.log(cat);
        // console.log(this.products[cat]);
        return this.products[cat];
    }
}