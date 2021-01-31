import React, { useState } from 'react';
import './Chat.css';
import {SearchOutlined,MoreVert,AttachFile, InsertEmoticon, Mic} from '@material-ui/icons';
import {IconButton,Avatar} from '@material-ui/core';
import axios from './axios';


const Chat=({messages})=>{
    const [input,setinput]=useState("");
    const sendMessage= async (e)=>{
        e.preventDefault();

        await axios.post('/api/v1/messages/new',{
            "name":"kalpit",
            "timestamp":new Date().toUTCString(),
            "message":input,
            "received":true

        })

        setinput("");

        
    
    }
        return (
        <>
        <div className="chat">

        <div className="chat__header">
        <Avatar  alt=""  src=""  />
        <div className="chat__headerInfo">
            <h3>ECE 7th sem</h3>
            <p> Last seen 2 day ago  </p>
        </div>
        <div className="chat__headerRight">
            <IconButton>
            <SearchOutlined  />

            </IconButton>
            <IconButton>
            <AttachFile />
                
            </IconButton>
            <IconButton>
            <MoreVert />
                
            </IconButton>
        </div>


        </div>
        <div className="chat__body">
        {messages?.map(({message,name,timestamp,received})=>(
            <p className={`chat__message ${received && 'chat__sender'}  `}>
            <span className="chat__name">{name}  </span>
            {message}
            <span className="chat__timestamp">
              {timestamp}
            </span>
        </p>

        ))}
       
        
       

        </div>
        <div className="chat__footer">
        <InsertEmoticon />
        <form>
        <input value={input} type="text" placeholder="type....." onChange={(e)=>{setinput(e.target.value)}}  />
        <button  onClick={sendMessage}  > Send a Message </button>

        </form>
        <Mic />
        


        </div>


        </div>


        </>
    )
}

export default Chat;