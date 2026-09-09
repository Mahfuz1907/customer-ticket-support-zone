import '../../App.css'
import type { CustomerCardTypes } from '../../type'
import Progress from './Progress'
import Resolved from './Resolved'

export interface BannerProgressTypes{
    inProgress:CustomerCardTypes[],
    isResolved:CustomerCardTypes[]
}

export default function Banner({inProgress, isResolved}:BannerProgressTypes) {
    return (
        <div className='m-20 flex flex-row justify-between items-center gap-4'>
            <Progress inProgress={inProgress} />
            <Resolved isResolved={isResolved} />
        </div>
    )
}