import bcrypt from 'bcrypt'
import prisma from '../../libs/prismadb'

import {NextResponse} from 'next/server'

export async function POST(request: Request) {
   try{
    const body = await request.json()
    const {
        email,
        name,
        password
    } = body

    if(!email || !name || !password) return new NextResponse('Missing info', {status: 404})

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data:{
            email,
            name,
            hashedPassword,
        }
    })
    return NextResponse.json(user)
   }catch(err: any){
    console.log(err,'is the error that occured in the Post function in register api')
    return new NextResponse('Ops something went wrong',{status: 500})
   }
}
