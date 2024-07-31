import {db} from "@/lib/db"
import {getSelf} from "@/lib/auth-service"
import { resolve } from "path";

export const getRecommended = async () => {
    let userId;

    try {
        const self = await getSelf();
        userId=self.id;
    } catch {
        userId=null;
    }

    let users =[];
    if(userId){
        users = await db.user.findMany({
            where: {
                AND: [
                    {
                        NOT:{
                            id: userId,
                        },
                    },
                    {
                        NOT:{
                            followedBy: {
                                some : {
                                    followerId: userId
                                },
                            },
                        },
                    },
                    //TODO: Delete this
                    {
                        NOT:{
                            blocking: {
                                some : {
                                    blockedId: userId,
                                },
                            },
                        },
                    },
                ]
            },
            include:{
                stream : {
                    select: {
                        isLive: true
                    },
                },
            },
            orderBy: {
                createdAt: "desc"
            },
        });
    }else {
        users = await db.user.findMany({
            include:{
                stream : {
                    select: {
                        isLive: true
                    },
                },
            },
            orderBy: {
                createdAt: "desc"
            },
        });
    }

    return users;
}