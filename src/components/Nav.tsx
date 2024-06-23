import { useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <button onClick={() => navigate("/")}>Каталог</button>
      <button onClick={() => navigate("/favorites")}>Избранное</button>
    </div>
  );
};

export default Nav;
