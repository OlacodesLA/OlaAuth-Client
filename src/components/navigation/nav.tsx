import { useNavigate } from "react-router-dom";

const Nav = () => {
  const router = useNavigate();
  return (
    <>
      <ul>
        <li onClick={() => router("/")}>Home</li>
        <li onClick={() => router("/auth/register")}>Register</li>
        <li onClick={() => router("/auth/login")}>Login</li>
      </ul>
    </>
  );
};

export default Nav;
