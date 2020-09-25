import React from 'react';
import {
    followTC, requestUsersTC,
    setCurrentPage,
    setTotalUsersCount,
    unfollowTC,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.requestUsersTC(this.props.currentPage, this.props.pageSize)
    };

    onPageChanged = (pageNumber) => {
        this.props.requestUsersTC(pageNumber, this.props.pageSize)
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   followTC={this.props.followTC}
                   unfollowTC={this.props.unfollowTC}
            />
        </>
    };

}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        isFetching: getIsFetching(state)
    }
};


export default compose(
    connect(mapStateToProps,
        {
            setCurrentPage,
            setTotalUsersCount,
            requestUsersTC, followTC,
            unfollowTC,
        })
    )(UsersContainer);