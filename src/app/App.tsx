import "./App.css";
import { Header } from "Challenge3/header/header.tsx";
import { Menu } from "../menu/menu";
import { MenuOptions } from "../../types/menu.options";
import { AppRoutes } from "../app.routes/app.routes";
import React from "react";

export function App() {
  const label = "Desde fuera";
  const options: MenuOptions = [
    { url: "", label: "Home" },
    { url: "todo", label: "Todo List" },
  ];

  return (
    <>
      <Header label={label} user="Alfredo">
        <Menu options={options}></Menu>
      </Header>

      <AppRoutes></AppRoutes>
    </>
  );
}
