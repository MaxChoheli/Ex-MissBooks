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
    const [filterBy, setFilterBy] = React.useState('')

    React.useEffect(() => {
        bookService.query().then(setBooks)
    }, [])

    function onSetFilter(ev) {
        setFilterBy(ev.target.value)
    }

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(filterBy.toLowerCase())
    )

    return (
        <section className="book-index">
            <h2>Book Index</h2>
            <input
                type="text"
                placeholder="Search by title"
                value={filterBy}
                onChange={onSetFilter}
            />
            <BookList books={filteredBooks} />
        </section>
    )
}
