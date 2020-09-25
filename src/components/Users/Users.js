import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUserCount, pageSize, currentPage, followingInProgress, followTC, onPageChanged, unfollowTC, users}) => {


    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUserCount={totalUserCount}
                   pageSize={pageSize}/>
        <div>
            {users.map(u => <User user={u} key={u.id}
                                  followingInProgress={followingInProgress}
                                  unfollowTC={unfollowTC}
                                  followTC={followTC}/>)}
        </div>
    </div>
};

export default Users;