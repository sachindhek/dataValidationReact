import { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import "./Table.css"

const Users = () => {

    // let userInfo = { name: '', email: '', age: '' }
    // const [user, setUser] = useState(userInfo)
    // const [user, setUser] = useState({ userId: -1, name: '', email: '', age: '' })
    const [user, setUser] = useState({ name: '', email: '', age: '' })
    const [userData, setUserDataList] = useState([]);
    const [errorMessage, setError] = useState({ nameErr: '', emailErr: '', ageErr: '' })
    const [button, setButton] = useState(false)

    useEffect(() => {
        let userListData = JSON.parse(localStorage.getItem('arrayOfDataList')) || [];
        setUserDataList(userListData)
    }, [])

    const onChangeInput = (e) => {
        let inputname = e.target.name;
        let val = e.target.value;
        setUser({ ...user, [inputname]: val })
    }

    const submitFormValidation = () => {
        let createError = { ...errorMessage }

        createError.nameErr = user.name.trim() === '' ? "Please don't empty Name field" : '';

        if (user.email.trim() === '') {
            createError.emailErr = "Please don't empty Email field";
        } else if (!emailValidation(user.email)) {
            createError.emailErr = "Invalid Email, please add atlest one @ or . ";
        } else {
            createError.emailErr = " ";
        }

        createError.ageErr = user.age.trim() === '' ? "Please select Age" : '';

        setError({ ...createError })

        if (user.name !== '' && user.email !== '' && user.age !== '') {
            let uniqueId = new Date().getTime();
            // setUser({ ...user, uniqueId })
            let dataArray = {
                id: uniqueId,
                name: user.name,
                email: user.email,
                age: user.age
            }

            let userList = JSON.parse(localStorage.getItem("arrayOfDataList")) || [];
            // let copyOfUserList = [...userList];
            // console.log(userData)
            userList.push(dataArray);
            localStorage.setItem('arrayOfDataList', JSON.stringify(userList))
            setUserDataList(userList)
            // setUser(userInfo);
            setUser({ name: '', email: '', age: '' });
        }
    }

    const emailValidation = (email) => {
        let emailMatch = /\S+@\S+\.\S+/;
        if (email.match(emailMatch)) {
            return true;
        } else {
            return false;
        }
        // email.match(emailMatch) ? true : false;
    }

    const editUserList = (person) => {
        // let copyOfTableData = [...userData]
        // let name = copyOfTableData[i].name;
        // let email = copyOfTableData[i].email
        // let age = copyOfTableData[i].age
        // setUser({ ...user, name, email, age })
        setUser(person)
        setButton(true)
    }

    const deleteUserList = (i) => {
        let deleteDataUserList = JSON.parse(localStorage.getItem("arrayOfDataList"))
        // let copyOfUserList = [...deleteDataUserList];
        deleteDataUserList.splice(i, 1)
        localStorage.setItem('arrayOfDataList', JSON.stringify(deleteDataUserList))
        setUserDataList(deleteDataUserList)
        setButton(false)
    }

    const saveUserEditdata = () => {

        let saveUserList = JSON.parse(localStorage.getItem("arrayOfDataList"))
        // let copyOfUserList = [...saveUserList];
        console.log(saveUserList)
        if (user.id !== '' && user.name !== '' && user.email !== '' && user.age !== '') {
            let index = saveUserList.findIndex((val) => val.id === user.id)
            saveUserList.splice(index, 1, user)
            localStorage.setItem('arrayOfDataList', JSON.stringify(saveUserList))
            setUserDataList(saveUserList);
            setUser({ name: '', email: '', age: '' });
        }
        setButton(false)
    }

    return (
        <>
            <div>
                <UserForm onChangeInput={onChangeInput} button={button} submit={submitFormValidation} save={saveUserEditdata} user={user} errorMessage={errorMessage} />
            </div>
            <div >
                <UserList userData={userData} editUserList={editUserList} deleteUserList={deleteUserList} text='No Data Found' />

            </div>
        </>
    );
}

export default Users

