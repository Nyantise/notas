import { ChangeEvent, FormEvent, useState } from "react";
import { StyledPage } from "../style";
import { LoginContainer } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { UserInfo } from "../../vite-env";
import { storage } from "../../utils/constants/storage";

const LoginPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", rgm: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleUserInput = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    setUserInfo((previous) => ({ ...previous, [type]: e.target.value }));
  };

  const logIn = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem(storage.user, JSON.stringify(userInfo));
    setIsLoading(true);
    setTimeout(() => navigate("/notas"), 1000);
  };

  return (
    <StyledPage pathname={pathname}>
      <LoginContainer onSubmit={logIn}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            disabled={isLoading}
            value={userInfo.name}
            onChange={(e) => handleUserInput(e, "name")}
            required
            type="text"
            id="name"
            placeholder="digite seu nome"
          />
        </div>
        <div>
          <label htmlFor="rgm">RGM</label>
          <input
            disabled={isLoading}
            value={userInfo.rgm}
            onChange={(e) => handleUserInput(e, "rgm")}
            required
            type="text"
            id="rgm"
            placeholder="digite seu RGM"
          />
        </div>
        <button disabled={isLoading} type="submit">
          <p>{!isLoading ? "entrar" : "carregando..."}</p>
        </button>
      </LoginContainer>
    </StyledPage>
  );
};

export default LoginPage;
