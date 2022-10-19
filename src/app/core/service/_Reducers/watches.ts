import { Action } from "@ngrx/store";
import { cartItemModel } from "../../models/cart.item.model";
import { WATCH } from "../../models/watch.model";

const initState:stateType={
Watches:[
    {name:'Rolex' ,
    id:'294959591', 
    price:84995.00, 
    discount:20 ,
    description:'Cosmograph Daytona Green Dial Watch 116508-0013',
    imgUrl:"https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    },
    {name:'ROLEX DAYTONA COSMOGRAPH' ,
    id:'294959592', 
    price:250500, 
    discount:0,
    description:"Cosmograph Daytona Steel Bezel Black Dial Men's Watch 116520-0015",
    imgUrl:"https://images.unsplash.com/photo-1468421201266-ec88b2809284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {name:'Mens Black Ultra' ,
    id:'294959593', 
    price:950500, 
    discount:0,
    description:"Thin Watches Simple Minimalist Fashion Gent Business Dress Stainless Steel Wrist Watches Analog Quartz Waterproof Casual Watch Black, All Black, Quartz Movement ",
    imgUrl:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {name:'Q&Q VR52J014Y Black Color Resin Strap Men Watch ' ,
    id:'294959594', 
    price:500, 
    discount:0,
    description:"Strap Material Resin Watch Face Analog Case Material Resin Case Shape Round Watch Case Diameter 40mm",
    imgUrl:"https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
},
{name:'ROLEX DAYTONA COSMOGRAPH' ,
id:'2949595925', 
price:2150500, 
discount:0,
description:"Cosmograph Daytona Steel Bezel Black Dial Men's Watch 116520-0015",
imgUrl:"https://images.unsplash.com/photo-1468421201266-ec88b2809284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
},
{name:'Mens Black Ultra' ,
id:'2949595937', 
price:450500, 
discount:0,
description:"Thin Watches Simple Minimalist Fashion Gent Business Dress Stainless Steel Wrist Watches Analog Quartz Waterproof Casual Watch Black, All Black, Quartz Movement ",
imgUrl:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
},
{name:'Q&Q VR52J014Y Black Color Resin Strap Men Watch ' ,
id:'2949595948', 
price:1500, 
discount:0,
description:"Strap Material Resin Watch Face Analog Case Material Resin Case Shape Round Watch Case Diameter 40mm",
imgUrl:"https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
},
{name:'Rolex 990' ,
id:'7294959591', 
price:84995.00, 
discount:20 ,
description:'Cosmograph Daytona Green Dial Watch 116508-0013',
imgUrl:"https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
},
{name:'ROLEX DAYTONA COSMOGRAPH' ,
id:'6294959592', 
price:250500, 
discount:0,
description:"Cosmograph Daytona Steel Bezel Black Dial Men's Watch 116520-0015",
imgUrl:"https://images.unsplash.com/photo-1468421201266-ec88b2809284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
},
{name:'Mens Black Ultra' ,
id:'5294959593', 
price:950500, 
discount:0,
description:"Thin Watches Simple Minimalist Fashion Gent Business Dress Stainless Steel Wrist Watches Analog Quartz Waterproof Casual Watch Black, All Black, Quartz Movement ",
imgUrl:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
},
{name:'Q&Q VR52J014Y Black Color Resin Strap Men Watch ' ,
id:'4294959594', 
price:500, 
discount:0,
description:"Strap Material Resin Watch Face Analog Case Material Resin Case Shape Round Watch Case Diameter 40mm",
imgUrl:"https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
},
{name:'ROLEX DAYTONA COSMOGRAPH' ,
id:'32949595925', 
price:2150500, 
discount:0,
description:"Cosmograph Daytona Steel Bezel Black Dial Men's Watch 116520-0015",
imgUrl:"https://images.unsplash.com/photo-1468421201266-ec88b2809284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
},
{name:'Mens Black Ultra' ,
id:'22949595937', 
price:450500, 
discount:0,
description:"Thin Watches Simple Minimalist Fashion Gent Business Dress Stainless Steel Wrist Watches Analog Quartz Waterproof Casual Watch Black, All Black, Quartz Movement ",
imgUrl:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
},
{name:'Q&Q VR52J014Y Black Color Resin Strap Men Watch ' ,
id:'12949595948', 
price:1500, 
discount:0,
description:"Strap Material Resin Watch Face Analog Case Material Resin Case Shape Round Watch Case Diameter 40mm",
imgUrl:"https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
},
{name:'Mens Black Ultra' ,
id:'229495959371', 
price:1450500, 
discount:0,
description:"Thin Watches Simple Minimalist Fashion Gent Business Dress Stainless Steel Wrist Watches Analog Quartz Waterproof Casual Watch Black, All Black, Quartz Movement ",
imgUrl:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
},
{name:'Q&Q VR52J014Y Black Color Resin Strap Men Watch ' ,
id:'129495959481', 
price:12500, 
discount:0,
description:"Strap Material Resin Watch Face Analog Case Material Resin Case Shape Round Watch Case Diameter 40mm",
imgUrl:"https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
},


]   
}

enum typeActions{
Add='ADD_ITEM',
Delete='DELETE_ITEM',
Update='UPDATE_ITEM'
}


interface CustomAction{
type:string,
payload:WATCH
}


interface StoreType{

Item:stateType
}


export interface stateType{
Watches:Array<WATCH>
}






export function Reducer(state=initState,action:Action):stateType{   
switch (action.type) {

    default:
       return state
}
}


//------------------------------------------------------------------


export interface CartType{
CartWatches:cartItemModel[]
}

const InitCart:CartType={
CartWatches:[]
}


export interface stateCartStore{
    CartItem:CartType
}


export interface actionCustomCart extends Action { 
Payload:WATCH
}


export enum cartActionsType{
addToCart='ADD_TO_CART',
removefromCart='REMOVE_FROM_CART',
updateCart='UPDATE_ITEM_IN_CART'
}

interface fakeAction{
type?:string,
Payload:cartItemModel
}

export function ReducerAddToCart(state:CartType=InitCart,action:any):CartType{
switch (action.type) {
    case cartActionsType.addToCart:
    return state={CartWatches:[action.Payload,...state.CartWatches]}

    case cartActionsType.removefromCart:
    let empArr:cartItemModel[]=[];
    for(let x =0 ; x<state.CartWatches.length ;x++){
        if(state.CartWatches[x].Product.id!==action.Payload.Product.id){
           empArr.push(state.CartWatches[x])  
        }
    }
     return state={CartWatches:[...empArr]}   

     

    case cartActionsType.updateCart:
    const beforeUpdate:any=[];
    console.log(state.CartWatches)
    state.CartWatches.forEach((val)=>{
        if(val.Product['id']===action.Payload.Product['id']){
            beforeUpdate.push(action.Payload)
        }else{
            beforeUpdate.push(val)
        }
    })
console.log(beforeUpdate)
return state={CartWatches:[...beforeUpdate]}

    default:
        return state
}



}