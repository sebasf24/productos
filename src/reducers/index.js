import {SHOW_PRODUCTS,DELETE_PRODUCT} from '../actions';

const initialState ={
    productsLoaded: []
}

export default (state =initialState,action) =>{

    switch(action.type){
        case SHOW_PRODUCTS:
            return action.payload

        case DELETE_PRODUCT:
            return action.payload;
            
        default:
            return state;
    }

}

