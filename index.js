let blog = document.getElementById('blog');
let core = document.getElementById('core');
let mainImgContainer = document.getElementById('main-img-container');
let secondImgContainer = document.getElementById('second-img-container');
console.log(blog);

core.onclick = () => {
    mainImgContainer.style.display = 'none';
    secondImgContainer.style.display = 'flex';
    secondImgContainer.style.justifyContent = 'space-around';
}
blog.onclick = () => {
    secondImgContainer.style.display = 'none';
    mainImgContainer.style.display = 'flex';
}
