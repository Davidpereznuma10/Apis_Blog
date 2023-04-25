const allTabsBody = document.querySelectorAll ('.tab-body-single');
const allTabsHead = document.querySelectorAll('.tab-head-single');

let activeTab = 1;

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
})