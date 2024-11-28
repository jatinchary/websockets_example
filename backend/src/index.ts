import {  WebSocketServer } from "ws";
const wss = new WebSocketServer({port:8080});

wss.on("connection", function(socket){
    console.log("user connected");
    // setInterval(()=>{
    //     socket.send("currrent price of solana is" + Math.random()); 
    // },5000) 

    socket.on ("message" ,(e)=>{
        if(e.toString()==="ping"){
            socket.send("pong")
        }
        
    })
})