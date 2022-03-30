const ratings = document.querySelectorAll('.rating'); //Numbers
const result = document.querySelector('.count'); //Phrase
const submit = document.querySelector('.submit'); //Submit button
const star = document.querySelector('.star'); 
const title = document.querySelector('.title_description');
const ratingBox = document.querySelector('.rating_box');
const submitBox = document.querySelector('.submit_box');
const ilustration = document.querySelector('.ilustration');
const thanks = document.querySelector('.thanks');

let ratingId = '';

function removeClass (){ 
    ratings.forEach(rating => {
        if(rating.classList.contains('active')){
            rating.classList.remove('active');
        }
    });
}

ratings.forEach( rating => {
    rating.addEventListener('click', (e) =>{
        removeClass();
        e.preventDefault();
        if(rating.classList.contains('active')){
            rating.classList.remove('active')
        }else{
            rating.classList.add('active');
            ratingId = rating.id;
        }
    })

})

submit.addEventListener('click', (e) => {
    ratings.forEach(rating => {
        if(rating.classList.contains('active') && rating.id === ratingId){
            e.preventDefault();
            star.style.display = 'none';
            title.style.display = 'none';
            ratingBox.style.display = 'none';
            submitBox.style.display = 'none';
            result.innerHTML = ` You selected ${ratingId} out of 5 `;
            ilustration.style.display = 'flex';
            result.style.display = 'flex';
            thanks.style.display = 'flex';
        }
    })

});