import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailContent from "./Pages/DetailContent.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import SignUp from "./components/SignUp.jsx";
import PasswordsDefine from "./components/PasswordsDefine.jsx";
import Profile from "./components/ProfilUser.jsx";
import NewTopic from "./components/NewTopic.jsx";
import Send from "./components/Send.jsx";
import Home from "./Home.jsx";
import Message from "./components/Message.jsx";

const router = createBrowserRouter([
  {
    path: "chatbot-project/home",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "chatbot-project/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "chatbot-project/newChat",
    element: <DetailContent />,
  },

  {
    path: "chatbot-project/enter-pass",
    element: <PasswordsDefine />,
  },

  {
    path: "chatbot-project/signUp",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/chatbot-project/newTopic",
    element: <NewTopic />,
  },

  {
    path: "chatbot-project/send",
    element: <Send />,
  },
  {
    path: "/message/:id",
    element: <Message />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
