import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-black text-lg">Home page</h1>
      <p>This is home page</p>
      <div className="flex flex-row">
        <h2>Vendemos de todo</h2>

        <div>
          <img
            src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
            alt=""
          />
          <p>Hola soy un texto</p>
        </div>
      </div>
    </div>
  );
}
