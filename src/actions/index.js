import axios from 'axios';
export const SHOW_PRODUCTS ="SHOW_PRODUCTS";
export const DELETE_PRODUCT="DELETE_PRODUCT";


export function showProducts(){
    return function(dispatch){
        return axios.get('http://localhost:1337/productos')
           .then(data =>{
               dispatch({type: SHOW_PRODUCTS, payload: data})
           })
    }
    
}

export function deleteProduct(productId){
    console.log('ENTRAMOS ACA:',productId);
    //const obj={ id: productId}
    axios.delete('http://localhost:1337/productos/delete/'+productId)
    
}