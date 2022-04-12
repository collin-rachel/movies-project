"use strict";

// const url = 'https://malachite-holistic-grey.glitch.me/movies'
const url = 'http://localhost:8080//movies'

//function calls
allMovies()
$(document).ready(function () {
    // open_curtain()
});

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
                    <div class="card" id="cards" style="width: 12rem;">
                        <img src="${data[i].poster}" class="card-img-top" alt="...">
                        <div class="card-body" id="card-body">
                            <h5 class="card-title">${data[i].title}</h5>
                            <p class="card-text" id="plot-box"> ${data[i].plot}</p>
                        </div>
                        <ul class="list-group list-group-flush" id="list">
                            <li class="list-group-item" id="list-group-item">${data[i].rating}/5</li>
                            <li class="list-group-item" id="list-group-item">${data[i].year}</li>
                            <li class="list-group-item" id="list-group-item">${data[i].genre}</li>
                        </ul>
                        
                        <button type="button" data-id="${data[i].id}"onclick="deleteMovies(${data[i].id})" id="card-btns"  ><i class="fas fa-trash"></i></button>
                        <button type="button" data-id="${data[i].id}" class="btn edit-btn" data-toggle="modal" id="card-btns" data-target="#exampleModal"><i class="fas fa-pencil-alt" ></i></button>
                        
<!--                    <input id="edit-movie" type="button" value="edit" data-bs-toggle="modal" data-bs-target="#exampleModal">-->
<!--                    <input id="delete-movie" type="button" value="delete" onclick="deleteMovies()">-->
                            
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
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(addingMovie),
    };
    fetch(`${url}`, options)
        .then(resolve => resolve.json()
            .then(data => {
                console.log(data)
                allMovies()
            }));

}

// TODO Delete Movies

function deleteMovies(id) {
    const options = {
        method: 'DELETE'
    }
    fetch(`${url}/${id}`, options)
        .then(resolve => resolve.json()
            .then(data => {
                console.log(data)
                allMovies()
            }));

}


// TODO Update a movie

function updateMovie(id) {
    const updatingMovie = {
        title: $('#edit-title').val(),
        rating: $('#edit-rating-score').val(),
        year: $('#edit-year').val(),
        genre: $('#edit-genre').val(),

    }
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(updatingMovie),
    }
    fetch(`${url}/${id}`, options)
        .then(resolve => resolve.json()
            .then(data => {
                $('#exampleModal').modal('hide');
                console.log('try to hide modal')
                console.log(data)
                allMovies()
            }));

}


//event listeners
$('#submit').click(function () {
    addMovie()

})

// $('#card-btns').click(function (){
//     console.log("hello")
// });

$(document).on('click', '.edit-btn', function () {
    console.log($(this).attr('data-id'))
    $('#save-changes').attr('data-id', $(this).attr('data-id'))
})

$('#save-changes').click(function () {
    updateMovie($(this).attr('data-id'))
})





