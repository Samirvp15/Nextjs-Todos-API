
import prisma from '@/app/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST() {

    await prisma.todo.deleteMany()

    await prisma.todo.createMany({
        data:[
            {description: 'Buy Milk', completed: true},
            {description: 'Buy Eggs', completed: false},
            {description: 'Buy Bread', completed: true},
            {description: 'Buy Butter', completed: false},
        ]
    })
    

    return NextResponse.json({ message: 'Seed DB Executed' })
}