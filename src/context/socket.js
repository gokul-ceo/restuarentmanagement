import { io } from "socket.io-client";
const socket = io('http://localhost:4000/admin',{transports:['websocket']});
export default socket