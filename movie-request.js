"use strict";

const url = 'https://malachite-holistic-grey.glitch.me/movies'

<<<<<<< HEAD
    //function calls
    allMovies()






=======
//function calls
allMovies()
>>>>>>> d1ee54518b637770c4dad7c67691988ad8d42354


// Gets All Movies

function allMovies() {
    fetch(url)
        .then(resolve => resolve.json())
        .then(data => {
            console.log(data)
            console.log(data[1].id.title)
            for (let i = 0; i < data.length; i++) {

                let html = ''
                html += `
                    <div class="card" style="width: 18rem;">
                        <img src="${data[i].poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data[i].title}</h5>
                            <p class="card-text"> ${data[i].plot}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">5/${data[i].rating}</li>
                            <li class="list-group-item">${data[i].year}</li>
                            <li class="list-group-item">${data[i].genre}</li>
                        </ul>
<<<<<<< HEAD
                        <input id="delete-movie" type="button" value="delete movie">
=======
                        <input id="delete-movie" type="button" value="Delete" onclick="deleteMovies(id)">
>>>>>>> d1ee54518b637770c4dad7c67691988ad8d42354
                    </div>
        
                `

                $('#all-movies').append(html)
            }
        })
        .catch(error => console.log(error))
}

//Call the function
function callFunctions() {
    let data = [];
    fetch(url)
        .then(response => response.json())
        .then(response => {
            data = response;
            console.log(data);
            deleteMovies();

        });
}

// TODO Adds a Movie

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

// TODO Delete Movies
const deleteMovie = (id) => fetch(`${url}/${id}`, {
    method: 'DELETE',

})
    .then(resolve => resolve.json()
    ).then(data => {
        callFunctions()
        console.log(data);
    }).catch(error => console.log(error));



function deleteMovies(id) {
    $("body").on("click", ".delete", function () {
        deleteMovie($(this).parent().children().id()[0].innerText).then();
        $(this).parent().remove();
    });
}

// TODO Update a movie

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

