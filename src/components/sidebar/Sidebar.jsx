import "./sidebar.css";
import {
    LineStyle, Timeline, People, LocalMall, Assessment, Email, Feedback, Message, PersonalVideo
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                        <Link to="/" className="link">
                        <li className="sideBarListItem">
                            <LineStyle className="sideBarIcon" />Home
                        </li>
                        </Link>
                        <li className="sideBarListItem">
                            <Timeline className="sideBarIcon" />Analytics
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                        <Link to="/users" className="link">
                            <li className="sideBarListItem">
                                <People className="sideBarIcon" />Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sideBarListItem">
                                <LocalMall className="sideBarIcon" />Products
                            </li>
                        </Link>
                        <li className="sideBarListItem">
                            <Assessment className="sideBarIcon" />Reports
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notification</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <Email className="sideBarIcon" />Mail
                        </li>
                        <li className="sideBarListItem">
                            <Feedback className="sideBarIcon" />Feedback
                        </li>
                        <li className="sideBarListItem">
                            <Message className="sideBarIcon" />Messages
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <PersonalVideo className="sideBarIcon" />Manage
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
