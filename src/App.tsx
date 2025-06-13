// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import ContactUs from "./pages/ContactUs";
import Analysis from "./pages/Analysis";
import NavBar from "./components/NavBar";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import BackgroundStyle from "./components/BackgroundStyle";
import { FooterBackgroundColor, FooterTextColor } from "./config";
import "./App.css";

function App() {
  let currentYear = new Date().getFullYear();

  return (
    <Router> {/* ✅ Router should wrap the full layout */}
      <div className="app-container">
        <div className="background-wrapper">
          <BackgroundStyle />
        </div>

        <div className="content-wrapper">
          <NavBar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/article/:id" element={<ArticleDetailPage />} />
            </Routes>
          </main>
        </div>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        ></link>

        <footer
          style={{
            textAlign: "center",
            backgroundColor: FooterBackgroundColor,
            color: FooterTextColor,
          }}
        >
          © All Copyright {currentYear} by Precision Health
        </footer>
      </div>
    </Router>
  );
}

export default App;