import { useEffect } from "react";
import { redirect } from "react-router-dom";
import { logout } from "../service/api";

function LogoutPage() {

    useEffect(() => {
        logout();
        redirect(`/`);
    }, []);

    return (<span>Logout successfully</span>);
  }
  
  export default LogoutPage;