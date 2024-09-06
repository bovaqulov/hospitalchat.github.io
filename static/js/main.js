// main.js
window.onload = function() {
    // Telegram Web Apps SDK
    if (window.TelegramWebApps) {
        window.TelegramWebApps.ready();

        // Get user information from Telegram Web Apps SDK
        const user = window.TelegramWebApps.initDataUnsafe.user;

        if (user) {
            document.getElementById('user-name').innerText = `Ism: ${user.first_name} ${user.last_name || ''}`;
            document.getElementById('user-id').innerText = `ID: ${user.id}`;
        } else {
            document.getElementById('user-name').innerText = 'Foydalanuvchi ma\'lumotlari topilmadi.';
        }
    } else {
        console.error('Telegram Web Apps SDK topilmadi.');
    }
};
