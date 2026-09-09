import '../../App.css'
import type { CustomerCardTypes } from '../../type'

export interface BannerResolvedTypes{
    isResolved:CustomerCardTypes[]
}


export default function Resolved({isResolved}:BannerResolvedTypes) {
    return (
        <div className='bg-[url(/asset/vector2.png)] bg-green-500 flex flex-col justify-center items-center gap-4 rounded-md px-10 py-5 w-full'>
            <h1 className='text-base font-normal text-white'>Resolved</h1>
            <h1 className='text-6xl font-bold text-white'>{isResolved.length}</h1>
        </div>
    )
}