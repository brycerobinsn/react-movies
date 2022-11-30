import './ActorCard.css'
export default function ActorCard ({actor}) {
    const actorStyle = {
        backgroundImage: 'url(https://picsum.photos/200?random)',
        backgroundSize: 'cover',
    }
    
    return(
        <>
           <div className="actor" style={actorStyle}>
                {actor}
            </div> 
        </>
    )
}