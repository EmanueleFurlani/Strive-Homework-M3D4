        



 let books = []

        const row = document.querySelector('.row')


        window.onload = () => {
            fetch("https://striveschool-api.herokuapp.com/books")
                .then(response => response.json())
                .then(receivedBooks => {
                    books = receivedBooks
                    displayBooks(receivedBooks)
                    console.log(receivedBooks)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        function filterBooks(query) {
            const filteredBooks = books.filter(book =>
                book.title.toLowerCase().includes(query.toLowerCase())
            )
            displayBooks(filteredBooks)
        }

        function displayBooks(books) {
            row.innerHTML = books.map(book => `
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <img src="${book.img}" class="card-img-top" style="height:250px" />
                        <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">
                            ${book.price}
                        </p>
                        <a href="#" class="btn btn-primary" style="margin-bottom:3px">add to cart button</a>
                         <a href="#" class="btn btn-primary">skip</a>
                        </div>
                    </div>
                    </div>
            `).join("")
        } 

        /* function displayBooks(books) {
           books.forEach(book => row.innerHTML +=` 
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <img src="${book.img}" class="card-img-top" style="height:250px" />
                        <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p id="pColor"class="card-text">
                            ${book.price}
                        </p>
                        <a href="#" class="btn btn-primary" style="margin-bottom:3px">add to cart button</a>
                        <a href="#" class="btn btn-primary">skip</a>
                        </div>
                    </div>
                    </div>
            `)
        } */

        /*function colorBg() {
         const cards = document.getElementsByClassName("card-body");
         for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("colorBg");
          }}*/


        const cards = document.getElementsByClassName("card");
        for (let i = 0; i < cards.length; i++) {
        cards[i]
          .querySelector(".btn.btn-primary")
          .addEventListener("click", function (e) {
            e.currentTarget.closest(".card").classList.add("border-danger");
          });
        }