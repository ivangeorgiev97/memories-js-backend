import User from "../../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import dotenv from "dotenv";
import { UserInputError } from "apollo-server";
import { getToken, addUsedToken } from "../../helpers/used-token.js";

dotenv.config();

export default {
    Query: {
        currentUser: async (root, args, context) => {
            return context.matchedUser;
        },
        user: async (root, {_id}) => {
            const user = await User.findById(_id).populate("memories");
            return user;
        },
        users: async () => {
            const users = await User.find({}).populate("memories");
            return users;
        }
    },
    Mutation: {
        register: async (root, args) => {
            const userData = args.data;
            if(!validator.isEmail(userData.email)){
                throw new UserInputError(`This email is not valid`, {
                    field: "email",
                    value: userData.email,
                    constraint: "isEmail"
                })
            }

            if(!validator.isLength(userData.password, {min: 6, max: 255})){
                throw new UserInputError(`Password should be between 5 and 255 symbols`, {
                    field: "password",
                    value: userData.password,
                    constraint: "isLength"
                })
            }

            userData.password = await bcryptjs.hash(userData.password, 10);

            const user = new User(userData);
            await user.save();
            return user;
        },
        updateUser: async (root, {_id, data}) => {
            const updatedUser = await User.findByIdAndUpdate(_id,
                {$set: data},
                {
                    runValidators: true,
                    new: true
                }).populate("memories");
            return updatedUser;
        },
        deleteUser: async (root, {_id}) => {
            const removedUser = User.findOneAndDelete(_id);
            return removedUser;
        },
        login: async (root, {email, password}) => {
            const user = await User.findOne({email});
            if(!user){
                throw new UserInputError(`User with this email does not exist: ${email}`, {
                    field: "email",
                    value: email,
                    constraint: "emailDoesNotExist"
                })
            }

            const validPass = await bcryptjs.compare(password, user.password);
            if(!validPass){
                throw new UserInputError(`Password is incorrect`, {
                    field: "password",
                    value: "",
                    constraint: "passwordIncorrect"
                })
            }

            const privateKey = process.env.JWT_PRIVATE_KEY;
            const token = jwt.sign({
                _id: user._id,
                email: user.email
            }, privateKey, {
                expiresIn: "3d"
            });

            return token;
        },
        logout: async (root, args, context) => {
            const matchedToken = await getToken(context.jwt)

            if (!matchedToken) addUsedToken(context.jwt);

            return context.matchedUser;
        }
    }

}
