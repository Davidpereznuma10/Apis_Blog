const allTabsBody = document.querySelectorAll ('.tab-body-single');
const allTabsHead = document.querySelectorAll('.tab-head-single');
const searchForm = document.querySelector('.app-header-search');
const loader = document.querySelector("#loader");
const video = document.querySelector("#video");

// VIDEO FUNCTION
video.src = 'styles/img/logo_horizontal.mp4';
video.play();
video.addEventListener('ended',(e)=>{
 loader.style.display='none';
})

let searchList = document.querySelector('#search-list');
let activeTab = 1, allData;

const init = (e) =>{
    showActiveTabHead();
    showActiveTabBody();
}
const showActiveTabHead = (e) => allTabsHead[activeTab-1].classList.add('active-tab');

const showActiveTabBody = (e) =>{
    hideAllTabBody();
    allTabsBody[activeTab-1].classList.add('show-tab')
}
const hideAllTabBody = (e) => allTabsBody.forEach(singleTabBody=>singleTabBody.classList.remove('show-tab'));
const hideAllTabHead = (e) => allTabsHead.forEach(singleTabHead=>singleTabHead.classList.remove('active-tab'));

// ACTIVE TAB EVENT
window.addEventListener('DOMContentLoaded', (e) => init());
// BUTTON EVEN LISTENER
allTabsHead.forEach(singleTabHead=>{
    singleTabHead.addEventListener('click', (e)=>{
        hideAllTabHead();
        activeTab = singleTabHead.dataset.id;
        showActiveTabHead();
        showActiveTabBody();
    });
});
// INPUT THE SUPER HERE AND SEARCH INTO THE API
const getInputValue = (e) => {
    e.preventDefault();
    let searchText = searchForm.search.value;
    fetchAllSuperHero(searchText);
};
// SEARCH FORM SUBMISSION
searchForm.addEventListener('submit',getInputValue);
// API KEY => 954287028916505
const fetchAllSuperHero = async(searchText) =>{
    let url = `https://www.superheroapi.com/api.php/954287028916505/search/${searchText}`;
    try{
        const response = await fetch(url);
        allData = await response.json();
        if(allData.response === 'success'){
            showSearchList(allData.results);
        };
    } catch(error){
        console.log(error);};
};
// CONSUME API TO SHOW THE NAME AND IMG; CREATED A NEW ELEMENT
const showSearchList = (data) => {
    searchList.innerHTML = "";
    data.forEach(dataItem => {
        const divElem = document.createElement('div');
        divElem.classList.add('search-list-item');
        divElem.innerHTML = `
            <img src="${dataItem.image.url ? dataItem.image.url : ""}" alt="">
            <p data-id = "${dataItem.id}">${dataItem.name}</p> `;
            searchList.appendChild(divElem)
    });
};
// MAKE THE SEARCH START SINCE 1 LETTER
searchForm.search.addEventListener('keyup',(e)=>{
    if(searchForm.search.value.length > 1){
        fetchAllSuperHero(searchForm.search.value)
    }else{
        searchList.innerHTML = "";
    };
});
// MAKE THAT JUST PRINT THE SUPERHERO SELECTED
searchList.addEventListener('click', (e)=>{
   let searchId = e.target.dataset.id; 
   let singleData = allData.results.filter(singleData=>{
    return searchId === singleData.id;
   });
   showSuperHeroDetails(singleData);
   searchList.innerHTML = "";
});
// PRINT INTO THE HTML ALL THE NEW ELEMENTS
const showSuperHeroDetails = (data) => {
    console.log(data);
    document.querySelector('.app-body-content-thumbnail').innerHTML =`
     <img src="${data[0].image.url}" alt="">`

document.querySelector('.name').textContent = data[0].name;
document.querySelector('.powerstats').innerHTML = `
    <li>
    <div>
        <i class ="fa-solid fa-shield-halved"></i>
        <span>Inteligence</span>
    </div>
    <span>${data[0].powerstats.intelligence}</span>
    </li>
    <li>
    <div>
        <i class ="fa-solid fa-shield-halved"></i>
        <span>Strength</span>
    </div>
    <span>${data[0].powerstats.strength}</span>
    </li>
    <li>
    <div>
        <i class ="fa-solid fa-shield-halved"></i>
        <span>Speed</span>
    </div>
    <span>${data[0].powerstats.speed}</span>
    </li>
    <li>
    <div>
        <i class ="fa fa-shield-alt"></i>
        <span>Durability</span>
    </div>
    <span>${data[0].powerstats.durability}</span>
    </li>
    <li>
    <div>
        <i class ="fa-solid fa-shield-halved"></i>
        <span>Power</span>
    </div>
    <span>${data[0].powerstats.power}</span>
    </li>
    <li>
    <div>
        <i class ="fa-solid fa-shield-halved"></i>
        <span>Combat</span>
    </div>
    <span>${data[0].powerstats.combat}</span>
    </li>
`
document.querySelector('.biography').innerHTML = `
    <li>
        <span>Full Name</span>
        <span>${data[0].biography['full-name']}</span>
    </li>
    <li>
        <span>Alter Egos</span>
        <span>${data[0].biography['alter-egos']}</span>
    </li>
    <li>
        <span>Aliase</span>
        <span>${data[0].biography['aliases']}</span>
    </li>
    <li>
        <span>Place Of Birth</span>
        <span>${data[0].biography['place-of-birth']}</span>
    </li>
    <li>
        <span>First Appearence</span>
        <span>${data[0].biography['first-appearance']}</span>
    </li>
    <li>
        <span>Publisher</span>
        <span>${data[0].biography['publisher']}</span>
    </li>
`;
document.querySelector('.appearance'). innerHTML = `
    <li>
        <span>
            <i class="fas fa-star"></i>Race
        </span>
        <span>${data[0].appearance['race']}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>Gender
        </span>
        <span>${data[0].appearance['gender']}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>Height
        </span>
        <span>${data[0].appearance['height']}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>Weight                                
        </span>
        <span>${data[0].appearance['weight']}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>Eyes Color
        </span>
        <span>${data[0].appearance['eye-color']}</span>
    </li>
    <li>
        <span>
            <i class="fas fa-star"></i>Hair Color
        </span>
        <span>${data[0].appearance['hair-color']}</span>
    </li>
`;
document.querySelector('.connections').innerHTML=`
    <li>
        <span>Group Affiliation</span>
        <span>${data[0].connections['group-affiliation']}</span>
    </li>
    <li>
        <span>Relatives</span>
        <span>${data[0].connections['relatives']}</span>
    </li>
`
};
