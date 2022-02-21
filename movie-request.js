"use strict";

const url = 'https://malachite-holistic-grey.glitch.me/movies'


// Gets All Movies

function allMovies() {
    fetch(url)
        .then(resolve => resolve.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

console.log(allMovies())

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
allMovie()
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
        year : '',
        genre : '',

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