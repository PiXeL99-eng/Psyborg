const loader_wrapper = document.querySelector(".loader-wrapper");
const body = document.querySelector("body");

setTimeout(() => {
    loader_wrapper.style.display = 'none';
    body.style.overflow = 'auto';

}, 3000);