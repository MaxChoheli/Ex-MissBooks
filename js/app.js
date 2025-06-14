const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RootCmp />)

function RootCmp() {
    return (
        <section className="app">
            <h1>Miss Books</h1>
            <BookIndex />
        </section>
    )
}
