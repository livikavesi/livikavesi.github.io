let blog = document.getElementById('blog');
let core = document.getElementById('core');
let home = document.getElementById('home');
let mainImgContainer = document.getElementById('main-img-container');
let secondImgContainer = document.getElementById('second-img-container');
let thirdImgContainer = document.getElementById('third-img-container');

core.onclick = () => {
    mainImgContainer.style.display = 'none';
    secondImgContainer.style.display = 'flex';
    thirdImgContainer.style.display = 'none';
}
blog.onclick = () => {
    mainImgContainer.style.display = 'none';
    secondImgContainer.style.display = 'none';
    thirdImgContainer.style.display = 'flex';
    thirdImgContainer.style.justifyContent = 'space-around';
}
home.onclick = () => {
    secondImgContainer.style.display = 'none';
    thirdImgContainer.style.display = 'none';
    mainImgContainer.style.display = 'flex';
}
