import { useForm } from "react-hook-form";
import { loginFun } from "./api";
import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function LoginPage() {
  // const navigate = useNavigate();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  // let [hasError, sethasError] = useState(flase)

  async function onSubmit(data) {
    try {
      const token = await loginFun(data.username, data.password);
      if (token) {
        window.localStorage.setItem("token", token);
        toast.success("Usuario registrado");
        // navigate("/productos");
        router.push("/productos");
      } else {
        toast.error("Usuario o Contraseña incorrectos");
        // hasError(true)
        // setErrors("username ", {Type:"manual", message: "Usuario onvalido"})
        // Para formularios globrales en el error
        setError("root.credentials", {
          type: "manual",
          message: "Credenciales indvalidas",
        });
      }
    } catch (error) {
      toast.error("Error al iniciar sesion");
      console.error("[login error]", error);
    }
  }

  function handelShowHidePassword() {
    // if (showPassword === true) {
    //   setShowPassword(false);
    // } else {
    //   setShowPassword(true);
    // }
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    document.title = "Login";
  });
  return (
    <main className="flex items-center justify-center w-ful min-h-dvh flex-col">
      <h1 className="text-4xl mb-4">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          "bg-white rounded border p-4 flex flex-col gap-4 max-w-sm w-full",
          {
            "border-red-500": errors.root?.credentials, //null safe accessor
          }
        )}
      >
        <input
          className="border text-black text-black-white/50 p-2"
          type="text"
          placeholder="User"
          {...register("username", {
            required: {
              value: true,
              message: "El nombre de usuario requerido",
            },
          })}
        />
        <input
          className="border text-black text-black-white/50 p-2"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          {...register("password", {
            required: { value: true, message: "Contraseña requerida" },
          })}
        />
        <span
          onClick={handelShowHidePassword}
          className="text-xs text-black/50 cursor-pointer hover:text-black"
        >
          {showPassword ? "🙈 Ocultar " : "🙉 Mostrar"} Contraseña
        </span>
        <button className="bg-black p-2">Enviar</button>
        {errors.root?.credentials && (
          <p className="text-red-500">Credenciales invalidas</p>
        )}
      </form>
    </main>
  );
}
