import React from 'react'

const UserForm = ({ onChangeInput, submit, user, errorMessage, button, save }) => {
    return (
        <>
            <div className='container main-div mt-6'>
                <h1 className='heading'>Data Entry</h1>
                <form>
                    <div>
                        <label className='mt-3'></label>
                        <input type="text" className="form-control mt-2" placeholder="Username" value={user.name}
                            name="name"
                            onChange={onChangeInput} />
                        <span className='text-danger mt-2 mb-1'>{errorMessage.nameErr}</span>
                    </div>
                    <div>
                        <label className='mt-2'></label>
                        <input type="email" className="form-control mt-2" placeholder="Usermail" value={user.email}
                            name="email"
                            onChange={onChangeInput} />
                        <span className='text-danger mt-2 mb-1'>{errorMessage.emailErr}</span>
                    </div>
                    <div>
                        <label className='mt-2'></label>
                        <input type="number" className="form-control mt-2" placeholder="Userage" value={user.age}
                            name="age"
                            onChange={onChangeInput} />
                        <span className='text-danger mt-2 mb-1'>{errorMessage.ageErr}</span>
                    </div>
                </form>
                <div>{
                    button ?
                        <button type='button' className="btn btn-success mt-4 mb-2 submitButton" onClick={save}>save</button> :
                        <button type='button' className="btn btn-success mt-4 mb-2 submitButton" onClick={submit}>submit</button>
                }

                </div>
            </div>
        </>
    );
}

export default UserForm
