// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {

  // Data Header
  const links = [
    { id: 1, name: "Lorem ipsum", url: "#" },
    { id: 2, name: "Consectetur", url: "#" },
    { id: 3, name: "Adipiscing", url: "#" },
    { id: 4, name: "Eiusmod", url: "#" },
  ];

  return (
    <div>
      <Header links={links} />
      <p>Content</p>
      <Footer />
    </div>
  );
};

export default Home;
