import React, { useState } from "react";
import { Button } from "./ui/Button";

export const Dashboard = () => {
  const [name, setName] = useState("Fifirifi");

  const klikMe = () => {
    console.log("olaboga kliknął!");

    setName(name === "Ewsle" ? "Fifirifi" : "Ewsle");
  };

  return (
    <div>
      Hello! <Button onClick={klikMe}>{name}</Button>
    </div>
  );
};
