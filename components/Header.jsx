import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home", outhRequired: false },
  { href: "/productos", label: "Productos", outhRequired: true },
  { href: "/login", label: "Login", outhRequired: false },
];

export default function Header() {
  const router = useRouter();

  //   const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  });

  function handleLogout() {
    localStorage.removeItem("token");
    setIsAuth(false);
    router.push("/");
  }
  return (
    <header className="h-full">
      <nav className="bg-white/50 flex flex-row justify-around text-lg font-semibold">
        {links.map((link) => {
          if (link.outhRequired && !isAuth) return null;
          if (isAuth && link.href === "/login") return null;
          return (
            <a
              key={`link-${link.href}`}
              href={link.href}
              className="hover:bg-black/50 w-full h-full text-center  p-4"
            >
              {link.label}
            </a>
          );
        })}
        {isAuth && (
          <button
            onClick={handleLogout}
            className="hover:bg-black/50 w-full h-full text-center  p-4"
          >
            Salir
          </button>
        )}
      </nav>
    </header>
  );
}
