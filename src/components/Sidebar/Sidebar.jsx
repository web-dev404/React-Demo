import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const Sidebar = (props) => {
    let friendsElements = props.sidebar.friends.map(f => <FriendItem id={f.id} key={f.id} name={f.name}/>);

    return (
        <nav className={s.nav}>
            <NavLink className={`${s.item}`} to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            <NavLink className={s.item} to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            <NavLink className={s.item} to="/news" activeClassName={s.activeLink}>News</NavLink>
            <NavLink className={s.item} to="/music" activeClassName={s.activeLink}>Music</NavLink>

            <NavLink className={s.item} to="/settings" activeClassName={s.activeLink}>Settings</NavLink>

            <NavLink className={s.item} to="/users" activeClassName={s.activeLink}>Users</NavLink>

            <div className={s.friends}>
                <h2 className={s.friendsTitle}>Friends</h2>

                <div className={s.friendsMain}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;