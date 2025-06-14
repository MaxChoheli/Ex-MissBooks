const BOOK_KEY = 'bookDB'
_createBooks()

var bookService = {
    query,
}

function query() {
    return storageService.query(BOOK_KEY)
}

function _createBooks() {
    let books = JSON.parse(localStorage.getItem(BOOK_KEY))
    if (!books || !books.length) {
        books = [
            {
                id: 'b101',
                title: 'React Essentials',
                listPrice: { amount: 120, currencyCode: 'USD', isOnSale: false },
            },
            {
                id: 'b102',
                title: 'Vue for Beginners',
                listPrice: { amount: 85, currencyCode: 'EUR', isOnSale: true },
            },
            {
                id: 'b103',
                title: 'Mastering Angular',
                listPrice: { amount: 200, currencyCode: 'USD', isOnSale: false },
            },
        ]
        localStorage.setItem(BOOK_KEY, JSON.stringify(books))
    }
}
