const Query = {
    hello: () => "Hello from Apollo",
    usersGet: (parent, args, { users }) => users,
    userGet: (parent, { id }, { users }) => {
        return users.find(user => user.id === Number(id))
    },
};


module.exports = Query;