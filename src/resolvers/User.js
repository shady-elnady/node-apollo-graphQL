const User = {
    id: (parent) => parent.id,
    name: (parent) => parent.name.toUpperCase(),
    links: (parent) => parent.links,
};



module.exports = User;