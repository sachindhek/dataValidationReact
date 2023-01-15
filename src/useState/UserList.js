import React from 'react'

const UserList = ({ userData, editUserList, deleteUserList, text }) => {
    return (
        <div>
            <table className='table tableStyle'>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        userData && userData.length ? userData.map((person, i) => {
                            return <tr key={`${person.name}-${i}`}>
                                <td>{1 + i}</td>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td>{person.age}</td>
                                <td><button className='btn btn-primary m-2' onClick={() => editUserList(person)}>Edit</button><button className='btn btn-primary m-2' onClick={() => deleteUserList(i)}>Delete</button></td>
                            </tr>
                        }) : <p><b><i>{text}</i></b></p>
                    }
                </tbody>
            </table>
        </div>
    )
}


export default UserList
