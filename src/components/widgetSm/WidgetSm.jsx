import "./widgetSm.css"
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://www.pngarts.com/files/5/User-Avatar-Transparent.png" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Bugrahan Ceker</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className="widgetSmIcon" />More</button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://www.pngarts.com/files/5/User-Avatar-Transparent.png" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Bugrahan Ceker</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className="widgetSmIcon" />More</button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://www.pngarts.com/files/5/User-Avatar-Transparent.png" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Bugrahan Ceker</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className="widgetSmIcon" />More</button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://www.pngarts.com/files/5/User-Avatar-Transparent.png" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Bugrahan Ceker</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className="widgetSmIcon" />More</button>
                </li>                
            </ul>
        </div>
    )
}
