import ButtonAction from '@/components/ButtonAction';
import BackButton from '@/components/backButton';
import { FC } from 'react'

const BlockDetailPage: FC = () => {
  return (
    <>
        <BackButton/>
        <div className='mb-8'>
            <h2 className='text-2xl font-bold my-4'>Post One</h2>
            <ButtonAction/>
        </div>
        <p className='text-slate-700'>Post one content</p>
    </>
  )
}

export default BlockDetailPage;