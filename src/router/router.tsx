import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/dashboard";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
