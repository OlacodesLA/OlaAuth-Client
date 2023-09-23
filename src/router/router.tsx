import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/dashboard";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";
import Verify from "@/pages/auth/verify";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
