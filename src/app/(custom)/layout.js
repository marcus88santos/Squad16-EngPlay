import "../../assets/styles/login.css";

export default function CustomLayout({ children }) {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
}
