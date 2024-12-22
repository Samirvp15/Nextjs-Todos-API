import prisma from "@/app/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos"


export const metadata = {
  title: 'Listado de todos',
  description: 'SEO title'
}




export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })


  return (
    <div>
      <div className=" w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  )
}
