import Link from "next/link";
import InputSignInUp from "../../../commom/components/input-sign-in-up";
import Btn from "@/commom/components/btn";

export default function SignUp() {
  return (
    <div className="bg-gradient-to-bl from-azul-escuro to-azul-ciano p-8 flex items-center justify-center h-screen">
      <div className="bg-gray-200 rounded-3xl flex flex-col items-center px-12 py-8 shadow-2xl">
        <h1 className="text-5xl mb-10 bg-gradient-to-b from-azul-escuro to-azul-ciano bg-clip-text text-transparent">
          Cadastre-se
        </h1>
        <InputSignInUp size={20} type="user" placeholder="Usuário" />
        <InputSignInUp size={20} type="email" placeholder="E-mail" />
        <InputSignInUp size={20} type="senha" placeholder="Senha" />
        <InputSignInUp size={20} type="senha" placeholder="Confirme a senha" />
        <Link className="items-center flex justify-center" href="/">
          <Btn layout="cadastro" text="Cadastrar" />
        </Link>
      </div>
    </div>
  );
}
