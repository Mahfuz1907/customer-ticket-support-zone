import '../../App.css'
import type { CustomerCardTypes } from '../../type'

export interface BannerProgressTypes{
    inProgress:CustomerCardTypes[]
}

export default function Progress({inProgress}:BannerProgressTypes) {
    return (
        <div className='bg-[url(/asset/vector1.png)] bg-blue-500 flex flex-col justify-center items-center gap-4 rounded-md px-10 py-5 w-full'>
            <h1 className='text-base font-normal text-white'>In Progress</h1>
            <h1 className='text-6xl font-bold text-white'>{inProgress.length}</h1>
        </div>
    )
}