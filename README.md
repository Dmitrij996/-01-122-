# Веб-приложение для адаптации практикантов Палфингер Кама Цилиндры

Веб-приложение для помощи в адаптации студентов, проходящих практику на предприятии. Включает интерактивные чек-листы, карту предприятия и базу знаний.

## Особенности
- 🔍 Интуитивный интерфейс в корпоративном стиле
- 📱 Полностью адаптивный дизайн
- 📚 База знаний с FAQ
- 🗺️ Интерактивная карта предприятия
- ✅ Система чек-листов адаптации

## Технологии
- Frontend: HTML5, CSS3, JavaScript
- Дизайн:  макеты прилагаются
- Анимации: CSS transitions

## Установка
1. Клонировать репозиторий:
git clone https://github.com/yourusername/palfinger-adaptation-app.git
2. Открыть в браузере:
cd palfinger-adaptation-app
open index.html

## Скриншоты интерфейса
![image](https://github.com/user-attachments/assets/d0e010e3-0f22-4188-b5d3-74c1259bee0d)
![image](https://github.com/user-attachments/assets/8af1e825-667c-49d3-9558-5094a1c966af)
![image](https://github.com/user-attachments/assets/cdb5971c-bd3f-4cb3-a40e-0f691cdad13f)
![image](https://github.com/user-attachments/assets/9d7d6d7d-4316-497f-8a7d-d590fdf92d1d)

## Помощь

//последовательная загрузка контента (плавное появление при скроле)
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
const items = document.querySelectorAll('.li');
const header = document.querySelector('header');

//мигающий список с обведенной нумерацией
ol {
    list-style-type: none;
    counter-reset: num;
    margin: 2vw 0 0 1vw;
    padding: 0;
    font-size: 2vw;
}
ol li {
    position: relative;
    padding: 1vw 0 1vw 1vw;
    line-height: 1.4;
    font-size: 2vw;
    font-family: "Jura", sans-serif;
    font-optical-sizing: auto;
    font-weight: lighter;
    font-style: oblique;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
ol li:before {
    content: counter(num);
    counter-increment: num;
    display: inline-block;
    position: absolute;
    margin: 1vw 0 1vw 1vw;
    top: 0;
    left: -80px;
    width: 3vw;
    height: 3vw;
    background: #FFD430;
    text-align: center;
    line-height: 2.7vw;
    font-size: 2vw;
    border-radius: 50%;
    animation: pulse 1.5s infinite;
}


