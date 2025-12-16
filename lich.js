function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function openModal(modalId) {
    alert('Chức năng báo giá sẽ được mở - Modal ID: ' + modalId);
}

function openPreview(type) {
    const modalId = 'previewModal' + type.charAt(0).toUpperCase() + type.slice(1);
    document.getElementById(modalId).style.display = 'flex';
}

function closePreview(type) {
    const modalId = 'previewModal' + type.charAt(0).toUpperCase() + type.slice(1);
    document.getElementById(modalId).style.display = 'none';
}

// Countdown Timer
function updateCountdown() {
    // Set end date to 5 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 1);
    endDate.setHours(23, 59, 59, 999);

    function update() {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = '<p>Ưu đãi đã kết thúc!</p>';
        }
    }

    update();
    const timer = setInterval(update, 1000);
}

// Falling Flowers Animation
function createFallingFlowers() {
    const container = document.getElementById('falling-flowers');
    const flowerCount = 15;
    const flowers = ['🌸', '🌺', '🏵️'];

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'falling-flower';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDuration = (Math.random() * 3 + 5) + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';
        flower.style.fontSize = (Math.random() * 10 + 20) + 'px';
        container.appendChild(flower);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    updateCountdown();
    createFallingFlowers();
});

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('preview-modal')) {
        event.target.style.display = 'none';
    }
}