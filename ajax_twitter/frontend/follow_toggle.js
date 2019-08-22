class FollowToggle {
    constructor(el, options) {
        this.userId = this.$el.data('user-id') || options.userId;
        this.followState = this.$el.data('initial-follow-state') || options.followState;
        this.$el = $(el);
        this.render();
        this.$el.on('click', this.handleClick.bind(this));
    }

    render() {
        switch (this.followState) {
            case 'unfollowed':
                this.$el.prop('disabled', false);
                this.$el.html('Follow!');
                break;
            case 'followed':
                this.$el.prop('disabled', false);
                this.$el.html('Unfollow!');
                break;
        }
    }

    handleClick(event) {
        let followToggle = this;
        event.preventDefault();

        if (this.followState === 'unfollowed') {
            this.followState = 'following';
            this.render();
            APUUtil.followUser(this.userId).then( () => {
                followToggle.followState = 'followed';
                followToggle.render();
            });
        } else if (this.followState === 'followed') {
            this.followState = 'unfollowing';
            this.render();
            APUUtil.followUser(this.userId).then(() => {
                followToggle.followState = 'unfollowed';
                followToggle.render();
            });
        }
    }
}

module.exports = FollowToggle;