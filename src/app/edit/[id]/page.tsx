"use client"

import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'

const EditPostPage: FC = () => {

    const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
        console.log(data)
    }
    
    return (
    <>
        <h1 className='text-2xl my-4 font-bold text-center'>Edit post</h1>
        <FormPost submit={handleEditPost} btnText={'Update'}/>
    </>
    )
}

export default EditPostPage;