document.getElementById('calculate-btn').addEventListener('click', function() {
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const qty = parseFloat(document.getElementById('qty').value) || 0;
    const deposit = parseFloat(document.getElementById('deposit').value) || 0;

    const gross = rate * qty;
    const discount = gross * 0.15;
    const net = gross - discount;
    const balance = net - deposit;

    document.getElementById('gross').innerText = gross.toFixed(2);
    document.getElementById('discount').innerText = discount.toFixed(2);
    document.getElementById('net').innerText = net.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);
});
