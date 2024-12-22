"use client"

import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem"
import * as todosApi from '@/todos/helpers/todos'
import { useRouter } from "next/navigation"


interface TodosGridProps {
  todos?: Todo[],
}

export function TodosGrid({ todos = [] }: TodosGridProps) {

  const router = useRouter()

  const toggleTodo = async (id: string, completed: boolean) => {
    const updatedTodo = await todosApi.updateTodo(id, completed)
    router.refresh()
    return updatedTodo
  }

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-2" >
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toogleTodo={toggleTodo} />
      ))}
    </div>
  )
}
