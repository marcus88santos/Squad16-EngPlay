export default function Login() {
  return (
    
      <div class="meio">
        <form method="post" class="formulario">
          <h1 class="centro">
            <strong>Login</strong>
          </h1>

          <label for="nome">Nome</label>
          <input type="text" placeholder="Nome do usuário" autofocus="true" />

          <label for="senha">Senha</label>
          <input type="password" placeholder="Senha" />

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
