import React, {useState,useEffect,useRef} from 'react';
import socketIOClient from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:4000';
const SEND_WEIGHTS = 'sendWeights'
const ADD_PASSWORD = 'addPassword';
const UPDATE_WEIGHTS = 'updateWeights'


const useWeights = (roomId) => {
    const socketRef = useRef();
    const [weights, setWeights]= useState([])
    const [senderId,setSenderId] = useState('')
  
    useEffect(() => {

        console.log('setting up connection')
        socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
            query:{roomId},
        });

        setSenderId(socketRef.current.id)
        console.log(socketRef.current.id)


        // receives weights on render and request, sets weights to received weights



          
    })

    // useEffect(()=>{

    // called to update weights after a movie is liked or disliked
    const updateWeights = (genres,liked) => {
        socketRef.current.emit(UPDATE_WEIGHTS, {
            genres:genres,
            liked:liked,
        });
    }

      
  
   return {weights, updateWeights, senderId}  
    
}

export default useWeights