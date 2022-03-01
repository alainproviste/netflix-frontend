import apiConfigs from "../../next.config.js";

export default {
    createMovie(token, movie) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/movie/movie`, {
            method: "POST",
            headers: {
              "authorization": token,
              "content-type": "application/json"
            },
            body: JSON.stringify(movie),
          }).then((res) => res.json())
    }
}