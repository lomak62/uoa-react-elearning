import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import HeroImage from "./assets/hero/m1-s-1-2.png";
import Prod1 from "./assets/products/prod1-signature-cake.png";
import Prod2 from "./assets/products/prod2-chocolate-muffin.png";
import Prod3 from "./assets/products/prod3-chocolate-bake.png";
import Prod4 from "./assets/products/prod4-no-bake-chocolate.png";
import Prod5 from "./assets/products/prod5-macaron-cake.png";
import Prod6 from "./assets/products/prod6-cream-muffin.png";
import Prod7 from "./assets/products/prod7-red-velvet.png";
import Prod8 from "./assets/products/prod8-brownie.png";
import "./App.css";

function App() {
  // Product cards data
  const [card1, card2, card3, card4, card5, card6, card7, card8] = [
    {
      image: Prod8,
      title: "Brownie",
      price: 3.29,
    },
    {
      image: Prod7,
      title: "Red Velvet",
      price: 4.99,
    },
    {
      image: Prod6,
      title: "Cream Muffin",
      price: 3.79,
    },
    {
      image: Prod5,
      title: "Macaron Cake",
      price: 6.49,
    },
    {
      image: Prod4,
      title: "No-bake chocolate",
      price: 4.49,
    },
    {
      image: Prod3,
      title: "Chocolate Bake",
      price: 4.29,
    },
    {
      image: Prod2,
      title: "Chocolate Muffin",
      price: 3.59,
    },
    {
      image: Prod1,
      title: "Signature Cake",
      price: 6.99,
    },
  ];

  return (
    <>
      <HeroSection
        imgSrc={HeroImage}
        shopName="Baker Fresh"
        tagline="Χειροποίητα γλυκά με φρέσκα υλικά, καθημερινά."
        btnText="Δείτε τον κατάλογο"
      />

      <main>
        <ProductsSection
          sectionTitle="ΟΙ ΔΗΜΙΟΥΡΓΙΕΣ ΜΑΣ"
          sectionSubtitle="Από κλασικές συνταγές μέχρι signature επιλογές — φτιαγμένα στο εργαστήριό μας."
          card1={card1}
          card2={card2}
          card3={card3}
          card4={card4}
          card5={card5}
          card6={card6}
          card7={card7}
          card8={card8}
        />

        <ContactSection
          shopName="Baker Fresh"
          title="ΕΛΑΤΕ ΝΑ ΜΑΣ ΓΝΩΡΙΣΕΤΕ"
          subtitle="Σας περιμένουμε στο κατάστημά μας"
          contact={{
            icon: "bi-phone",
            link: "#!",
            description: "Τηλέφωνο & ώρες λειτουργίας",
          }}
          shopping={{
            icon: "bi-handbag",
            link: "#!",
            description: "Online παραγγελία & παραλαβή",
          }}
          location={{
            icon: "bi-geo-alt",
            link: "#!",
            description: "Χάρτης & οδηγίες πρόσβασης",
          }}
          footer={{ companyName: "Baker Fresh Cake Shop" }}
        />
      </main>
    </>
  );
}

export default App;
