import React,{useState} from 'react'

const Room = (props) => {
    const [movie,setMovie] = useState('movie')
    const {roomId} = props.match.params;

    return (
        <div>
            <h1> 
                Showswiper
            </h1>
            <div className ='buttons'>
                <button className='likeButton'>like</button>
                <button className='dislikeButton'>dislike</button>
            </div>
            <h2>{movie}</h2>
        </div>
    )
}

export default Room
