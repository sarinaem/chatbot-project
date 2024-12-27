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

const router = createBrowserRouter(
  [
    {
      path: "home",
      element: <Home />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "",
      element: <App />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "newChat",
      element: <DetailContent />,
    },

    {
      path: "enter-pass",
      element: <PasswordsDefine />,
    },

    {
      path: "signUp",
      element: <SignUp />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },

    {
      path: "/newTopic",
      element: <NewTopic />,
    },

    {
      path: "send",
      element: <Send />,
    },
    {
      path: "/message/:id",
      element: <Message />,
    },
  ],
  {
    basename: "/chatbot-project/",
  }
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
