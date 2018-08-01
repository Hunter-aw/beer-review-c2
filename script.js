const COUNTRIES = []
let MYLIST = $('.country-list')
 

function addCountry (country, review){
    let newEntry = {
        myCountry: country,
        myReview: review
    }
    COUNTRIES.push(newEntry)
}

function renderCountries () {
    MYLIST.empty();
    for (entry of COUNTRIES) {
        MYLIST.append('<l1 class = "list-group-item fa fa-globe-americas">&nbsp' + entry.myCountry + ': </li><br><br><span class ="font-weight-light">' + entry.myReview + '</span><br>')
    }
}

const clickPost = function() {
    let countryName = $('.country-input').val();
    let reviewName = $('.review-input').val();
    addCountry(countryName, reviewName)
    renderCountries()
}


$('.post-country').click(clickPost);


$(document).ready(function(){
    $('.country-form').keypress(function(e){
      if(e.keyCode==13)
      $('.post-country').click();
    });
});

