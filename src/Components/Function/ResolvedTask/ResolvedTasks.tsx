import '../../../App.css';
import type { CustomerCardTypes } from '../../../type';
import Resolved from './Resolved';

export interface ResolvedArrayProperties{
    isResolved:CustomerCardTypes[]
}

function ResolvedTasks({isResolved}:ResolvedArrayProperties) {
    return (
        <div className='flex flex-col justify-center items-start gap-4 w-full'>
            <h1 className='text-black font-bold text-lg'>Task Status</h1>
            {
                isResolved.length === 0 ? <p>No Resolved Tasks Yet</p> : <div className='flex flex-col justify-center items-start gap-2 w-full'>
                {
                    isResolved.map((resolved) => <Resolved key={resolved.id} resolved={resolved}/>)
                }
            </div>
            }
        </div>
    );
};

export default ResolvedTasks;