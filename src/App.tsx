import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import GradesPage from "./pages/GradesPage/GradesPage";
import Header from "./components/Header/Header";
import Protected from "./components/Protected/Protected";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/entrar" && <Header />}

      <Routes>
        <Route path="/" element={<Navigate to="/entrar" />}></Route>
        <Route path="/entrar" element={<LoginPage />}></Route>
        <Route
          path="/notas"
          element={
            <Protected>
              <GradesPage />
            </Protected>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
