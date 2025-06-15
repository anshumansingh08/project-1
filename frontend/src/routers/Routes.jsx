import { Route, Routes } from "react-router";
import ChatPage from "../pages/ChatPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import NoPage from "../pages/NoPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;
