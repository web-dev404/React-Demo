import s from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalItemsCount, pageSize, onPageChanged, currentPage, users, follow, unFollow, followingInProgress}) => {
    return (
        <div className={s.usersPage}>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} onPageChanged={onPageChanged}
                       currentPage={currentPage}/>

            {users.map(u => <User key={u.id} user={u} follow={follow} unFollow={unFollow}
                                  followingInProgress={followingInProgress}/>)}
        </div>
    )
}

export default Users;