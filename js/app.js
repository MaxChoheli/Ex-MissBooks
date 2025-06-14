const Router = ReactRouterDOM.HashRouter
const { Routes, Route, NavLink } = ReactRouterDOM

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RootCmp />)

function RootCmp() {
    return (
        <Router>
            <section className="app">
                <header>
                    <h1>Miss Books</h1>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/book">Books</NavLink>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/book" element={<BookIndex />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}
