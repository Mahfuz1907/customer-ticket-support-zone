import '../../../App.css';
import type { CustomerCardTypes } from '../../../type';

export interface ResolvedCardProp{
    resolved:CustomerCardTypes
}

function Resolved({resolved}:ResolvedCardProp) {
    return (
        <div className='bg-blue-300 rounded-lg px-3 py-1 flex flex-col justify-between items-start gap-2 w-full'>
            <h1>{resolved.title}</h1>
        </div>
    );
};

export default Resolved;