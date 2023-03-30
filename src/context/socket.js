import { io } from "socket.io-client";
const server_url = "https://hsswebend-4z4hd76enq-em.a.run.app/";
const socket = io(server_url + "admin", {
  transports: ["websocket"],
});
export default socket;

export const ordersocket = io(server_url + "notify", {
  transports: ["websocket"],
});
