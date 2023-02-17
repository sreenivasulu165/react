import React, { Component } from 'react'
import Axios from 'axios'
export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            User: []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ User: response.data })
                // console.log(response.data);
            })
            .catch(() => { })
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <pre>{JSON.stringify(this.state.user)}</pre>
                    <div className='col-md-8'>
                        <table className='table table-hover'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <td>id</td>
                                    <td>name</td>
                                    <td>username</td>
                                    <td>email</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map((user) => {

                                        return <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        )
    }
}

export default User