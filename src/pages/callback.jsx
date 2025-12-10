import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sendCodeToBackend } from "../services/auth";

export default function Callback() {
  const [params] = useSearchParams();

  useEffect(() => {
    async function finishLogin() {
      const code = params.get("code");
      if (!code) return;

      const data = await sendCodeToBackend(code);

      console.log("USER INFO:", data.user);
      alert("Login Success! Check console");
    }

    finishLogin();
  }, []);

  return <h2>Finishing Login...</h2>;
}
