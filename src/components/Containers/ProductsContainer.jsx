import {connect} from 'react-redux';
import React,{Component} from 'react'
import {showProducts,deleteProduct} from '../../actions';
import Producto from '../Producto/Producto'

 class ProductsContainer extends Component{
    
    componentDidMount(){
        this.props.showProducts();
    }

   /* componentDidUpdate(){
       this.props.showProducts();
   } */
    
    render(){
        const products = this.props.Producto;
        return(
            (products !== undefined) && (
                <div>
                    {products.map((product,i) =>
                        <div key={i}> <Producto product={product}></Producto><button onClick={()=>{deleteProduct(product.id)                        
                                this.props.showProducts();
                         }}>X</button></div>
                    )}
                </div>
        )
        )
       
    }
}

function mapStateToProps(state){
    return{
        Producto: state.data
    }
}



export default connect(mapStateToProps,{showProducts,deleteProduct})(ProductsContainer);