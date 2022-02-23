import apiConfigs from "../../next.config.js";
import jwtDecode from "jwt-decode";

export default {
    getWishList(){

    },

    addWish(token, movie){
        var user = jwtDecode(token).id;
        console.log(user);
        return fetch(`${apiConfigs.env.API_URL}api/v1/wishlists/addWishlist`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": token
            },
            body: JSON.stringify({user: user,movie: movie}),
          }).then((res) => res.json())
    }
}