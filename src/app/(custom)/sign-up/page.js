import Link from "next/link";
import InputSignInUp from "../../../commom/components/input-sign-in-up";

export default function SignUp() {
  return (
    <div className="bg-gradient-to-bl from-azul-escuro to-azul-ciano p-8 flex items-center justify-center h-screen">
      <div className="bg-gray-200 rounded-3xl flex flex-col items-center px-12 py-8">
        <h1 className="text-5xl mb-10 bg-gradient-to-b from-azul-escuro to-azul-ciano bg-clip-text  text-transparent">
          Cadastre-se
        </h1>
        <InputSignInUp size={20} type="user" placeholder="Usuário" />
        <InputSignInUp size={20} type="email" placeholder="E-mail" />
        <InputSignInUp size={20} type="senha" placeholder="Senha" />
        <InputSignInUp size={20} type="senha" placeholder="Confirme a senha" />
        <button className="mt-8 bg-azul-escuro text-white py-2 px-4 rounded-lg hover:bg-azul-ciano transition-colors duration-300">
          <Link href="/">Cadastrar</Link>
        </button>
      </div>
    </div>
  );
}
