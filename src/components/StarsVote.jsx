import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

function StarsVote({ vote = 0, }) {


    return <div className='d-flex mb-2' style={{ maxWidth: '90px' }}>
        {[1, 2, 3, 4, 5].map((n) => {
            return n <= vote ?
                <StarSolid key={n} /> :
                <StarIcon key={n} />
        })}
    </div>
}

export default StarsVote;