import Image from "next/image";

export default function Header(layout) {
  
  return (
    <header className="bg-azul-escuro py-8  px-16 justify-between items-center sticky top-0 z-20">
      <Image
        width="170"
        height="70"
        src="/logo_engplay.png"
        alt="Logo EngPlay"
      />
      <ul>
        <li>
          <a>Buscar Vagas</a>
        </li>
        <li>
          <a>Sobre Nós</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
      <button>Cadastrar CV</button>
    </header>
  );
}
