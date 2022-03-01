import apiConfigs from "../../next.config.js";
import jwtDecode from "jwt-decode";

export default {
    register(user) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/users/register`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    login(user) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/users/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    getUser(token) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/users/user`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    updateUser(token, subscription) {
      var user = jwtDecode(token).id;
      return fetch(`${apiConfigs.env.API_URL}api/v1/users/updateUser`, {
          method: "PUT",
          headers: {
              "authorization": token,
              "content-type":"application/json"
          },
          body: JSON.stringify({user: user, subscription: subscription}),
      })
      .then(res => res.json())
    },
    verifyToken(token) {
      return fetch(`${apiConfigs.env.API_URL}api/v1/users/verifytoken`, {
          headers: {
              "authorization": token
          }
      })
        .then(res => res.json())
      }
}