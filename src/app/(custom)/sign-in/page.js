import InputSignInUp from "../../../commom/components/input-sign-in-up";

export default function SignIn() {
  return (
    
      <div class="meio">
        <form method="post" class="formulario">
          <h1 class="centro">
            <strong>Login</strong>
          </h1>

          <InputSignInUp size="24" type="user" />

          <InputSignInUp size="24" type="password" />

          <input type="submit" value="Entrar" class="botão" />

          <a href="/" class="alinhado1">
            Esqueceu sua senha?
          </a>

          <a href="/" class="alinhado2">
            Cadastre-se
          </a>
        </form>
      </div>
  );
}
