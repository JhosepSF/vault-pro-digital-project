import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { BookCard } from "../../components/BookCard";
import "../../styles/Panel.css";

export function PanelPrincipal() {
  const books = [
    {
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      description: "Una obra maestra del realismo mágico.",
      image: "/books/cienanos.jpg"
    },
    {
      title: "Rayuela",
      author: "Julio Cortázar",
      description: "Una novela que rompe con la narrativa tradicional.",
      image: "/books/rayuela.jpg"
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "Una distopía política que te hará reflexionar.",
      image: "/books/1984.jpg"
    }
  ];

  return (
    <div className="app-container">
      <Navbar />

      <main className="home">
        <h2>📚 Catálogo de Libros</h2>
        <div className="book-grid">
          {books.map((book, idx) => (
            <BookCard key={idx} {...book} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
