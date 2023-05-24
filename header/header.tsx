import React from "react";

type PropsType = {
  children: JSX.Element;
  label: string;
  user: string;
};

export function Header({ children, label, user }: PropsType) {
  const title = "Bienvenido a Juego de tronos tanatananana";

  return (
    <>
      <header className="header">
        <h1>{label}</h1>
      </header>
      {children ? (
        <>
          <p>{user}</p>
        </>
      ) : (
        <p>{title.toLocaleUpperCase()}</p>
      )}

      {children}
    </>
  );
}
