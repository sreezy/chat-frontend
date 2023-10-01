"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { ChangeEvent, createRef, useEffect, useRef, useState } from "react";



export default function () {
  const addMessage = () => {
    setMessages(messages => [...messages, {
      user: "Anonymous 1",
      text: message,
    }]);
    setMessage("");
  }
  const onInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setMessage(ev.target.value);
  }

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      user: "Anonymous 1",
      text: "Hello!"
    },
    {
      user: "Anonymous 2",
      text: "Hey!"
    },
    {
      user: "Anonymous 1",
      text: "Shut up"
    },
    {
      user: "Anonymous 2",
      text: "Sorry :("
    },
  ]);
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  return (
    <main className={`bg-white h-screen w-screen text-black px-52 pt-6 overflow-x-hidden ${styles.main}`}>
      <nav className="flex justify-between items-center">
        <h1 className="text-5xl font-extrabold">App Name</h1>
        <Link href="/" className="px-4 py-3 bg-red-400 text-xl text-white rounded-lg mt-6 hover:scale-105 active:scale-95 transition-all duration-200">End Chat</Link>
      </nav>

      <div className={`w-full ${styles.chat}`}>

        <div className={`${styles.messages} pb-32`}>
          {messages.map((msg, index) => {
            return (
              <div key={index} className={`${styles.message} mt-8`}>
                <div className="username text-xl font-semibold mt-2">
                  {msg.user}
                </div>
                <div className="message text-lg">
                  {msg.text}
                </div>
              </div>
            )
          })}


          <div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
        </div>

        <div className={`${styles.input} fixed max-w-3xl w-full bottom-14 inset-x-0 mx-auto flex items-center gap-3`}>
          <input type="text" onChange={onInputChange} value={message} className="py-3 font-xl px-5 font-semibold border-2 rounded-lg w-full" />
          <button onClick={addMessage} className="px-4 py-3 bg-green-400 text-xl text-white rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:border-stone-800">
            SEND
          </button>
        </div>


      </div>
    </main>
  )
}