export async function getGoogleAuthUrl() {
  const res = await fetch("http://localhost:8008/auth/login", {
    method: "GET",
    redirect: "manual"
  });

  return res.url; 
}
