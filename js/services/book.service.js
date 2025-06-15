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
                title: 'The Great Escape',
                subtitle: 'A journey of freedom',
                authors: ['John Smith'],
                publishedDate: 1991,
                description: 'A gripping tale of escape and survival.',
                pageCount: 321,
                categories: ['Fiction'],
                thumbnail: 'BooksImages/1.jpg',
                language: 'en',
                listPrice: { amount: 120, currencyCode: 'USD', isOnSale: false }
            },
            {
                id: 'b102',
                title: 'Poetry in Motion',
                subtitle: 'Verse through time',
                authors: ['Emily Stone'],
                publishedDate: 2005,
                description: 'A collection of timeless poetry.',
                pageCount: 98,
                categories: ['Poetry'],
                thumbnail: 'BooksImages/2.jpg',
                language: 'en',
                listPrice: { amount: 85, currencyCode: 'EUR', isOnSale: true }
            },
            {
                id: 'b103',
                title: 'Angular Mastery',
                subtitle: 'Modern web apps',
                authors: ['Jane Doe'],
                publishedDate: 2020,
                description: 'Learn Angular from beginner to expert.',
                pageCount: 415,
                categories: ['Computers'],
                thumbnail: 'BooksImages/3.jpg',
                language: 'en',
                listPrice: { amount: 200, currencyCode: 'USD', isOnSale: false }
            },
            {
                id: 'b104',
                title: 'Love in Paris',
                subtitle: 'A romantic tale',
                authors: ['Nina Heart'],
                publishedDate: 2015,
                description: 'A heartfelt love story set in Paris.',
                pageCount: 250,
                categories: ['Love'],
                thumbnail: 'BooksImages/4.jpg',
                language: 'en',
                listPrice: { amount: 99, currencyCode: 'USD', isOnSale: true }
            },
            {
                id: 'b105',
                title: 'The Debugging Life',
                subtitle: 'Fixing bugs and people',
                authors: ['Dev McCode'],
                publishedDate: 2018,
                description: 'Lessons from the life of a programmer.',
                pageCount: 188,
                categories: ['Computers'],
                thumbnail: 'BooksImages/5.jpg',
                language: 'en',
                listPrice: { amount: 149, currencyCode: 'EUR', isOnSale: false }
            },
            {
                id: 'b106',
                title: 'Hack the Planet',
                subtitle: 'Cyber warfare & you',
                authors: ['Zero Cool'],
                publishedDate: 2011,
                description: 'A technical dive into ethical hacking.',
                pageCount: 360,
                categories: ['Hack'],
                thumbnail: 'BooksImages/6.jpg',
                language: 'en',
                listPrice: { amount: 210, currencyCode: 'USD', isOnSale: true }
            },
            {
                id: 'b107',
                title: 'The Last Prophet',
                subtitle: 'Vision of the future',
                authors: ['Ali Reza'],
                publishedDate: 1997,
                description: 'A religious vision in a fictional world.',
                pageCount: 290,
                categories: ['Religion'],
                thumbnail: 'BooksImages/7.jpg',
                language: 'en',
                listPrice: { amount: 130, currencyCode: 'USD', isOnSale: false }
            },
            {
                id: 'b108',
                title: 'Code of Love',
                subtitle: 'Romance for geeks',
                authors: ['Anna Chip'],
                publishedDate: 2021,
                description: 'A humorous love story among coders.',
                pageCount: 205,
                categories: ['Love', 'Computers'],
                thumbnail: 'BooksImages/8.jpg',
                language: 'en',
                listPrice: { amount: 110, currencyCode: 'EUR', isOnSale: true }
            },
            {
                id: 'b109',
                title: 'Faith & Fire',
                subtitle: 'The test of belief',
                authors: ['Noah Flame'],
                publishedDate: 1988,
                description: 'A gripping tale of sacrifice and devotion.',
                pageCount: 330,
                categories: ['Religion'],
                thumbnail: 'BooksImages/9.jpg',
                language: 'en',
                listPrice: { amount: 175, currencyCode: 'USD', isOnSale: false }
            },
            {
                id: 'b110',
                title: 'Fiction Factory',
                subtitle: 'The anatomy of story',
                authors: ['Plot Devices'],
                publishedDate: 2010,
                description: 'An analytical take on fiction writing.',
                pageCount: 260,
                categories: ['Fiction'],
                thumbnail: 'BooksImages/10.jpg',
                language: 'en',
                listPrice: { amount: 95, currencyCode: 'USD', isOnSale: true }
            },
            {
                id: 'b111',
                title: 'Techno Future',
                subtitle: 'Visions of AI',
                authors: ['Cortana Sky'],
                publishedDate: 2022,
                description: 'Where AI is heading in the next decades.',
                pageCount: 340,
                categories: ['Computers'],
                thumbnail: 'BooksImages/11.jpg',
                language: 'en',
                listPrice: { amount: 180, currencyCode: 'EUR', isOnSale: false }
            },
            {
                id: 'b112',
                title: 'Hidden Verse',
                subtitle: 'Poems of the underground',
                authors: ['Slam King'],
                publishedDate: 2003,
                description: 'Modern urban poetry from unseen voices.',
                pageCount: 150,
                categories: ['Poetry'],
                thumbnail: 'BooksImages/12.jpg',
                language: 'en',
                listPrice: { amount: 70, currencyCode: 'USD', isOnSale: false }
            },
            {
                id: 'b113',
                title: 'Hope Rewritten',
                subtitle: 'Uplifting tales',
                authors: ['Tali Bright'],
                publishedDate: 2017,
                description: 'Stories of overcoming hardship.',
                pageCount: 320,
                categories: ['Fiction'],
                thumbnail: 'BooksImages/13.jpg',
                language: 'en',
                listPrice: { amount: 160, currencyCode: 'EUR', isOnSale: true }
            },
            {
                id: 'b114',
                title: 'Terminal Devotion',
                subtitle: 'Faith in the matrix',
                authors: ['Neo Prophet'],
                publishedDate: 2012,
                description: 'When belief meets code.',
                pageCount: 278,
                categories: ['Religion', 'Computers'],
                thumbnail: 'BooksImages/14.jpg',
                language: 'en',
                listPrice: { amount: 140, currencyCode: 'USD', isOnSale: true }
            },
            {
                id: 'b115',
                title: 'E-Love Letters',
                subtitle: 'Email romance',
                authors: ['Beta Juliet'],
                publishedDate: 2019,
                description: 'A novel told through emails.',
                pageCount: 230,
                categories: ['Love'],
                thumbnail: 'BooksImages/15.jpg',
                language: 'en',
                listPrice: { amount: 125, currencyCode: 'USD', isOnSale: false }
            },
            {
                id: 'b116',
                title: 'The God Loop',
                subtitle: 'Infinite prophecy',
                authors: ['Reverend Recursion'],
                publishedDate: 1994,
                description: 'Faith, code, and infinity collide.',
                pageCount: 370,
                categories: ['Religion'],
                thumbnail: 'BooksImages/16.jpg',
                language: 'en',
                listPrice: { amount: 190, currencyCode: 'EUR', isOnSale: true }
            },
            {
                id: 'b117',
                title: 'Love.exe',
                subtitle: 'Code meets soul',
                authors: ['Heartbyte'],
                publishedDate: 2020,
                description: 'Exploring digital intimacy.',
                pageCount: 210,
                categories: ['Love', 'Computers'],
                thumbnail: 'BooksImages/17.jpg',
                language: 'en',
                listPrice: { amount: 145, currencyCode: 'USD', isOnSale: false }
            },
            {
                id: 'b118',
                title: 'The Fiction Paradox',
                subtitle: 'Writing reality',
                authors: ['L. Lies'],
                publishedDate: 2016,
                description: 'Can fiction become real?',
                pageCount: 275,
                categories: ['Fiction'],
                thumbnail: 'BooksImages/18.jpg',
                language: 'en',
                listPrice: { amount: 115, currencyCode: 'USD', isOnSale: true }
            },
            {
                id: 'b119',
                title: 'Faith Rendered',
                subtitle: 'Religion in 3D',
                authors: ['D. Shader'],
                publishedDate: 2013,
                description: 'Visualizing belief systems.',
                pageCount: 300,
                categories: ['Religion'],
                thumbnail: 'BooksImages/19.jpg',
                language: 'en',
                listPrice: { amount: 170, currencyCode: 'EUR', isOnSale: false }
            },
            {
                id: 'b120',
                title: 'CTRL + Love',
                subtitle: 'A shortcut to romance',
                authors: ['Keya Love'],
                publishedDate: 2021,
                description: 'Romance in the digital age.',
                pageCount: 220,
                categories: ['Love'],
                thumbnail: 'BooksImages/20.jpg',
                language: 'en',
                listPrice: { amount: 135, currencyCode: 'USD', isOnSale: true }
            },
        ]

        localStorage.setItem(BOOK_KEY, JSON.stringify(books))
    }
}
