import Btn from "@/commom/components/btn";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section class="slider">
        <div class="slider-content">
          <input type="radio" name="btn-radio" id="radio1" />
          <input type="radio" name="btn-radio" id="radio2" />
          <input type="radio" name="btn-radio" id="radio3" />

          <div class="slide-box primeiro">
            <img class="img-desktop" src="zyro-image.png" alt="slide 1" />
            <img class="img-mobile" src="zyro-image.png" alt="slide 1" />
          </div>

          <div class="slide-box">
            <img
              class="img-desktop"
              src="snapedit_1700695117621.png"
              alt="slide 3"
            />
            <img
              class="img-mobile"
              src="snapedit_1700695117621.png"
              alt="slide 1"
            />
          </div>

          <div class="slide-box">
            <img
              class="img-desktop"
              src="snapedit_1700695175681.png"
              alt="slide 3"
            />
            <img
              class="img-mobile"
              src="snapedit_1700695175681.png"
              alt="slide 3"
            />
          </div>

          <div class="nav-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
          </div>

          <div class="nav-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
          </div>
        </div>
      </section>

      <div class="vagas">
        <h1 class="recentes">Vagas recentemente publicadas</h1>
      </div>

      {/* <!-- 5 vagas recentimente publicadas --> */}
      <div className="Container child:cursor-pointer ">
        <Link href='/vagas' class="card">
          <h4 class="exemplos">Engenheiro Civil</h4>
          <p class="descrição">Curitiba-PR </p>
        </Link>
        <Link href='/vagas' class="card">
          <h4 class="exemplos">Engenheiro Agrônomo</h4>
          <p class="descrição">Aracaju-SE</p>
        </Link>
        <Link href='/vagas' class="card">
          <h4 class="exemplos">Engenheiro de Alimentos</h4>
          <p class="descrição">Salvador-BA</p>
        </Link>
        <Link href='/vagas' class="card">
          <h4 class="exemplos">Engenheiro Eletricista </h4>
          <p class="descrição">Laranjeiras-SE</p>
        </Link>
        <Link href='/vagas' class="card">
          <h4 class="exemplos">Engenheiro Mecânico</h4>
          <p class="descrição">Maceió-AL</p>
        </Link>
      </div>

      {/* <!-- busca de vagas --> */}
      <section class="div">
        <p class="anuncio">
          Encontre a oportunidade perfeita para a sua carreira.
        </p>

        <div className="flex flex-rol items-center justify-center mb-40">
          <input
            type="text"
            placeholder="Digite o cargo, a empresa ou a localização"
            className="search rounded-xl border-black border-2 mr-2"
          />
          <Link href="/vagas">
            <Btn className="ml-8" layout="buscar-vagas" text="Buscar vagas" />
          </Link>
        </div>
      </section>

      {/* <!-- jQuery primeiro, depois Popper.js, depois Bootstrap JS --> */}
      <script type="text/javascript" src="/src/commom/scripts/home.js"></script>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}
