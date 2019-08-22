const APIUtil = {
    followUser: id => {
        // ...
        APIUtil.changeFollowState(id, 'POST')
    },

    unfollowUser: id => {
        // ...
        APIUtil.changeFollowState(id, 'DELETE')
    },

    changeFollowState: (id, method) => (
        $.ajax({
            url:`/users/${id}/follow`,
            dataType: 'json',
            method
        })
    )
};

module.exports = APIUtil;