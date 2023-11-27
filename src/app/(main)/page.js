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
      <div class="Container">
        <div class="card">
          <h4 class="exemplos">Engenheiro Civil</h4>
          <p class="descrição">Curitiba-PR </p>
        </div>
        <div class="card">
          <h4 class="exemplos">Engenheiro Agrônomo</h4>
          <p class="descrição">Aracaju-SE</p>
        </div>
        <div class="card">
          <h4 class="exemplos">Engenheiro de Alimentos</h4>
          <p class="descrição">Salvador-BA</p>
        </div>
        <div class="card">
          <h4 class="exemplos">Engenheiro Eletricista </h4>
          <p class="descrição">Laranjeiras-SE</p>
        </div>
        <div class="card">
          <h4 class="exemplos">Engenheiro Mecânico</h4>
          <p class="descrição">Maceió-AL</p>
        </div>
      </div>

      {/* <!-- busca de vagas --> */}
      <section class="div">
        <p class="anuncio">
          Encontre a oportunidade perfeita para a sua carreira.
        </p>

        <div class="search-bar">
          <input
            type="text"
            placeholder="Digite o cargo, a empresa ou a localização"
            className="search rounded-xl border-black border-2"
          />
          <button class="btn-filter">Filtrar Vagas</button>
        </div>

        <div class="search-btn-container">
          <button class="btn-search">Buscar Vagas</button>
        </div>
      </section>
      {/* <!-- Vagas de emprego --> */}
      <section>
        <div class="container">
          <h1 class="vaga-1">Vaga para Engenheiro Civil</h1>
          <p class="job">Empresa: Empresa ABC Engenharia</p>
          <p class="job">Local: Curitiba-PR</p>
          <p class="job">Tipo de Contrato: Tempo Integral</p>
          <p class="job">
            <strong>Descrição:</strong> Buscamos Engenheiro Civil experiente
            para gerenciar projetos de construção, supervisionar equipes e
            garantir padrões de segurança. Requer formação em Engenharia Civil e
            experiência com gestão de projetos.
          </p>
          <p class="job">
            <strong>Requisitos:</strong> Experiência em gestão de projetos,
            conhecimento em normas técnicas, habilidade de liderança e formação
            em Engenharia Civil.
          </p>
          <p class="job">
            <strong>Benefícios:</strong> Plano de saúde, vale-refeição e
            ambiente de trabalho dinâmico.
          </p>
          <a href="#" class="btn-apply">
            Candidatar-se
          </a>
        </div>
        <div class="container">
          <h1 class="vaga-1">Vaga para Engenheiro Agrônomo</h1>
          <p class="job">Empresa: Empresa ABC Engenharia</p>
          <p class="job">Local: Aracaju-SE</p>
          <p class="job">Tipo de Contrato: Tempo Integral</p>
          <p class="job">
            <strong>Descrição:</strong>Estamos em busca de um Engenheiro
            Agrônomo para desenvolver estratégias de cultivo, manejo de recursos
            naturais e promover práticas sustentáveis na agricultura. Requer
            formação em Engenharia Agronômica e experiência em gestão de
            propriedades rurais.
          </p>
          <p class="job">
            <strong>Requisitos:</strong> Experiência em manejo de culturas e
            gestão de propriedade rurais, conhecimento em técnicas de
            agricultara sustentável , Habilidade de trabalho em equipe .
          </p>
          <p class="job">
            <strong>Benefícios:</strong> Plano de saúde, vale-refeição e
            ambiente de trabalho dinâmico.
          </p>
          <a href="#" class="btn-apply">
            Candidatar-se
          </a>
        </div>
        <div class="container">
          <h1 class="vaga-1">Vaga para Engenheiro de Alimentos</h1>
          <p class="job">Empresa: Indústria Alimentícia XXX</p>
          <p class="job">Local: Salvador-BA</p>
          <p class="job">Tipo de Contrato: Tempo Integral</p>
          <p class="job">
            <strong>Descrição:</strong>Estamos em busca de um Engenheiro de
            Alimentos para desenvolver e aprimorar produtos alimentícios,
            assegurando sua qualidade, segurança e conformidade com
            regulamentações. Será responsável por coordenar processos de
            produção, garantindo eficiência e excelência nos padrões de
            qualidade.
          </p>
          <p class="job">
            <strong>Requisitos:</strong> Formação em Engenharia de Alimentos ou
            áreas correlatas, Experiência comprovada na indústria
            alimentícia,Habilidade para coordenar equipes e processos de
            produção.
          </p>
          <p class="job">
            <strong>Benefícios:</strong> Oferecemos plano de saúde,
            vale-refeição, oportunidades de crescimento profissional e ambiente
            colaborativo.
          </p>
          <a href="#" class="btn-apply">
            Candidatar-se
          </a>
        </div>
        <div class="container">
          <h1 class="vaga-1">Vaga para Engenheiro Eletricista </h1>
          <p class="job">Empresa: Elétrica ABC</p>
          <p class="job">Local: Laranjeiras-SE</p>
          <p class="job">Tipo de Contrato: Tempo Integral</p>
          <p class="job">
            <strong>Descrição:</strong> Estamos procurando um Engenheiro
            Eletricista para liderar projetos elétricos, desde o design até a
            implementação. Responsabilidades incluem desenvolvimento e
            supervisão de sistemas elétricos, garantindo eficiência energética e
            conformidade com normas técnicas.
          </p>
          <p class="job">
            <strong>Requisitos:</strong> Formação em Engenharia Elétrica ou
            áreas afins,Experiência em projetos elétricos e sistemas de
            distribuição.
          </p>
          <p class="job">
            <strong>Benefícios:</strong> Plano de saúde, vale-refeição e
            ambiente de trabalho dinâmico.
          </p>
          <a href="#" class="btn-apply">
            Candidatar-se
          </a>
        </div>
        <div class="container">
          <h1 class="vaga-1">Vaga para Engenheiro Mecânico</h1>
          <p class="job">Empresa: Indústria Mecânica ZZZ</p>
          <p class="job">Local: Maceió-AL</p>
          <p class="job">Tipo de Contrato: Tempo Integral</p>
          <p class="job">
            <strong>Descrição:</strong> Estamos em busca de um Engenheiro
            Mecânico para desenvolver e implementar soluções em projetos
            mecânicos, desde o design até a produção. Responsabilidades incluem
            análise de sistemas, desenvolvimento de protótipos e garantia da
            eficiência dos processos mecânicos.
          </p>
          <p class="job">
            <strong>Requisitos:</strong> Formação em Engenharia Mecânica ou
            áreas relacionadas,Conhecimento em softwares de modelagem e
            simulação.
          </p>
          <p class="job">
            <strong>Benefícios:</strong> Plano de saúde, vale-refeição e
            ambiente de trabalho dinâmico.
          </p>
          <a href="#" class="btn-apply">
            Candidatar-se
          </a>
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
