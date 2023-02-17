import React from 'react'

const UserList = (props) => {
    let selectedUserHandle = (user) => {
        console.log(user);
        props.selectedUser(user)
    }

    return (
        <div className='container'>
            <h1>UserList </h1>
            { <pre>{JSON.stringify(props)}</pre> }
            <div className='row'>
                <div className='col-md-8'>
                    <table className='table'>
                        <thead className='table table-hover'>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>MAIL</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                props.user.map((user) => {
                                    return(
                                        <tr key={user.id} onClick={selectedUserHandle.bind(this, user)}>
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.age}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList