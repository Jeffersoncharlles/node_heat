
import prismaClient from '../prisma';


class GetLastTreeMessagesServices {
    async execute(){
        const messages = await prismaClient.message.findMany({
            take:3,
            orderBy:{
                created_at: "desc"
            },
            include:{
                user:true,
            }
        })
        //take e o limite de dados
       
        // SELECT * FROM MESSAGE LIMIT 3 ORDER BY CREATE_AT DESC

        return messages;

    }
}

export {GetLastTreeMessagesServices}