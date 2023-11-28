"use client"

import FormPost from '@/components/FormPost'
import BackButton from '@/components/backButton'
import { FormInputPost } from '@/types'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'

const CreatePage: FC = () => {

  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data)
  }

  return (
    <>
        <BackButton/>
        <h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
        <FormPost submit={handleCreatePost} btnText={'Create'}/>
    </>
  )
}

export default CreatePage