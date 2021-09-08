import * as ApiUserUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUsers = () => dispatch => (
    ApiUserUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
)