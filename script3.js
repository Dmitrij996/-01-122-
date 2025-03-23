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