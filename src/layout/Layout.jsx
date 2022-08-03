import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-8">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
