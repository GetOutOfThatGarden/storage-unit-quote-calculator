const SERVICES = [
    { id: "pickup", name: "Pickup Service", rate: 200000, inputType: "checkbox" },
    { id: "storage", name: "Storage (monthly)", rate: 295000, inputType: "hidden" },
    { id: "purchase-boxes", name: "Purchase Storage Boxes", rate: 828000, inputType: "number" },
    { id: "rental-boxes", name: "Rental Storage Boxes/Month", rate: 85000, inputType: "number" },
    { id: "delivery", name: "Delivery Service", rate: 200000, inputType: "checkbox" },
    { id: "lock", name: "Lock Service", rate: 50000, inputType: "checkbox" }
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
        if (s.inputType === 'hidden') return;
        const div = document.createElement('div');
        div.className = 'service-row';
        div.innerHTML = `
            <div class="service-info">
                <span class="service-name">${s.name}</span>
                <span class="service-rate">${formatVND(s.rate)}</span>
            </div>
            ${s.inputType === 'checkbox' ? 
              `<input type="checkbox" id="qty-${s.id}" name="qty-${s.id}" data-rate="${s.rate}" value="1">` :
              `<input type="number" class="qty-input" id="qty-${s.id}" name="qty-${s.id}" data-rate="${s.rate}" min="0" value="0" placeholder="0">`
            }
        `;
        container.appendChild(div);
    });
}

function calculate() {
    const dateIn = document.getElementById('date-in').value;
    const dateOut = document.getElementById('date-out').value;
    const months = monthsBetween(dateIn, dateOut);
    
    let gross = 100000; // Mandatory Check-in (50k) + Check-out (50k)

    // Storage
    gross += months * 295000;

    // Optional fees
    SERVICES.forEach(s => {
        if (s.id === 'storage') return;
        const el = document.getElementById(`qty-${s.id}`);
        let cost = 0;
        if (s.inputType === 'checkbox') {
            cost = el.checked ? s.rate : 0;
        } else {
            cost = (parseInt(el.value) || 0) * s.rate;
        }
        gross += cost;
    });

    // Discount
    const coupon = document.getElementById('coupon').value;
    const discount = (coupon === 'Bob15') ? gross * 0.15 : 0;
    const net = gross - discount;
    const balance = net - 500000; // Fixed deposit

    document.getElementById('gross').textContent = formatVND(gross);
    document.getElementById('discount').textContent = '- ' + formatVND(discount);
    document.getElementById('net').textContent = formatVND(net);
    document.getElementById('balance').textContent = formatVND(Math.max(0, balance));
}

document.addEventListener('DOMContentLoaded', () => {
    initForm();
    document.querySelectorAll('input, select, textarea').forEach(i => i.addEventListener('input', calculate));
    calculate();
});
