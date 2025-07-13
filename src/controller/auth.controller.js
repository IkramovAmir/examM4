import sha256 from "sha256";
import { ClientError, globalError } from "shokhijakhon-error-handler"
import { userLoginValidator, userRegisterValidator } from "../utils/validator.js";
import { jwtService } from "../lib/jwt.js";

// sha256
// bcrypt

export default {
    async REGISTER(req, res){
        try{
            let newUser = req.body;
            userRegisterValidator(newUser);
            let users = await req.readFile("users");
            if(users.some((user) => user.email == newUser.email)) throw new ClientError("User already exists !", 400);
            newUser = {id: users.length ? users.at(-1).id + 1: 1, ...newUser, password: sha256(newUser.password)};
            users.push(newUser)
            await req.writeFile("users", users);
            return res.status(201).json({message: "User successfullu registered !", status: 201, accessToken: jwtService.createToken({user_id: newUser.id, userAgent: req.headers["user-agent"]})})
        }catch(err){
            return globalError(err, res);
        }
    },
    async LOGIN(req, res){
        try{
            let userData = req.body;
            userLoginValidator(userData);
            let users = await req.readFile("users");
            let findUser = users.find((user) => user.email == userData.email);
            if(!findUser) throw new ClientError("User unauthorized", 401)
            if(!(findUser.password == sha256(userData.password))) throw new ClientError("User unauthorized", 401);
            return res.json({message: "User successfullu logined !", status: 200, accessToken: jwtService.createToken({user_id: findUser.id, userAgent: req.headers["user-agent"]})})
        }catch(err){
            return globalError(err, res);
        }
    }
}