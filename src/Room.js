import React,{useState} from 'react';
import useWeights from './useWeights';

// endpoints
const GET_MOVIE = '/get-movie'
const CHECK_MOVIE = '/check-movie'
const DELETE_MOVIE = '/delete-movie'

const Room = (props) => {
    const {roomId} = props.match.params;

    const [movie,setMovie] = useState('movie')
    const [getNewMovie, setGetNewMovie] = useState(true)
    const [matchFound, setMatchFound] = useState(false)
    const {weights, updateWeights, senderId} = useWeights(roomId);

    console.log(senderId)


    if (getNewMovie) {
        
        // gets movie from database, sets getNewMovie to false so this doesn't run again and get a new movie
        const callMovie = async () => {
            // const response = await fetch('http://localhost:4000'+GET_MOVIE, {
            // method: 'GET',
            // });
    
            // const data = await response.json();
            
            // setMovie(data.movie);
            // setGetNewMovie(false);
        }

        callMovie()
    }
    

    const handleLike = () => {
        const callMovie = async () => {
            // sends movie to server for checkie
            // const response = await fetch('http://localhost:4000'+CHECK_MOVIE, {
            //     method: 'GET',
            //     cors: true,
            //     headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         movie: movie,
            //         senderId: senderId,
            //     }),
            // });
            
            // // response should be in structure: boolean, true if there is a match in other user's database, false otherwise
            // const data = await response.json();

            // if (data.success) {
            //     setMatchFound(true)
            // }
        }

        callMovie()
        // sets getNewMovie to true so that on next render a new movie is displayed
        setGetNewMovie(true);
    }

    const handleDislike = () => {
        const deleteMovie = async () => {
            // sends movie to server for checkie
            // const response = await fetch('http://localhost:4000'+DELETE_MOVIE, {
            //     method: 'GET',
            //     cors: true,
            //     headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         movie: movie,
            //         senderId: senderId,
            //     }),
            // });

        }

        deleteMovie()
        // sets getNewMovie to true so that on next render a new movie is displayed
        setGetNewMovie(true);
    }

    if (!matchFound) {
        return (
            <div>
                <h1> 
                    Showswiper
                </h1>
                <div className ='buttons'>
                    <button className='likeButton' onClick ={handleLike}>like</button>
                    <button className='dislikeButton' onClick={handleDislike}>dislike</button>
                </div>
                <h2>{movie}</h2>
            </div>
        )
    } else {
        return( 
            <div>
                <h2>Match Found!</h2>
                <h3>{movie}</h3>
            </div>
        )
    }
}

export default Room
