import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../utils/constants/storage";

const Protected = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem(storage.user)) {
      navigate("/entrar");
    } else {
      navigate("/notas");
    }
  }, []);

  return <>{children}</>;
};

export default Protected;
