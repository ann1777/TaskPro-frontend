import { useState } from 'react'

export const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false)
	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)
	
	const toggle = () => setIsOpen(prevState => !prevState)

	return { open, close, toggle, isOpen }
}