import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import "../../styles/Contacto.css";

export function Contacto() {
  const handleTelegramClick = () => {
    window.open("https://t.me/voultpremium", "_blank");
  };

  return (
    <div className="contacto-page">
      <Navbar />

      <main className="contacto-content">
        <h2>¿Tienes alguna consulta?</h2>
        <p>Estamos aquí para ayudarte. Puedes escribirnos directamente por Telegram.</p>
        <button className="btn-telegram" onClick={handleTelegramClick}>
          💬 Contactar por Telegram
        </button>
      </main>

      <Footer />
    </div>
  );
}
