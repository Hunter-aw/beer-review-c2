const COUNTRIES = []
let MYLIST = $('.country-list')
 

function addCountry (country, review, rating){
    let newEntry = {
        myCountry: country,
        myReview: review,
        myRating: rating
    }
    COUNTRIES.push(newEntry)
}

function renderCountries () {
    MYLIST.empty();
    for (entry of COUNTRIES) {
        MYLIST.append('<l1 class = "list-group-item fa fa-globe-americas">&nbsp' + entry.myCountry + ': </li><br><br><span class ="font-weight-light">' + entry.myReview + '</span><br><br><li>' + entry.myRating + ' Stars </li>')
    }
}

const clickPost = function() {
    let countryName = $('.country-input').val();
    let reviewName = $('.review-input').val();
    let ratingStar = $('.rating-input').val(); 
    addCountry(countryName, reviewName, ratingStar)
    renderCountries()
}

const positiveSortPost = function() {
    COUNTRIES.sort(function(a, b) {
        return a.myRating - b.myRating;
    })
    renderCountries()
    $(this).one("click", negativeSortPost);
}

const negativeSortPost = function() {
    COUNTRIES.sort(function(a, b) {
        return -(a.myRating - b.myRating);
    })
    renderCountries()
    $(this).one("click", positiveSortPost);
}

$(".sort-country").one("click", positiveSortPost);

// const clickSort = function(){
//     $('.sort-country').toggle(positiveSortPost(), negativeSortPost());
// }

$(document).ready(function(){
    $('.country-form').keypress(function(e){
      if(e.keyCode==13)
      $('.post-country').click();
    });
});

