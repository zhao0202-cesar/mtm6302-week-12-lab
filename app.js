// Local component
const Books = {
    data: function (){
        return {
            books: []
        }
    },
    created: function () {
        fetch('https://seussology.info/api/books')
          .then(response => response.json())
          .then(books => { this.books = books })
      },
    template:  `
        <header class="container-fluid row bg-light py-5">
            <div class="row">
                <div class="col">
                    <h1 class="display-2">Books</h1>
                </div>
            </div>
        </header>
        <section class="container py-5">
            <article class="row">
                <div class="col-3" v-for="book in books">
                    <div class="card mb-3">
                            <div class="card-body">
                                <router-link :to="'/book/' + book.id">
                                    <img :src="'http://seussology.info/images/book-covers/' + book.id + '.jpg'" style="width:100%; height: auto">
                                </router-link>
                            </div>
                    </div>
                </div>
            </article>
        </section>
    `
}

const Quotes = {
    data: function (){
        return {
            quotes: []
        }
    },
    created: function () {
        fetch('https://seussology.info/api/quotes/random/10')
          .then(response => response.json())
          .then(quotes => { this.quotes = quotes })
      },
    template: `
        <header class="container-fluid row bg-light py-5">
            <div class="row">
                <div class="col">
                    <h1 class="display-2">Quotes</h1>
                </div>
            </div>
        </header>
        <section class="container py-5">
            <article class="row">
                <div class="col-6" v-for="quote in quotes">
                    <div class="card mb-3">
                        <div>
                            <div class="card-body">
                                <h5 class="card-title">{{ quote.text }}</h5>
                                <p class="card-text">– Dr. Seuss in {{ quote.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    `
}

const Book = {
    props: ['id'],
    data: function(){
        return {
            book: {}
        }
    },
    created: function (){
        fetch('https://seussology.info/api/books/' + this.id)
        .then(response => response.json())
        .then(book => { this.book = book })
    },
    template: `
        <header class="container-fluid row bg-light py-5">
            <div class="row">
                <div class="col">
                    <h1 class="display-2" style="text-align: center">Seuss Treasury</h1>
                </div>
            </div>
        </header>
        <section class="row">
            <div class="col-sm-4" style="margin-left: 3em">
                <img :src="'http://seussology.info/images/book-covers/' + book.id + '.jpg'"  style="width:100%; height: auto">
            </div>

            <div class="col-sm-6" style="margin: auto">
                <h5 class="card-title">{{ book.title_sort }}</h5>
                <p class="card-text">{{ book.description }}</p>
            </div>

        </section>
    `
}

// Routes
const routes = [
    { path: '/', component: Books },
    { path: '/quotes', component: Quotes },
    { path: '/book/:id', component: Book, props: true }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes
})

const app = Vue.createApp({
    data: function () {
      return {
        activePage: 'books',
        book: {},
        books: [],
        quotes: []
      }
    },
    
    methods: {
      setPage: function (page, id) {
        this.activePage = page
  
        if (page === 'book') {
          
        }
      }
    }
})

app.use(router)

const vm = app.mount('#app')
  