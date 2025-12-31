import { useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

export default function OAuthSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const user = {
      name: params.get("name"),
      email: params.get("email"),
      picture: params.get("picture"),
      token: params.get("token"),
    };

    login(user);     // ✅ instant login
    navigate("/");  // go home
  }, []);

  return <h2>Logging you in...</h2>;
}