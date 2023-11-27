export default function Btn(props) {
  const estilos = {
    "classe-padrao": "border-2 rounded px-10 py-2.5 bg-transparent",
    'cadastrarCV': "border-2 rounded-3xl px-5 py-2.5 bg-blue-950",
    'login': "mt-4 mb-4 rounded-2xl px-10 py-2.5 bg-blue-950 text-white hover:bg-azul-ciano hover:scale-110 transition duration-300",
    'cadastro': "mt-4 rounded-2xl px-10 py-2.5 bg-blue-950 text-white hover:bg-azul-ciano hover:scale-110 transition duration-300",
    "filtrar-busca": "rounded-md px-3.5 py-2.5 bg-red-500",
    "buscar-vagas": "rounded-lg px-3.5 py-2.5 bg-blue-950",
    "ver-vagas": "border-2 rounded-xl px-2.5 py-2.5 bg-transparent",
    "redefinir-busca": "rounded px-3.5 py-2.5 bg-lime-700",
    "vaga-disponivel": "rounded px-3.5 py-2.5 bg-lime-700",
    "candidata-vaga": "rounded-3xl px-3.5 py-2.5 bg-lime-700",
  };

  const layout = props.layout;
  const text = props.text;

  const classeDoBotao = estilos[layout] || estilos["classe-padrao"];

  return <button className={`${classeDoBotao} no-underline`}>{text}</button>;
}
