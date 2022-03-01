import gql from "graphql-tag";

export const createCategorie = gql`
  mutation createCategorie($name: String) {
    createCategorie(name: $name) {
        name
    }
  }
`;