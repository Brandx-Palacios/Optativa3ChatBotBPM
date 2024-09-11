const iframe = document.getElementById('chat-iframe');
const loadingSpinner = document.getElementById('loading-spinner');

iframe.onload = function () {
    loadingSpinner.style.display = 'none';
};