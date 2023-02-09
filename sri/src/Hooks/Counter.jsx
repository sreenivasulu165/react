import React, { useState } from 'react'

function Counter() {
    let [product, setproduct] = useState({
        product_name: 'Aple Iphone',
        Image: "'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/k/a/o/-original-imagm7mzj4qztpyt.jpeg?q=70'",
        price: 67000,
        qty: 1
    });
    let incrHandler = () => {
        setproduct({ ...product, qty: product.qty + 1 })
    }
    let decrtHandler = () => {
        setproduct({ ...product, qty: product.qty - 1 })
    }
    return (
        <div className='container '>
            <div className='row'>
                <div className='col-md-6'>
                    <table className='table '>
                        <thead className='bg-success text-white'>
                            <tr>
                                <th>product_name</th>
                                {/* <th>Image</th> */}
                                <th>price</th>
                                <th>qty</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.product_name}</td>
                                {/* <td><img src={this.image} height='50px' alt=''></img></td> */}

                                <td>{product.price}</td>
                                <td> <button className='btn btn-success' onClick={decrtHandler}>-</button>
                                    {/* <td><i className='fa fa-minus-circle' onClick={decrementHandler}></i> */}
                                    {product.qty}
                                    <button className='btn btn-primary' onClick={incrHandler}>+</button></td>
                                {/* <i className='fa fa-plus-circle' onClick={incrementHandler}></i></td> */}
                                <td>{product.qty * product.price}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Counter

