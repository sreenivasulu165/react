import React, { Component } from 'react'
import employess from './Employees/Data'

export default class Employee extends Component {
    render() {
        return (
            <div>
            <pre>{JSON.stringify(employess)}</pre>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <table className='table table-hover'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th>id</th>
                                    <th>first_name</th>
                                    <th>email</th>
                                    <th>gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   employess.map((Employee)=>{
                                    {return <tr>
                                        <td>{Employee.id}</td>
                                        <td>{Employee.first_name}</td>
                                        <td>{Employee.email}</td>
                                        <td>{Employee.gender}</td>
                                    </tr>
                                    }
                                   })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
