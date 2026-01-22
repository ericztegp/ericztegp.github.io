document.addEventListener('DOMContentLoaded', function() {
    const cookieAlert = document.querySelector('.cookie-alert');
    const overlay = document.querySelector('.cookie-overlay');
    const acceptBtn = document.getElementById('acceptBtn');

    // Función para obtener cookie por nombre
    function getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    // Función para mostrar alerta
    function showCookieAlert() {
        cookieAlert.classList.add('show');
        overlay.classList.add('show');
    }

    // Función para ocultar alerta y guardar cookie
    function acceptCookies() {
        cookieAlert.classList.remove('show');
        overlay.classList.remove('show');

        // Guardar cookie por 30 días
        const d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        document.cookie = "cookiesAccepted=true; expires=" + d.toUTCString() + "; path=/";
    }

    // Mostrar alerta si no hay cookie
    if (!getCookie('cookiesAccepted')) {
        showCookieAlert();
    }

    // Evento del botón
    acceptBtn.addEventListener('click', acceptCookies);
});
