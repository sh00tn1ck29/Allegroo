document.addEventListener('DOMContentLoaded', function () {
    const contrastButton = document.getElementById('contrast-button');
    const themeSelect = document.getElementById('theme');

    // Funkcja zmieniająca motyw na ciemny lub jasny
    function toggleContrast() {
        const currentTheme = themeSelect.value;

        if (currentTheme === 'ciemny') {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#ffffff';
            document.querySelector('.footer-container').style.backgroundColor = '#333333';
            document.querySelector('.footer').style.backgroundColor = '#2c2c2c';
            document.querySelector('.header').style.backgroundColor = '#333333';
            document.querySelector('.navigation').style.backgroundColor = '#333333';
            document.querySelector('.container').style.backgroundColor = '#121212';
            // Zmieniamy kolory przycisków
            const buttons = document.querySelectorAll('.BUTTON1, .category-button');
            buttons.forEach(button => {
                button.style.backgroundColor = '#555555';
                button.style.color = '#ffffff';
            });
            // Zmieniamy kolory linków
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                link.style.color = '#ffffff';
            });
            // Zmieniamy kolory innych elementów
            const productItems = document.querySelectorAll('.product-item, .inspiration-item');
            productItems.forEach(item => {
                item.style.backgroundColor = '#222222';
                item.style.color = '#ffffff';
            });
        } else {
            
            document.body.style.backgroundColor = 'lightgray';
            document.body.style.color = 'black';
            document.querySelector('.footer-container').style.backgroundColor = '#f5f5f5';
            document.querySelector('.footer').style.backgroundColor = '#f1f1f1';
            document.querySelector('.header').style.backgroundColor = '#f5f5f5';
            document.querySelector('.navigation').style.backgroundColor = '#f5f5f5';
            document.querySelector('.container').style.backgroundColor = '#f1f1f1';
            
            const buttons = document.querySelectorAll('.BUTTON1, .category-button');
            buttons.forEach(button => {
                button.style.backgroundColor = 'rgb(236, 92, 39)';
                button.style.color = 'white';
            });
            
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                link.style.color = 'black';
            });
            
            const productItems = document.querySelectorAll('.product-item, .inspiration-item');
            productItems.forEach(item => {
                item.style.backgroundColor = '#f1f1f1';
                item.style.color = 'black';
            });
        }
    }

    
    contrastButton.addEventListener('click', function () {
        const currentTheme = themeSelect.value;
        const newTheme = currentTheme === 'ciemny' ? 'jasny' : 'ciemny';
        themeSelect.value = newTheme;
        toggleContrast();
    });

   
    toggleContrast();
});