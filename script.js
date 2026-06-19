const btn = document.querySelector('.btn-pay');

btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (btn.dataset.state === 'loading' || btn.dataset.state === 'error') return;

    btn.dataset.state = 'loading';
    btn.innerHTML = `
        <svg class="spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="31.4 31.4" />
        </svg>
        Betalingsverzoek aanmaken…
    `;

    setTimeout(() => {
        btn.dataset.state = 'error';
        btn.classList.add('btn-pay--error');
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/>
                <path d="M10 6v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="10" cy="13.5" r="1" fill="currentColor"/>
            </svg>
            iDEAL niet beschikbaar — probeer later opnieuw
        `;
    }, 2200);
});
