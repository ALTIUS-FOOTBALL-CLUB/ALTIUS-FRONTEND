import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function OAuthSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const user = {
      name: params.get("name"),
      email: params.get("email"),
      picture: params.get("picture"),
      token: params.get("token"),
    };

    // Save user to localStorage
    localStorage.setItem("altius_user", JSON.stringify(user));

    navigate("/"); // Go home
  }, []);

  return <h2>Logging you in...</h2>;
}
