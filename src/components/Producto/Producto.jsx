import React from 'react'


function Producto(producto){
    return(
        
        <div>
            <h1>Producto Nº {producto.product.id}</h1>
            <h2>{producto.product.nombre}</h2>
            <h2>{producto.product.precio}</h2>
        </div>
    )
}

export default Producto