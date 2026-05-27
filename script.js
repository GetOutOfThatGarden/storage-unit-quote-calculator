const SERVICES = [
    { id: "check-in", name: "Check-in Service", rate: 50000, type: "automatic" },
    { id: "pickup", name: "Pickup Service", rate: 200000, type: "optional" },
    { id: "storage", name: "Storage (per month)", rate: 295000, type: "required" },
    { id: "purchase-boxes", name: "Purchase Storage Boxes", rate: 828000, type: "optional" },
    { id: "rental-boxes", name: "Rental Storage Boxes/Month", rate: 85000, type: "optional" },
    { id: "check-out", name: "Check-out Service", rate: 50000, type: "automatic" },
    { id: "delivery", name: "Delivery Service", rate: 200000, type: "optional" },
    { id: "lock", name: "Lock Service", rate: 50000, type: "optional" }
];

function monthsBetween(d1, d2) {
    const start = new Date(d1);
    const end = new Date(d2);
    if (isNaN(start) || isNaN(end) || end <= start) return 1;
    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months += end.getMonth() - start.getMonth();
    if (end.getDate() < start.getDate()) months--;
    return Math.max(1, months);
}

function formatVND(amount) {
    return amount.toLocaleString('vi-VN') + ' ₫';
}

function initForm() {
    const container = document.getElementById('services-container');
    SERVICES.forEach(s => {
        if (s.type === 'automatic') return; // Handled in calc

        const div = document.createElement('div');
        div.className = 'service-row';
        div.innerHTML = `
            <div class="service-info">
                <span class="service-name">${s.name}</span>
                <span class="service-rate">${formatVND(s.rate)}</span>
            </div>
            <input type="number" class="qty-input" id="qty-${s.id}" data-id="${s.id}" min="0" value="0" placeholder="Qty">
        `;
        container.appendChild(div);
    });
}

function calculate() {
    const dateIn = document.getElementById('date-in').value;
    const dateOut = document.getElementById('date-out').value;
    const months = monthsBetween(dateIn, dateOut);
    
    let gross = 0;

    // Automatic fees
    gross += 50000; // Check-in
    gross += 50000; // Check-out

    // Storage (required)
    gross += months * 295000;
    document.getElementById('storage-display').textContent = `Storage (${months} months)`;

    // Optional fees
    SERVICES.filter(s => s.type === 'optional').forEach(s => {
        const qty = parseInt(document.getElementById(`qty-${s.id}`).value) || 0;
        gross += qty * s.rate;
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

document.addEventListener('DOMContentLoaded', () => {
    initForm();
    document.querySelectorAll('input').forEach(i => i.addEventListener('input', calculate));
    calculate();
});
