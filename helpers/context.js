import User from "../models/User.js";
import jwtDecode from "jwt-decode";

export const getContext = async (req, token) => {
    if (!token) {
        return {}
    }

    const jwt = token.split(" ")[1];

    const userData = jwtDecode(jwt);

    const matchedUser = await User.findById(userData._id).lean();
    delete matchedUser.password;

    const context = {
        matchedUser
    };

    return context
}
