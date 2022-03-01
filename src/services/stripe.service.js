import apiConfigs from "../../next.config.js";

export default {
    createSession(token, body) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/checkout`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization":token
            },
            body: JSON.stringify(body),
        }).then((res) => res.json())
    }
}