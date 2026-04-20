// Jednoduchá validace formuláře
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registration-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const email = document.getElementById('email').value;
            const telefon = document.getElementById('telefon').value;
            const kurz = document.getElementById('kurz').value;

            if (!email.includes('@')) {
                alert('Prosím zadejte platný e-mail.');
                e.preventDefault();
                return;
            }

            if (telefon.length < 9) {
                alert('Prosím zadejte platné telefonní číslo.');
                e.preventDefault();
                return;
            }

            if (!kurz) {
                alert('Prosím vyberte kurz.');
                e.preventDefault();
                return;
            }

            alert('Přihláška byla odeslána! Děkujeme.');
            // V reálné aplikaci by se odeslalo na server
        });
    }
});