import { db } from "./db"
export const getUserbyUserName = async (username: string)=> {
    const user = await db.user.findUnique({
        where: {
            username,
        },
        include : {
            stream: true,
        },
    });

    return user;
};

export const getUserbyId = async (id: string)=> {
    const user = await db.user.findUnique({
        where: {
            id,
        },
        include : {
            stream: true,
        },
    });

    return user;
};