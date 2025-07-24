import "../styles/BookCard.css";

export function BookCard({ title, author, description, image }) {
    const getIframeUrl = (url) => {
        const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
        return match
            ? `https://drive.google.com/file/d/${match[1]}/preview`
            : url;
    };
    return (
        <div className="book-card">
        <iframe
        src={getIframeUrl(image)}
        width="250"
        height="350"
        allow="autoplay"
        loading="lazy"
        style={{ border: "none", borderRadius: "8px" }}
        title={title}
        />        
        <h3>{title}</h3>
        <p><strong>{author}</strong></p>
        <p>{description}</p>
        </div>
    );
}
