const button = document.getElementById('toggleButton');
const content = document.querySelector('.content');

let isHidden = true;

button.addEventListener('click', () => {
    if (isHidden) {
        content.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        content.style.display = 'none';
        button.textContent = 'Показать ещё';
    }
    isHidden = !isHidden;
});
