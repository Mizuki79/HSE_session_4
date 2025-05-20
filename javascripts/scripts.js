// Таймер обратного отсчета
function updateCountdown() {
    const festivalDate = new Date(2025, 7, 15, 0, 0); // 15 августа 2025
    const now = new Date();
    
    const diff = festivalDate - now;
    
    if (diff <= 0) {
        document.getElementById('countdown').textContent = "Фестиваль начался!";
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').textContent = 
        `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Обновляем таймер каждую секунду
updateCountdown();
setInterval(updateCountdown, 1000);