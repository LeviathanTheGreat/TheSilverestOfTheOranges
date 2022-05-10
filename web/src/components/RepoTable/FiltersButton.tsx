import { FC, Dispatch, SetStateAction, MouseEventHandler, useState } from 'react'

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>
    isPressed: boolean
    className?: string
}

const FiltersButton: FC<Props> = (props) => {
    const { children, onClick, isPressed } = props
    
    const normalStyles = "hover:border-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 shadow-sm"
    const pressedStyles = "filter brightness-[90%]"
    
    return (
        <button
            aria-pressed={isPressed}
            className={`mr-2 bg-blue-500 ${!isPressed ? normalStyles : pressedStyles}  text-white font-semibold py-1 px-2 rounded`}
            onClick={ (e) => { onClick(e) }}
        >
            {children}
        </button>
    )
}


export default FiltersButton

