import UsedToken from '../models/UsedToken.js';

export const getToken =  async (token) => {
    const matchedToken = await UsedToken.findOne({'jwt': token});
    return matchedToken;
}

export const addUsedToken = async (token) => {
    const newToken = new UsedToken({jwt: token})
    await newToken.save();
    return newToken;
}
