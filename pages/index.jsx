import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="w-full flex flex-row justify-center items-center">
        <div className="flex w-[50%] justify-center">
          <h2 className="font-bold text-center text-[60px]">
            Vendemos de todo
          </h2>
        </div>

        <div className=" w-[50%] flex flex-col justify-center items-center">
          <img
            width="400px"
            src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
