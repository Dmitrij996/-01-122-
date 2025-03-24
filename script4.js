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

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('ol li');

    listItems.forEach((li) => {
        // Добавляем класс с анимацией к каждому элементу списка
        li.style.position = 'relative'; // Убедимся, что позиционирование корректно
        const beforeElement = document.createElement('div');
        beforeElement.className = 'animated-number';
        li.prepend(beforeElement);
    });
});

let lastScroll = 0;
const items = document.querySelectorAll('.li');
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        header.style.top = '-1000px';
    } else {
        header.style.top = '0';
        header.style.opacity = '0.5';
        items.forEach(li => {
            li.style.padding = '1vw 2vw';
        });
    }
    lastScroll = currentScroll;
    if (document.documentElement.scrollTop === 0) {
        header.style.opacity = '1';
        items.forEach(li => {
            li.style.padding = '3vw 2vw';
            li.style.transition = '1s'
        });
    }
});


header.addEventListener('mouseenter', () => {
    header.style.opacity = '1';
});
header.addEventListener('mouseleave', () => {
    header.style.opacity = '0.5';
});