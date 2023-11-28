"use client"

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

const BackButton: FC = () => {
    const router = useRouter();

    return (
        <button className='btn' onClick={() => router.back()}><ChevronLeft/> Back</button>
    )
}

export default BackButton;