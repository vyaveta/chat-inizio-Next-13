import { getCurrentUser } from "@/app/actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from '@/app/libs/prismadb'
import { pusherServer } from "@/app/libs/pusher"

interface Iparams {
    conversationId?: string,
}

export async function DELETE( request: Request,{ params }: { params: Iparams } ) {
    try{
        const { conversationId } = params
        const currentUser = await getCurrentUser()

        if(!currentUser?.id) return new NextResponse('unauthorized', {status: 401})

        const existingConversation =  await prisma?.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true,
            }
        })

        if(!existingConversation) return new NextResponse('invalid id', {status: 400})

        const deletedConversation = await prisma.conversation.deleteMany({
            where: {
                id: conversationId,
                userIds: {
                    hasSome: [currentUser.id]
                }
            }
        })

        existingConversation.users.forEach((user) => {
            if(user.email) pusherServer.trigger(user.email,'conversation:remove',existingConversation)
        })

        return NextResponse.json(deletedConversation)

    }catch(error: any){
        console.log(error,'is the error that occured in the route in conversationId folder when tried to delete a conversation')
        return new NextResponse('internal error', {status: 500})
    }
}