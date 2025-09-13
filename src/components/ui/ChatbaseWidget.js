import { useEffect } from "react";

const ChatbaseWidget = () => {
  useEffect(() => {
    const CHATBOT_ID = process.env.REACT_APP_CHATBASE_ID; // get from env

    if (!CHATBOT_ID) {
      console.error("Chatbase ID not found in env variables");
      return;
    }

    if (document.getElementById(CHATBOT_ID)) return; // already loaded

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = CHATBOT_ID;
    script.async = true;
    script.setAttribute("data-chatbot-id", CHATBOT_ID);

    document.body.appendChild(script);

    script.onload = () => {
      setTimeout(() => {
        const bubble = document.querySelector('[id^="chatbase-bubble"]');
        const container = document.querySelector('[id^="chatbase-container"]');

        if (bubble) {
          bubble.style.width = "50px";
          bubble.style.height = "50px";
        }
        if (container) {
          container.style.width = "300px";
          container.style.height = "400px";
          container.style.borderRadius = "12px";
        }

        const handleOutsideClick = (event) => {
          if (
            container &&
            container.style.display !== "none" &&
            !container.contains(event.target) &&
            bubble &&
            !bubble.contains(event.target)
          ) {
            container.style.display = "none";
          }
        };

        document.addEventListener("click", handleOutsideClick);

        // cleanup on unmount
        return () => {
          document.removeEventListener("click", handleOutsideClick);
        };
      }, 2000);
    };
  }, []);

  return null;
};

export default ChatbaseWidget;
