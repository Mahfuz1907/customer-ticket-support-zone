import type { Dispatch, SetStateAction } from 'react';
import '../../../App.css';
import type { CustomerCardTypes } from '../../../type';
import Ticket from './Ticket';

export interface CustomerTicketsProperties{
    updatedTickets: CustomerCardTypes[], 
    inProgress: CustomerCardTypes[],
    setInProgress: Dispatch<SetStateAction<CustomerCardTypes[]>>
}

function CustomerTickets({updatedTickets, inProgress, setInProgress}: CustomerTicketsProperties) {
    return (
        <div className='flex flex-col justify-between items-start w-full gap-4'>
            <h1 className='text-black font-bold text-lg'>Customer Tickets</h1>
            <div className='grid grid-cols-2 justify-between items-start gap-7'>
                {
                    updatedTickets.map((ticket) => <Ticket key={ticket.id} ticket={ticket} inProgress={inProgress} setInProgress={setInProgress} />)
                }
            </div>
        </div>
    );
};

export default CustomerTickets;