import React from "react";
import { useNavigate } from "react-router-dom";

/*DONE [ChatPage]: Wire up 'Text' button to go to ChatPage*/
/*TODO [HomePage]: Make 'Interests' field work like on original website*/

const Content = () => {
  const navigate = useNavigate();

  return (
    <section className="Content">
      <p>
        Uhmeegle <i>(uh-mee-gul)</i> is a faithful recreation of the similarly
        named app that was online from 2009-2023. For right now, it exists as a
        recreation, but new features may be added in the future. All features
        from the original app are intact. Chats are anonymous, but please do
        reveal personal information such as your name, address, or other
        identifying information.
      </p>

      <b>
        <p>
          NOTE: This site is in active development. Message contents are not
          private and may be seen by the developer. Please use caution.
        </p>
      </b>

      {/* <span id = 'whatText'>What do you want to talk about?</span>
    
    <span id='chatText'>Start chatting:</span>
    <br />
    <input id='interestsField' type="text" />



    <div id='buttonRow'>
    <button onClick={() => {
        navigate('/chat')
    }}>Text</button>
    <span>or</span>
    <button>Video</button>
    </div> */}

      <form>
        <label>What do you wanna talk about?</label>
        <input type="text" id="interestsField" />

        <p id="chatText">Start chatting:</p>

        <div id="buttonRow">
          <button
            onClick={() => {
              navigate("/chat");
            }}
          >
            Text
          </button>
          <span>or</span>
          <button>Video</button>
        </div>
      </form>
    </section>
  );
};

export default Content;
