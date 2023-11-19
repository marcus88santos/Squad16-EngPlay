import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-azul-escuro flex text-white py-1 p-16 justify-between items-center sticky top-0 z-20 font-semibold">
      <Image
        width="170"
        height="70"
        src="/logo_engplay.png"
        alt="Logo EngPlay"
      />
      <div className="flex items-center text-xl">
        <ul className="flex items-center px-16 child:px-8 child:py-2 [&>*>a]:cursor-pointer">
          <li>
            <Link href="/">Buscar Vagas</Link>
          </li>
          <li  className="border-l border-r">
            <Link href="/">Sobre Nós</Link>
          </li>
          <li>
            <Link href="/sign-in">Login</Link>
          </li>
        </ul>
        <button className="rounded-3xl border-2 py-2 px-3">Cadastrar CV</button>
      </div>
    </header>
  );
}
