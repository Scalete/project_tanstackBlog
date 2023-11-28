import { Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

const ButtonAction: FC = () => {
    return (
        <>
            <Link href={'/edit/1'} className='btn mr-2'><Pencil />Edit</Link>
            <button className='btn btn-error'><Trash />Delete</button>
        </>
    )
}

export default ButtonAction