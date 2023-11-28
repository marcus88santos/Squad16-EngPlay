import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-azul-escuro flex text-white py-1 p-16 justify-between items-center sticky top-0 z-20 font-semibold">
      <Link href="/">
      <Image
        width="150"
        height="50"
        src="/logo_engplay.png"
        alt="Logo EngPlay"
      />
      </Link>
      <div className="flex items-center text-xl">
        <ul className="flex items-center mb-0 px-16 child:px-8 child:py-2 [&>*>a]:cursor-pointer">

          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="border-l">
            <Link href="/vagas">Buscar Vagas</Link>
          </li>
          <li  className="border-l border-r">
            <Link href="/sobre-nos">Sobre Nós</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
