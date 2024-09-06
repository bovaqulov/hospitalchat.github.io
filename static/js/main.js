 // Telegram Web Apps SDK
 window.TelegramWebApps = window.TelegramWebApps || {};
 window.TelegramWebApps.ready = function() {
     const user = window.TelegramWebApps.initDataUnsafe.user;
     if (user) {
         document.getElementById('user-name').innerText = `Ism: ${user.first_name} ${user.last_name || ''}`;
         document.getElementById('user-id').innerText = `ID: ${user.id}`;
     } else {
         document.getElementById('user-name').innerText = 'Foydalanuvchi ma\'lumotlari topilmadi.';
     }
 };

 // Initialize the Telegram Web App SDK
 if (window.TelegramWebApps) {
     window.TelegramWebApps.ready();
 } else {
     console.error('Telegram Web Apps SDK topilmadi.');
 }