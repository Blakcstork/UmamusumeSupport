import { gql, throwServerError, useApolloClient, useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"



const ALL_MOVIES = gql`
    query getMovies {
            allTweets {
              id
              text
              author{
                fullName
              }
            }
    }


`


export default function Movies(){

    const {data, loading, error} = useQuery(ALL_MOVIES)
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Could not fetch!</h1>
    }
    return (
        <div>
        <ul>
            <h1>Tweets</h1>      
            {data.allTweets.map((tweet) =>(
                <li key = {tweet.id}>
                     <Link to = {`/movies/${tweet.id}`}>{tweet.text}</Link>
                </li>
                
            ))}
        </ul>
        </div>
    )
}

