//innesco init
window.addEventListener('load', init);

const portfolio = document.querySelector('#Project')

function refreshPage() {
    location.reload();
}

function init(){
    console.log('init');}


let comingSoon = portfolio.addEventListener('click', ()=>{alert("Coming soon!")});