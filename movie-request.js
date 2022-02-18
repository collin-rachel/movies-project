"use strict";

const url = 'https://malachite-holistic-grey.glitch.me/movies'

// Get All Movies

function allMovies() {
    fetch(url)
        .then(resolve => resolve.json()).then(data => console.log(data))
        .catch(error => console.log(error))
}

console.log(allMovies())

// Add a Movie

function addMovie() {
    const addingMovie = {
        title: '',
        director: ''
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addingMovie),
    };
    fetch(`${url}`, options)
        .then(resolve => {
            console.log('Movie has been created')
        })
        .catch(error => console.log(error))
}

// Delete Movies

function deleteMovies(id) {
    const options = {
        method: 'DELETE'
    }
    fetch(`${url}/${id}`, options)
        .then(resolve => {
            console.log('Movie has been deleted')
        })
        .catch(error => console.log(error))
}
