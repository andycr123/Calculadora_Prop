document.getElementById('tipCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const totalCost = document.getElementById('totalCost').value;
    const serviceLevel = document.getElementById('serviceLevel').value;

    let tipAmount = 0;

    if (serviceLevel === 'regular') {
        tipAmount = totalCost * 0.15; // 15% de propina
    } else if (serviceLevel === 'excellent') {
        tipAmount = totalCost * 0.25; // 25% de propina
    }

    document.getElementById('result').innerText = `La propina recomendada es $${tipAmount.toFixed(2)}.`;
});
