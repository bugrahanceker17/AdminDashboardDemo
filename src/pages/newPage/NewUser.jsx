import './newUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserFormItem">
                    <label >Username</label>
                    <input className="newUserFormItemInput" type="text" placeholder="jwick" />
                </div>
                <div className="newUserFormItem">
                    <label >Fullname</label>
                    <input className="newUserFormItemInput" type="text" placeholder="John Wick" />
                </div>
                <div className="newUserFormItem">
                    <label >Email</label>
                    <input className="newUserFormItemInput"  type="email" placeholder="jwick@gmail.com" />
                </div>
                <div className="newUserFormItem">
                    <label >Password</label>
                    <input className="newUserFormItemInput" type="password" placeholder="12345" />
                </div>
                <div className="newUserFormItem">
                    <label >Phone Number</label>
                    <input className="newUserFormItemInput" type="text" placeholder="+7 418 987 14" />
                </div>
                <div className="newUserFormItem">
                    <label >Address</label>
                    <input className="newUserFormItemInput" type="text" placeholder="London | UK" />
                </div>
                <div className="newUserFormItem">
                    <div className="newUserGender">
                        <label >Gender</label>
                        <input type="radio" id="male" name="gender" value="Male" />
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="Female" />
                        <label for="female">Female</label>
                    </div>
                    <div className="newUserFormItem">
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    )
}
