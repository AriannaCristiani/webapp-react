import StarsVote from './StarsVote';

export default function ReviewCard({ review }) {

    const { vote, name, text } = review

    return (
        <div>
            <div className='card p-4 fs-6 mb-4'>
                <strong>Voto: </strong>
                <StarsVote vote={vote} />
                <strong>Recensione: </strong>
                <p>{text}</p>
                <p>
                    <strong>Scritta da: </strong> {name}
                </p>
            </div>
        </div>
    )

}

