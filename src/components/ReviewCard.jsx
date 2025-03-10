import StarsVote from './StarsVote';

export default function ReviewCard({ review }) {

    const { vote, name, text } = review

    return (
        <div>
            <div className='card p-4 fs-6 mb-4'>
                <strong>Vote: </strong>
                <StarsVote vote={vote} />
                <strong>Review: </strong>
                <p>{text}</p>
                <p>
                    <strong>Posted by: </strong> {name}
                </p>
            </div>
        </div>
    )

}

