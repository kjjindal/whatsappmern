import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages,setmessages]=useState();
  useEffect(()=>{

    axios.get('/api/v1/messages/new')
    .then((response)=>{setmessages(response.data)})
    .catch((err)=>{console.log(err)})





  },[])
  useEffect(()=>{
    const pusher = new Pusher('b9b3d5ce9ee27de8b899', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setmessages([...messages,data])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages])

  console.log(messages);
  return (
    <>
    <div className="app">
      <div className="app__green">
        
      </div>
     
     <div className="app__body">
     <Sidebar />
     <Chat messages={messages} />
     </div>
     
    </div>
    </>
  );
}

export default App;
