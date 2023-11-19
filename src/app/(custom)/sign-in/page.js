import Link from "next/link";
import InputSignInUp from "../../../commom/components/input-sign-in-up";

export default function SignIn() {
  return (
    <div class="meio">
      <form method="post" class="formulario">
        <h1 class="centro">
          <strong>Login</strong>
        </h1>

        <InputSignInUp size="24" type="user" />

        <InputSignInUp size="24" type="senha" />

        <button className="mt-3 botão">Entrar</button>

        <Link href="/" className="link alinhado1">
          Esqueceu sua senha?
        </Link>

        <Link href="/sign-up" className="link alinhado2">
          Cadastre-se
        </Link>
      </form>
    </div>
  );
}
