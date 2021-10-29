import { PermIdentity, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./user.css"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className="userShowTopImage" src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Daenerys Targaryen</span>
                            <span className="userShowUserTitle">Artist</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowBottomTitle">User Detail</span>

                        <div className="userShowBottomInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">3dragon</span>
                        </div>

                        <div className="userShowBottomInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">30.04.1990</span>
                        </div>

                        <span className="userShowBottomTitle">Contact Detail</span>

                        <div className="userShowBottomInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">dragons@gmail.com</span>
                        </div>

                        <div className="userShowBottomInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">+98 654 10 45</span>
                        </div>

                        <div className="userShowBottomInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="3dragon" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Daenerys Targaryen" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="dragons@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="text" placeholder="+98 654 10 45" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImage" src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
