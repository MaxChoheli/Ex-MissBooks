const { useEffect, useState } = React

function BookIndex() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        bookService.query().then(setBooks)
    }, [])

    return (
        <section>
            <h2>Book Index</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} - {book.listPrice.amount} {book.listPrice.currencyCode}
                    </li>
                ))}
            </ul>
        </section>
    )
}
