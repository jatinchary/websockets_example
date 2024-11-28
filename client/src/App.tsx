import { useEffect, useRef, useState } from "react";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const Sendmessage = () => {
    if (!socket) {
      return;
    }
    const message = inputRef.current?.value|| "";
    socket.send(message);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <><div className="flex justify-center items-center h-screen">
      <input
        ref={inputRef}
        type="text"
        placeholder="ping"
        className="border-red-400"
      />
      <button onClick={Sendmessage} className=" border-red-500">send</button>
      </div>
    </>
  );
}

export default App;
