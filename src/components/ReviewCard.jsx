import StarsVote from './StarsVote';

export default function ReviewCard({ review }) {

    const { vote, name, text } = review

    return (
        <div>
            <div className='card p-4 fs-6 mb-4 custom-card'>
                <strong>Voto: </strong>
                <StarsVote vote={vote} />
                <p>{text}</p>
                Scritta da: {name}
            </div>
        </div>
    )

}

