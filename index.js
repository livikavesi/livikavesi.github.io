let blog = document.getElementById('blog');
let core = document.getElementById('core');
let home = document.getElementById('home');
let about = document.getElementById('about');
let mainImgContainer = document.getElementById('main-img-container');
let secondImgContainer = document.getElementById('second-img-container');
let thirdImgContainer = document.getElementById('third-img-container');
let aboutContent = document.getElementById('about-content');

core.onclick = () => {
    mainImgContainer.style.display = 'none';
    secondImgContainer.style.display = 'flex';
    thirdImgContainer.style.display = 'none';
    aboutContent.style.display = 'none';
}
blog.onclick = () => {
    mainImgContainer.style.display = 'none';
    secondImgContainer.style.display = 'none';
    thirdImgContainer.style.display = 'flex';
    thirdImgContainer.style.justifyContent = 'space-around';
    aboutContent.style.display = 'none';
}
home.onclick = () => {
    secondImgContainer.style.display = 'none';
    thirdImgContainer.style.display = 'none';
    mainImgContainer.style.display = 'flex';
    aboutContent.style.display = 'none';
}
about.onclick = () => {
    secondImgContainer.style.display = 'none';
    thirdImgContainer.style.display = 'none';
    mainImgContainer.style.display = 'none';
    aboutContent.style.display = 'flex';
    aboutContent.style.flexDirection = 'column';
}
