import gql from "graphql-tag";

export const createCategorie = gql`
    mutation { createCategorie(){id, title, price, description, img }}
`

export const getProduct = gql`
    query getProduct($id:ID){
        getProduct (id:$id){
            id, title, price, description, img
        }
    }
`