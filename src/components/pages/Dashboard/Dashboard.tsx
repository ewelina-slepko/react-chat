import React, { useState } from "react";
import { Navbar } from "../../ui/Navbar/Navbar";
import { Layout, LayoutWrapper } from "../../../App.styled";
import { Sidebar } from "../../ui/Sidebar/Sidebar";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase-config";

export type Message = {
  test: string;
  createdAt: Date;
  id: string;
};

const useSideMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);
  return { isActive, toggle };
};

export const Dashboard = () => {
  const [messages, setMessages] = useState([]);

  const colRef = collection(db, "generalChatMessages");
  const q = query(colRef, orderBy("createdAt", "desc"), limit(100));

  onSnapshot(
    q,

    (el) => {
      console.log("new Message", el);
      const data = el.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // setMessages(data);
      console.log("data", data);
    }
  );

  const { isActive, toggle } = useSideMenu();
  return (
    <>
      <Navbar isActive={isActive} onToggle={toggle} />
      <LayoutWrapper>
        <Sidebar isActive={isActive} />
        <Layout>
          Wiadomości:
          {messages.map((msg) => (
            <div>{msg}</div>
          ))}
        </Layout>
      </LayoutWrapper>
    </>
  );
};
