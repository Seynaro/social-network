import React from 'react';
import { UserType } from '../../types/types';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    unfollowTC: (userId: number) => void
    users: Array<UserType>
}

let Users: React.FC<PropsType> = ({totalUserCount, pageSize, currentPage, followingInProgress, followTC, onPageChanged, unfollowTC, users}) => {


    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUserCount}
                   pageSize={pageSize}
                   />
        <div>
            {users.map(u => <User u={u} key={u.id}
                                  followingInProgress={followingInProgress}
                                  unfollowTC={unfollowTC}
                                  followTC={followTC}/>)}
        </div>
    </div>
};

export default Users;