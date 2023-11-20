import "./css/App.css";
import Header from "./components/Header";
import { HEADER_TITLE } from "./utils/constants";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {

  const React = require("react");
  const ReactDOM = require("react-dom");

  if (process.env.NODE_ENV !== "production") {
    const axe = require("@axe-core/react");
    axe(React, ReactDOM, 1000);
  }

  return (
    <html lang="en">
      <header>
        <Header title={HEADER_TITLE}></Header>
      </header>
      <body className="app-body">
      <main>
          <RouterProvider router={router} />
      </main>
      </body>
    </html>
  );
}

export default App;
