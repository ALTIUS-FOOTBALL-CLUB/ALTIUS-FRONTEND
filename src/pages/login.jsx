import { getGoogleAuthUrl } from "../services/auth";

export default function Login() {
  const loginWithGoogle = async () => {
    const url = await getGoogleAuthUrl();
    window.location.href = url;
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
}
