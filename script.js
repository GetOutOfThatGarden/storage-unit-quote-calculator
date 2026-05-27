function monthsBetween(d1, d2) {
    const start = new Date(d1);
    const end = new Date(d2);
    if (isNaN(start) || isNaN(end) || end <= start) return 0;
    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months += end.getMonth() - start.getMonth();
    if (end.getDate() < start.getDate()) months--;
    return Math.max(1, months);
}

function formatVND(amount) {
    return amount.toLocaleString('vi-VN') + ' ₫';
}

function calculate() {
    const dateIn = document.getElementById('date-in').value;
    const dateOut = document.getElementById('date-out').value;
    const months = monthsBetween(dateIn, dateOut);

    const storageMonthsEl = document.getElementById('storage-months-display');
    const storageLineTotalEl = document.getElementById('storage-line-total');
    storageMonthsEl.textContent = months + ' month' + (months !== 1 ? 's' : '');

    const storageRate = 300000;
    const storageTotal = months * storageRate;
    storageLineTotalEl.textContent = formatVND(storageTotal);

    let gross = storageTotal;

    const qtyInputs = document.querySelectorAll('.qty-input');
    qtyInputs.forEach(function(input) {
        const rate = parseInt(input.dataset.rate);
        const qty = parseInt(input.value) || 0;
        gross += rate * qty;
    });

    const discount = gross * 0.15;
    const net = gross - discount;

    const deposit = parseInt(document.getElementById('deposit').value) || 0;
    const balance = net - deposit;

    document.getElementById('gross').textContent = formatVND(gross);
    document.getElementById('discount').textContent = '- ' + formatVND(discount);
    document.getElementById('net').textContent = formatVND(net);
    document.getElementById('balance').textContent = formatVND(balance);
}

document.getElementById('date-in').addEventListener('change', calculate);
document.getElementById('date-out').addEventListener('change', calculate);

document.querySelectorAll('.qty-input').forEach(function(input) {
    input.addEventListener('input', calculate);
});

document.getElementById('deposit').addEventListener('input', calculate);

calculate();
