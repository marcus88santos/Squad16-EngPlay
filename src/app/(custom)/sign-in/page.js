import Link from "next/link";
import Btn from "../../../commom/components/btn";
import InputSignInUp from "../../../commom/components/input-sign-in-up";

export default function SignIn() {
  return (
    <div className="meio">
      <form method="post" className="formulario rounded-3xl bg-gray-200">
        <h1 class="centro">
          <strong>Login</strong>
        </h1>

        <InputSignInUp size="20" type="user" placeholder="Usuário" />

        <InputSignInUp size="20" type="senha" placeholder="Senha" />

        <Link className="items-center flex justify-center" href="/">
          <Btn layout="login" text="Entrar" />
        </Link>

        <Link
          href="/"
          className="link alinhado1 hover:font-semibold transition duration-300 hover:scale-110"
        >
          Esqueceu sua senha?
        </Link>

        <Link
          href="/sign-up"
          className="link alinhado2 hover:font-semibold transition duration-300 hover:scale-105"
        >
          Ainda não faz parte da comunidade? <br />
          Cadastre-se
        </Link>
      </form>
    </div>
  );
}
