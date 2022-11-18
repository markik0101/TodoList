import React, {useState} from 'react'

interface TodoFormProps {
	onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
	const [title, setTitle] = useState<string>('')

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
	}

	const KeyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			props.onAdd(title) 
			console.log(title)
			setTitle('')
		}
	}


	return (
		<input 
			type="text"
			className='todo-input'
			onChange={changeHandler}
			value={title}
			onKeyPress={KeyPressHandler}
			placeholder='Введите название задачи'
		/>
	)
}