//For Add Item to Cart
export const addCart = (product)=>{
    return{
        type:"ADDITEM",
        payload : product
    }
}

//For DELETE Item FRom Cart
export const delCart = (product)=>{
    return{
        type:"DELITEM",
        payload : product
    }
}