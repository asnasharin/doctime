// Chat.js (parent component)
import  { useState } from "react";
import ChatBox from "./ChatBox";
import QuickChat from "./QuickChat";
import { useNavigate } from "react-router-dom";

import {useSocket} from '../../Socket'
import { Socket } from "socket.io-client";

function Chat() {

  const [selectedUser, setSelectedUser] = useState<any>(null); 
  const socket: Socket<any> | null = useSocket();

  const navigate = useNavigate();
  const handleUserSelection = (data: { convesationId: any; user: any }) => {
    
    setSelectedUser(data.user);
    navigate(`/showChat/${data.convesationId}`);

  };

    return (
      <div>
        <div className="flex h-screen antialiased text-gray-800">
          <div className="flex flex-row h-full w-full overflow-x-hidden">
            <QuickChat onUserSelect={handleUserSelection} socket={socket} />
            <ChatBox selectedUser={selectedUser} socket={socket} />
          </div>
        </div>
      </div>
    );
}

export default Chat;
