import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "200vh" }}>
      <PrettyChatWindow
        projectId="284a8ff5-bbc2-400f-ab8f-312cfc9b669a"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
