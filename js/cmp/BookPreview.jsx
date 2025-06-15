function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <img src={book.imgUrl} alt={book.title} style={{ width: '120px' }} />
            <h3>{book.title}</h3>
            <p>
                Price: {book.listPrice.amount} {book.listPrice.currencyCode}
            </p>
        </article>
    )
}
