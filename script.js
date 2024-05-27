document.addEventListener('DOMContentLoaded', () => {
    const totalNumbers = 75;
    const numbers = Array.from({ length: totalNumbers }, (_, i) => i + 1);
    let drawnNumbers = [];
    let lastNumber = null;

    const drawButton = document.getElementById('draw-button');
    const lastNumberValue = document.getElementById('last-number-value');
    const totalDrawnValue = document.getElementById('total-drawn-value');
    const showTableButton = document.getElementById('show-table-button');
    const numberTable = document.getElementById('number-table');
    const numberTableBody = document.getElementById('number-table-body');

    drawButton.addEventListener('click', () => {
        if (drawnNumbers.length >= totalNumbers) {
            alert('Todos os números já foram sorteados!');
            return;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * totalNumbers);
        } while (drawnNumbers.includes(numbers[randomIndex]));

        lastNumber = numbers[randomIndex];
        drawnNumbers.push(lastNumber);

        lastNumberValue.textContent = lastNumber;
        totalDrawnValue.textContent = drawnNumbers.length;

        updateTable();
    });

    showTableButton.addEventListener('click', () => {
        numberTable.classList.toggle('hidden');
    });

    function updateTable() {
        numberTableBody.innerHTML = '';

        for (let i = 0; i < totalNumbers; i++) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.textContent = numbers[i];

            if (drawnNumbers.includes(numbers[i])) {
                cell.classList.add('drawn');
            }

            if (numbers[i] === lastNumber) {
                cell.classList.add('last-drawn');
            }

            row.appendChild(cell);
            numberTableBody.appendChild(row);
        }
    }
});