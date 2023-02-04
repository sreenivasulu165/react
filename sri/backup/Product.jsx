import React, { Component } from 'react'

export default class Product extends Component {
    state = {
        product_name: 'nfinix NOTE 12i (Force Black, 64 GB)  (4 GB RAM)',
        image: 'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/k/a/o/-original-imagm7mzj4qztpyt.jpeg?q=70',
        price: 18000,
        quantity: 1
    }

    decrHandler = () => {
        this.setState({quantity:this.state.quantity - 1})
    }
    incrHandler = () => {
        this.setState({quantity:this.state.quantity + 1})
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col'>
                        <table className='table table-hover'>
                            <thead className='bg-primary'>
                                <th>name</th>
                                <th>image</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>total</th>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_name}</td>

                                    <td><img src={this.state.image} height='50px' alt=''></img></td>

                                    <td>{this.state.price}</td>
                                    

                                    {/* <td><i className='fa fa-minus-circle' onClick={this.decrHandler}></i>

                                    {this.state.quantity}

                                    <i className='fa fa-plus-circle' onClick={this.incrHandler}></i></td>*/}
                                    <button className='btn btn-info' onClick={this.decrHandler}>-</button>
                                    {this.state.quantity}
                                    <button className='btn btn-success ' onClick={this.incrHandler}>+</button>
                                    <td>{this.state.quantity * this.state.price}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}
