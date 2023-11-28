import "../../assets/styles/home_slider.css";
import "../../assets/styles/home_style.css";
import "../../assets/styles/footer.css";
import Footer from "../../commom/components/footer";
import Header from "../../commom/components/header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
