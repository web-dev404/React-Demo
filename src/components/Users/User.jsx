import s from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserPhotoSmall} from "../common/UserPhotoComponent/UserPhotoComponent";

let User = ({user, follow, unFollow, followingInProgress}) => {
    return (
        <div className={s.container}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <UserPhotoSmall user={user} />
                </NavLink>
                <div>
                    {user.followed
                        ? <button className={s.followBtn} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unFollow(user.id);
                                  }}>Unfollow</button>
                        : <button className={s.followBtn} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id);
                                  }}>Follow</button>
                    }
                </div>
            </div>

            <div className={s.userItem}>
                <div>
                    <p>{user.name}</p>
                    <p>{user.status}</p>
                </div>

                <div>
                    <p>{'user.location.city'}</p>
                    <p>{'user.location.country'}</p>
                </div>
            </div>
        </div>
    )
}

export default User;