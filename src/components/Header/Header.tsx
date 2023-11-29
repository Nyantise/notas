import Swal from "sweetalert2";
import { storage } from "../../utils/constants/storage";
import { UserInfo } from "../../vite-env";
import { ExitIcon, StyledHeader } from "./style";
import { useNavigate } from "react-router-dom";
import { color } from "../../utils/constants/css";

const Header = () => {
  const navigate = useNavigate();

  const userStorage = localStorage.getItem(storage.user);
  const { name }: UserInfo = userStorage
    ? JSON.parse(userStorage)
    : { name: "" };

  const logOut = () => {
    Swal.fire({
      title: "Realmente deseja sair?",
      icon: "question",
      width: "350px",
      showDenyButton: true,
      denyButtonText: "Não",
      denyButtonColor: color.darkGray,
      confirmButtonText: "Sim",
      confirmButtonColor: color.gray,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        localStorage.removeItem(storage.user);
        navigate("/entrar");
      }
    });
  };

  return (
    <StyledHeader>
      <div>
        <p>Olá {name}!</p>
        <ExitIcon onClick={logOut} />
      </div>
    </StyledHeader>
  );
};

export default Header;
