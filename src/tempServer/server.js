import {ApolloServer,gql} from "apollo-server";


let races = [


]


const typeDefs = gql`

    type Race{
        name : String!
        month : String!
        place : String!
        distance : String!
        isVacation : Boolean
    }

    type Skill{
        name : String! 
        type : String!

    }

    type Umamusume{
        name : String!
        
    }



    type Query{
        allRaces : [Race!]!

    }
`


const server = new ApolloServer({typeDefs});