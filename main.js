const allTabsBody = document.querySelectorAll ('.tab-body-single');
const allTabsHead = document.querySelectorAll('.tab-head-single');

let activeTab = 1;

const init = () =>{
    showActiveTabHead();
    showActiveTabBody();
}
const showActiveTabHead = ()=> allTabsHead[activeTab-1].classList.add('active-tab')

const showActiveTabBody = ()=>{
    hideAllTabBody();
    allTabsBody[activeTab-1].classList.add('show-tab')
}
const hideAllTabBody = ()=> allTabsBody.forEach(singleTabBody=>singleTabBody.classList.remove('show-tab'));
const hideAllTabHead = ()=> allTabsHead.forEach(singleTabHead=>singleTabHead.classList.remove('active-tab'));

// ACTIVE TAB EVENT
window.addEventListener('DOMContentLoaded', ()=> init());
// BUTTON EVEN LISTENER
allTabsHead.forEach(singleTabHead=>{
    singleTabHead.addEventListener('click', ()=>{
        hideAllTabHead();
        activeTab = singleTabHead.dataset.id;
        showActiveTabHead();
        showActiveTabBody();
    });
})