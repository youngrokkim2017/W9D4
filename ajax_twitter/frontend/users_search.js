class UsersSearch {
    constructor(el) {
        this.$el = $(el);
        this.$input = this.$el.find('input[name=name]');
        this.$ul = this.$el.find('users');
    }

    handleInput(event) {
        APIUtil.searchUsers(this.$input.val())
        .then(users => this.renderResults(users));
    }

    renderResults(users) {
        this.$ul.empty();

        for (let i = 0; i < users.length; i++) {
            let user = users[i];

            let $li = $('<li></li>');
            $li.append($a);

            this.$ul.append($li);
        }
    }
}