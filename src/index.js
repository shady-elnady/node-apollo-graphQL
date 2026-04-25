const { ApolloServer } = require('apollo-server');

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const context = require("./context");


const apolloSever = new ApolloServer({
    typeDefs,
    resolvers,
    context
});

apolloSever.listen().then(({ url }) => console.log(`Server Running on URL ${url}`));