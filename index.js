let blogBtn = document.getElementById('blog');
let coreBtn = document.getElementById('core');
let homeBtn = document.getElementById('home');
let aboutBtn = document.getElementById('about');
let contactBtn = document.getElementById('contacts');
let mainImgContainer = document.getElementById('main-img-container');
let secondImgContainer = document.getElementById('second-img-container');
let thirdImgContainer = document.getElementById('third-img-container');
let aboutContent = document.getElementById('about-content');
let contactContent = document.getElementById('contact');

coreBtn.onclick = () => {
    mainImgContainer.style.display = 'none';
    secondImgContainer.style.display = 'flex';
    thirdImgContainer.style.display = 'none';
    aboutContent.style.display = 'none';
    contactContent.style.display = 'none';
}
blogBtn.onclick = () => {
    mainImgContainer.style.display = 'none';
    secondImgContainer.style.display = 'none';
    thirdImgContainer.style.display = 'flex';
    thirdImgContainer.style.justifyContent = 'space-around';
    aboutContent.style.display = 'none';
    contactContent.style.display = 'none';
}
homeBtn.onclick = () => {
    secondImgContainer.style.display = 'none';
    thirdImgContainer.style.display = 'none';
    mainImgContainer.style.display = 'block';
    aboutContent.style.display = 'none';
    contactContent.style.display = 'none';
}
aboutBtn.onclick = () => {
    secondImgContainer.style.display = 'none';
    thirdImgContainer.style.display = 'none';
    mainImgContainer.style.display = 'none';
    aboutContent.style.display = 'flex';
    // aboutContent.style.flexDirection = 'row';
    contactContent.style.display = 'none';
}
contactBtn.onclick = () => {
    secondImgContainer.style.display = 'none';
    thirdImgContainer.style.display = 'none';
    mainImgContainer.style.display = 'none';
    aboutContent.style.display = 'none';
    contactContent.style.display = 'flex';
}

async function fetchData() {
    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if (!response.ok) {
            throw new Error(`HTTP error! Could not fetch resource. status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));