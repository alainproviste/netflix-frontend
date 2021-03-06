import apiConfigs from "../../next.config.js";

export default {
    createCategorie(token, categorie) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/categorie/categorie`, {
            method: "POST",
            headers: {
              "authorization": token,
              "content-type": "application/json"
            },
            body: JSON.stringify(categorie),
          }).then((res) => res.json())
    }
}