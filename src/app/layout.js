import "../assets/styles/globals.css";

export const metadata = {
  title: "Engplay",
  description: "Busca de vagas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
