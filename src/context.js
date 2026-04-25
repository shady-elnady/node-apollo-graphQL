const users = [
    {
        id: 1,
        name: "Ahmed",
        email: "ahmed@g.com",
        password: "$2b$10$v2ZRytgT5ML/SfPRQkBgU.c2l1ofIxKFHrU6tWu4TvAeabkr6Bv8mc",
        age: 20,
    },
    {
        id: 2,
        name: "Ali",
        email: "ali@g.com",
        password: "$2b$10$v2ZRytgT5ML/SfPRQkBgU.c2l1ofIxKFHrU6tWu4TvAeabkr6Bv8m",
        age: 30,
    },
];

module.exports = ({ req }) => {

    return {
        ...req,
        users,
    }
};