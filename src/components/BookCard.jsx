import "../styles/BookCard.css";

export function BookCard({ title, author, description, image }) {
  return (
    <div className="book-card">
      <img src={image} alt={`Portada de ${title}`} />
      <h3>{title}</h3>
      <p><strong>{author}</strong></p>
      <p>{description}</p>
    </div>
  );
}
