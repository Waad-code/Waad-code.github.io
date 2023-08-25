document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navigation = document.querySelector('.main-navigation');

    toggleButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });
});
