import React from 'react'
import {ITodo} from '../interfaces'

interface TodoTodoList {
	todos: ITodo[]
	onToggle(id: number): void
	onRemove(id: number): void
}

export const TodoList: React.FC<TodoTodoList> = ({todos, onToggle, onRemove}) => {
	return (
		<ul className='todo-list'>
			{
				todos.map(
					todo => {
						const classes = ['todo-list-li']
						if (todo.completed) {
							classes.push('completed')
						}

						return (
							<li className={classes.join(' ')} key={todo.id}>
								<input 
									type="checkbox"
									checked={todo.completed}
									onChange={() => onToggle(todo.id)}
								/>
								<span>{todo.title}</span>
								<i
									className='material-icons red-text icon'
									onClick={() => onRemove(todo.id)}
								>
									delete
								</i>
							</li>
						)
					}
				)
			}
		</ul>
	)
}