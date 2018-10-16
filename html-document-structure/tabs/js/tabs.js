const articles = document.querySelector('.tabs-content').children;
const tabsNav = document.querySelector('.tabs-nav');

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
    let firstTab = document.querySelector('.tabs-nav li');
    tabsNav.removeChild(firstTab);
    for (let i = 0; i < articles.length; i++){
        let newTab = firstTab.cloneNode(true);
        newTab.firstElementChild.text = articles[i].dataset.tabTitle;
        newTab.firstElementChild.classList.add(articles[i].dataset.tabIcon);
        if (i === 0){
            newTab.classList.add('ui-tabs-active');
        } else {
            articles[i].classList.add('hidden');
        }
        tabsNav.appendChild(newTab);
    }
}

tabsNav.addEventListener('click', changeTabs);

function changeTabs(event){
    let currentTab = event.target;
    document.querySelector('.ui-tabs-active').classList.remove('ui-tabs-active');
    currentTab.parentElement.classList.add('ui-tabs-active');
    for (let article of articles){
        if (article.dataset.tabTitle === currentTab.text){
            article.classList.remove('hidden');
        } else {
            article.classList.add('hidden');
        }
    }
}