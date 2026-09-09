import '../../App.css'
import type { CustomerCardTypes } from '../../type'
import Progress from './Progress'
import Resolved from './Resolved'

export interface BannerProgressTypes{
    inProgress:CustomerCardTypes[]
}

export default function Banner({inProgress}:BannerProgressTypes) {
    return (
        <div className='m-20 flex flex-row justify-between items-center gap-4'>
            <Progress inProgress={inProgress} />
            <Resolved />
        </div>
    )
}