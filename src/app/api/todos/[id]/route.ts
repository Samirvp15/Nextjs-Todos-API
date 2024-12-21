
import prisma from '@/app/lib/prisma'
import { NextResponse } from 'next/server'
import * as yup from 'yup'

interface Segments {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params }: Segments) {

    const { id } = params
    const todo = await prisma.todo.findFirst({ where: { id } })

    if (!todo) {
        return NextResponse.json({ message: 'Todo not found' }, { status: 404 })
    }

    return NextResponse.json({ todo })
}

const putSchema = yup.object({
    completed: yup.boolean().optional(),
    description: yup.string().optional()
})

export async function PUT(request: Request, { params }: Segments) {

    const { id } = params
    //VERFICAR SI ID EXISTE
    const todo = await prisma.todo.findFirst({ where: { id } })
    if (!todo) {
        return NextResponse.json({ message: 'Todo not found' }, { status: 404 })
    }

    try {

        //COGER PROPS PARA ACTUALIZAR
        const { description, completed } = await putSchema.validate(await request.json())

        // ACTUALIZAR PROPS EN DICHO ID
        const updatedtodo = await prisma.todo.update({
            where: { id },
            data: { description, completed }
        })

        return NextResponse.json({ updatedtodo })
    } catch (error) {
        return NextResponse.json({ message: 'Invalid request: ', error }, { status: 400 })
    }

}