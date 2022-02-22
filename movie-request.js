"use strict";

const url = 'https://malachite-holistic-grey.glitch.me/movies'

    //function calls
    allMovies()








// Gets All Movies

function allMovies() {
    fetch(url)
        .then(resolve => resolve.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                let title = data[i].id.title
                let director = data[i].id.director
                let year = data[i].id.year
                let genre = data[i].id.genre
                let actors = data[i].id.actors
                let plot = data[i].id.plot
                let rating = data[i].id.rating
                let poster = data[i].id.poster


                let html = ''
                html += `
                    <div class="card" style="width: 18rem;">
<!--                        <img src="..." class="card-img-top" alt="...">-->
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text"> ${plot}.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${title}</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
<!--                        <div class="card-body">-->
<!--                            <a href="#" class="card-link">Card link</a>-->
<!--                            <a href="#" class="card-link">Another link</a>-->
<!--                        </div>-->
                    </div>
                    
                `

                $('#all-movies').append(html)
            }
        })
        .catch(error => console.log(error))
}



// Adds a Movie

function addMovie() {
    const addingMovie = {
        title: '',
        rating: $('#rating-score').val(),
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addingMovie),
    };
    fetch(`${url}`, options)
        .then(resolve => resolve.json()
            .then(data => console.log(data)));
}

// Delete Movies

function deleteMovies(id) {
    const options = {
        method: 'DELETE'
    }
    fetch(`${url}/${id}`, options)
        .then(resolve => resolve.json()
            .then(data => console.log(data)));

}


// Update a movie

function updateMovie(id) {
    const updatingMovie = {
        title: '',
        rating: '',
        year: '',
        genre: '',

    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatingMovie),
    }
    fetch(`${url}/${id}`, options)
        .then(resolve => resolve.json()
            .then(data => console.log(data)));
}


// // puts movies on page
//     function getMovies() {
//
//     $.get(url)
//         .done(function (data) {
//             console.log(data);
//
//             for (let i = 0; i < ; i++) {
//                 var actors = data[1].actors
//                 var director = data.director[i]
//                 console.log(actors)
//             }
//         })
//     }
//

