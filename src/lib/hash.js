import bcrypt from "bcrypt";

export const HashingService = {
    async hashPassword(password){
        return await bcrypt.hash(password, 10)
    },
    async comparePassword(password, encryptPassword){
        return await bcrypt.compare(password,encryptPassword )
    }
};