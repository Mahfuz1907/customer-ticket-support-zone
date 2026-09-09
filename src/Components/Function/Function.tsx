import { use, useState, type Dispatch, type SetStateAction } from 'react'
import '../../App.css'
import type { CustomerCardTypes } from '../../type'
import CustomerTickets from './CustomerTicket/CustomerTickets'
import TaskStatuses from './TaskStatus/TaskStatuses'
import ResolvedTasks from './ResolvedTask/ResolvedTasks'

export interface FunctionProperties{
    TicketPromise: Promise<CustomerCardTypes[]>,
    inProgress: CustomerCardTypes[],
    setInProgress:Dispatch<SetStateAction<CustomerCardTypes[]>>,
    isResolved: CustomerCardTypes[],
    setIsResolved:Dispatch<SetStateAction<CustomerCardTypes[]>>
}

export default function Function({TicketPromise, inProgress, setInProgress, isResolved, setIsResolved}:FunctionProperties) {
    const tickets = use(TicketPromise)

    const [updatedTickets, setUpdatedTickets] = useState<CustomerCardTypes[]>(tickets)
    return (
        <div className='m-20 grid grid-cols-3 justify-between items-start max-w-full overflow-hidden gap-8'>
            <div className='col-span-2'>
                <CustomerTickets updatedTickets={updatedTickets} inProgress={inProgress} setInProgress={setInProgress}/>
            </div>
            <div className='flex flex-col justify-between items-start w-full gap-8'>
                <TaskStatuses 
                inProgress={inProgress} 
                setInProgress={setInProgress} 
                isResolved={isResolved} 
                setIsResolved={setIsResolved}
                updatedTickets={updatedTickets} 
                setUpdatedTickets={setUpdatedTickets} />
                <ResolvedTasks isResolved={isResolved} />
            </div>
        </div>
    )
}