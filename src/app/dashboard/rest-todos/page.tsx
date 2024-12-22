import prisma from "@/app/lib/prisma"
import { TodosGrid } from "@/todos"


export const metadata = {
  title: 'Listado de todos',
  description: 'SEO title'
}




export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({
    orderBy:{
      id: 'asc'
    }
  })


  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  )
}
