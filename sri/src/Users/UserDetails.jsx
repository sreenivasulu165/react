import React from 'react'

const UserDetails = (props) => {
    return (
        <div className='container'>
            <h2>UserDetails</h2>
            {/* <h4>{JSON.stringify(props)}</h4> */}
            <div className='row'>
                <div className='col'>
                    <div className='card-header'>
                        <img src={props.selectedUser.image} alt='' />
                    </div>
                    <div className='card-body'>
                        <ul className='list-group'>
                            <li className='list-group-item'>{props.selectedUser.age}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserDetails