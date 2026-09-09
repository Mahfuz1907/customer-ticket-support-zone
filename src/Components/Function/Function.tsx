import { use } from 'react'
import '../../App.css'
import type { CustomerCardTypes } from '../../type'
import CustomerTickets from './CustomerTicket/CustomerTickets'
import TaskStatuses from './TaskStatus/TaskStatuses'
import ResolvedTasks from './ResolvedTask/ResolvedTasks'

export interface FunctionProperties{
    TicketPromise: Promise<CustomerCardTypes[]>
}

export default function Function({TicketPromise}:FunctionProperties) {
    const tickets = use(TicketPromise)
    return (
        <div className='m-20 grid grid-cols-3 justify-between items-start w-full'>
            <div className='col-span-2'>
                <CustomerTickets/>
            </div>
            <div>
                <TaskStatuses />
                <ResolvedTasks />
            </div>
        </div>
    )
}