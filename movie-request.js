"use strict";

const url = 'https://malachite-holistic-grey.glitch.me/movies'

//function calls
allMovies()


// Gets All Movies

function allMovies() {


    fetch(url)
        .then(resolve => resolve.json())
        .then(data => {
            console.log(data)
            $('#all-movies').empty()
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
                        <input id="delete-movie" type="button" value="Delete" onclick="deleteMovies(${data[i].id})">
                    </div>
        
                `

                $('#all-movies').append(html)

            }
        })
        .catch(error => console.log(error))
}



// TODO Adds a Movie

function addMovie() {
    const addingMovie = {
        title: $('#title').val(),
        year: $('#year').val(),
        rating: $('#rating-score').val(),
        genre: $('#genre').val()
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
        allMovies()
}

// TODO Delete Movies

function deleteMovies(id) {
    const options = {
        method: 'DELETE'
    }
    fetch(`${url}/${id}`, options)
        .then(resolve => resolve.json()
            .then(data => {console.log(data)
                allMovies()
            }));

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



//event listeners
    $('#submit').click(function (){
        addMovie()
    })
