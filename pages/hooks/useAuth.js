import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRouter } from "next/router";

export default function useAuth() {
  // Navigate es una dependencia que esta fuera del use efect y se usa dentro de useEfeect
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const tkn = localStorage.getItem("token");
    setToken(tkn);
    if (!tkn) {
      toast.error("Debes iniciar sesión de nuevo");
      router.push("/login");
    }
  }, [router]);
  return token;
}
