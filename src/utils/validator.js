import Joi from "joi";

// let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// export const userRegisterValidator = (user) => {
//     let {
//         username,
//         email,
//         password
//     } = user;
//     if (!username) throw new Error("Username is required !");
//     if (!email) throw new Error("Email is required !");
//     if (!emailRegex.test(email)) throw new Error("Email is not valid !");
//     if (!password) throw new Error("Password is required !");
//     if (!(password.length > 5 && password.length < 15)) throw new Error("Password is not valid !");
//     return true
// };

// export const userLoginValidator = (user) => {
//     let {
//         email,
//         password
//     } = user;
//     if (!email) throw new Error("Email is required !");
//     if (!emailRegex.test(email)) throw new Error("Email is not valid !");
//     if (!password) throw new Error("Password is required !");
//     if (!(password.length > 5 && password.length < 15)) throw new Error("Password is not valid !");
//     return true
// };

export const userRegisterValidate = Joi.object({
    username: Joi.string().required().min(3).max(15).messages({
        "any.required": "Username is required",
        "string.base": "Username must be only string",
        "string.min": "Username must have at least 3 characters",
        "string.max": "Username must have no more than 15 characters"
    }),

    email: Joi.string().email().required().messages({
        "string.base": "Wrong type of email ",
        "string.empty": "Empty email value ",
        "any.required": "Email is required ",
        "string.email": "Email is invalid "
    }),

    password: Joi.string().min(8).max(15).required().messages({
        "string.base": "Wrong type of password ",
        "string.empty": "Empty password value ",
        "string.min": "Password must have at least 3 characters",
        "string.max": "Password must have no more than 15 characters",
        "any.required": "Password is required "
    })
});

export const userLoginValidate = Joi.object({
    email: Joi.string().email().required().messages({
        "string.base": "Wrong type of email ",
        "string.empty": "Empty email value ",
        "any.required": "Email is required ",
        "string.email": "Email is invalid "
    }),

    password: Joi.string().min(8).max(15).required().messages({
        "string.base": "Wrong type of password ",
        "string.empty": "Empty password value ",
        "string.min": "Password must have at least 3 characters",
        "string.max": "Password must have no more than 15 characters",
        "any.required": "Password is required "
    })
})