import gql from "graphql-tag";

export const getMovies = gql`
    query { getMovies{
        id,
        actors,
        producer,
        title,
        description,
        year,
        duration,
        iframe,
        img,
        categories{
            id,
            name
        }
    }}
`

export const getMovie = gql`
    query getMovie($id:ID){
        getMovie (id:$id){
            id,
            actors,
            producer,
            title,
            description,
            year,
            duration,
            iframe,
            img,
            categories{
                id,
                name
            }
        }
    }
`