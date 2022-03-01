import apiConfigs from "../../next.config.js";

export default {
    createCategorie(categorie) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/users/register`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    }
}