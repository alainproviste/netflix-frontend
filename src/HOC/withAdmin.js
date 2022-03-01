import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../services/authentification.service";

const withAdmin = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log(token);
      authService
        .verifyToken(token)
        .then((data) => {
            if(data.verify){
                if (data.admin) {
                    setAdmin(true);
                } else {
                    router.push("/browse");
                }
            }else{
                localStorage.removeItem("token");
                router.push("/login");
            }
        })
        .catch((err) => {
          localStorage.removeItem("token");
          router.push("/login");
        });
    }, []);
    
    if (admin) {
      return <WrappedComponent {...props} />;
    } 
    else {
      return null;
    }
  };
};

export default withAdmin;