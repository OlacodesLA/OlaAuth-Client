import { useNavigate } from "react-router-dom";

const Nav = () => {
  const router = useNavigate();
  return (
    <div className="w-1/2">
      <ul>
        <li onClick={() => router("/")}>Home</li>
        <li onClick={() => router("/auth/register")}>Register</li>
        <li onClick={() => router("/auth/login")}>Login</li>
      </ul>
    </div>
  );
};

export default Nav;
