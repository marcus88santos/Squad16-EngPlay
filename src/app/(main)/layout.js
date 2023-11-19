import "../../assets/styles/home.css";
import Header from "../../commom/components/header";
// import Footer from "@/commom/components/footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
