function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h3>{book.title}</h3>
            <p>
                Price: {book.listPrice.amount} {book.listPrice.currencyCode}
            </p>
        </article>
    )
}

function BookList({ books }) {
    return (
        <ul className="book-list">
            {books.map(book => (
                <li key={book.id}>
                    <BookPreview book={book} />
                </li>
            ))}
        </ul>
    )
}

function BookIndex() {
    const [books, setBooks] = React.useState([])

    React.useEffect(() => {
        bookService.query().then(setBooks)
    }, [])

    return (
        <section className="book-index">
            <BookList books={books} />
        </section>
    )
}
