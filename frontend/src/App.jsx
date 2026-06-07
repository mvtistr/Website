import Header from "@components/Header/Header.jsx";
import Footer from "@components/Footer/Footer.jsx";

import AppRoutes from "@routes/AppRoutes.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;