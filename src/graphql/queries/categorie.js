import gql from "graphql-tag";

export const getCategories = gql`
    query { getCategories{
        id,
        name,
        movies{
            id,
            title,
            description,
            producer,
            duration,
            img,
            iframe,
            actors
        }
    }}
`

export const getCategorie = gql`
    query getCategorie($id:ID){
        getCategorie (id:$id){
            id,
            name,
            movies{
                id,
                title,
                description,
                producer,
                duration,
                img,
                iframe,
                actors
            }
        }
    }
`