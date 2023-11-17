import "./css/App.css";
import Header from "./components/Header";
import { HEADER_TITLE } from "./utils/constants";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <html lang="en">
      <header>
        <Header title={HEADER_TITLE}></Header>
      </header>
      <body className="app-body">
        <RouterProvider router={router} />
      </body>
    </html>
  );
}

export default App;
