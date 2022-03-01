import apiConfigs from "../../next.config.js";
import jwtDecode from "jwt-decode";

export default {
    getWishList(token){
        var user = jwtDecode(token).id;
        return fetch(`${apiConfigs.env.API_URL}api/v1/wishlists/wishlist`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": token
            },
            body: JSON.stringify({user: user}),
          }).then((res) => res.json())
    },

    addWish(token, movie){
        var user = jwtDecode(token).id;
        return fetch(`${apiConfigs.env.API_URL}api/v1/wishlists/addWishlist`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": token
            },
            body: JSON.stringify({user: user,movie: movie}),
          }).then((res) => res.json())
    },

    removeWish(token, movie){
        var user = jwtDecode(token).id;
        return fetch(`${apiConfigs.env.API_URL}api/v1/wishlists/wishlist`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "authorization": token
            },
            body: JSON.stringify({user: user,movie: movie}),
          }).then((res) => res.json())
    },

    inWishlist(token, movie){
        var user = jwtDecode(token).id;
        return fetch(`${apiConfigs.env.API_URL}api/v1/wishlists/inWishlist`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": token
            },
            body: JSON.stringify({user: user,movie: movie}),
          }).then((res) => res.json())
    },

    deleteWishlist(token, wishlistId){
        var user = jwtDecode(token).id;
        return fetch(`${apiConfigs.env.API_URL}api/v1/wishlists/wishlist`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "authorization": token
            },
            body: JSON.stringify({wishlistId: wishlistId}),
          }).then((res) => res.json())
    }
}