import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section class="slider">
        <div class="slider-content">
          <input type="radio" name="btn-radio" id="radio1" />
          <input type="radio" name="btn-radio" id="radio2" />
          <input type="radio" name="btn-radio" id="radio3" />

          <div class="slide-box primeiro">
            <Image className="img-desktop" src="/slide-1.jpg" alt="slide 1" width='100' height='100' />
            <Image className="img-mobile" src="/slide-1-mob.jpg" alt="slide 1" width='100' height='100'/>
          </div>

          <div class="slide-box">
            <Image class="img-desktop" src="/slide-2.jpg" alt="slide 3" width='100' height='100'/>
            <Image class="img-mobile" src="/slide-2-mob.jpg" alt="slide 1" width='100' height='100'/>
          </div>

          <div class="slide-box">
            <Image class="img-desktop" src="/slide-3.jpg" alt="slide 3" width='100' height='100'/>
            <Image class="img-mobile" src="/slide-3-mob.jpg" alt="slide 3" width='100' height='100'/>
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
        <h1>Vagas recentemente publicadas</h1>
      </div>

      {/* Parte de colocar anúncios ou colaboradores */}
      <div class="Container">
        <dic class="card">
          <h4>Vaga 1</h4>
        </dic>
        <dic class="card">
          <h4>Vaga 2</h4>
        </dic>
        <dic class="card">
          <h4>Vaga 3</h4>
        </dic>
        <dic class="card">
          <h4>Vaga 4</h4>
        </dic>
        <dic class="card">
          <h4>Vaga 5</h4>
        </dic>
      </div>

      {/* <!-- busca de vagas --> */}
      <section>
        <p>Encontre a oportunidade perfeita para a sua carreira.</p>

        <div class="search-bar">
          <input
            type="text"
            placeholder="Digite cargo, empresa ou localização"
          />
          <button class="btn-filter">Filtrar Vagas</button>
        </div>

        <div class="search-btn-container">
          <button class="btn-search">Buscar Vagas</button>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="job-list" id="jobList">
            {/* <!-- Resultados da busca aparecerão aqui --> */}
            <div class="job-card">
              <h3>Vaga 1 </h3>
              <p>Descrição sobre a vaga.</p>
            </div>
            <div class="job-card">
              <h3>Vaga 2</h3>
              <p>Descrição sobre a vaga .</p>
            </div>
          </div>
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
