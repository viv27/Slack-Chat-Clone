
import React, { useState } from 'react'
import { useStateValue } from '../StateProvider';
import './ChatInput.css';
import db from '../Firebase';
import firebase from 'firebase';

function ChatInput({channelName, channelId }) {
    // console.log(channelName,channelId);
    const [input, setInput ] = useState("");
    const [{user}] = useStateValue();

    const sendMessage = e =>{
        e.preventDefault();

        if (channelId){
            db.collection('rooms').doc(channelId).collection('massages').add({
                message:input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user?.displayName,
                userImage: user?.photoURL,
            })
        }
        setInput("");
    }; 

    return (
        <div className="chatInput">
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message #${channelName?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput
