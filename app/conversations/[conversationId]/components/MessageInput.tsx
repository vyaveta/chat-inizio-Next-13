'use client'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface MessageInputProps {
    id: string,
    required?: boolean,
    placeholder?: string,
    type?: string,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
}

const MessageInput: React.FC<MessageInputProps> = ({
    id,
    required,
    placeholder,
    type,
    register,
    errors,
}) => {
  return (
    <div className='w-full relative' >
        <input
         type={type}
         id={id}
         autoComplete='off'
         {...register(id, { required })}
         placeholder={placeholder}
         className='text-black font-light py-2 px-4 bg-neutral-100 focus:outline-none w-full rounded-xl'
        />
    </div>
  )
}

export default MessageInput