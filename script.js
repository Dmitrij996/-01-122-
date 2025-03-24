function onEntry(entry){
    entry.forEach(change =>{
        if (change.isIntersecting){
            change.target.classList.add(
                'animation'
            );
        }
    });
}
let options = {
    threshold:[0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('article');
for(let elm of elements){
    observer.observe(elm)
};


let lastScroll = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // Прокрутка вниз'
        header.style.top = '-1000px';
    } else {
        // Прокрутка вверх
        header.style.top = '0';
    }
    lastScroll = currentScroll;
});