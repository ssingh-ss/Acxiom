import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getUserToken = () => {
    console.log(cookies.get("user_token"));
    return cookies.get("user_token");
};
