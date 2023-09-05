document.addEventListener('DOMContentLoaded', function() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const convertButton = document.getElementById('convertButton');
    const resultContainer = document.getElementById('result');
    const convertedTemperatureSpan = document.getElementById('convertedTemperature');
    const convertedUnitSpan = document.getElementById('convertedUnit');

    convertButton.addEventListener('click', function() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (!isNaN(temperature)) {
            if (unit === 'celsius') {
                const convertedTemperature = (temperature * 9/5) + 32;
                convertedTemperatureSpan.textContent = convertedTemperature.toFixed(2);
                convertedUnitSpan.textContent = 'Fahrenheit';
            } else if (unit === 'fahrenheit') {
                const convertedTemperature = (temperature - 32) * 5/9;
                convertedTemperatureSpan.textContent = convertedTemperature.toFixed(2);
                convertedUnitSpan.textContent = 'Celsius';
            }

            resultContainer.classList.remove('hidden');
        } else {
            alert('Please enter a valid temperature.');
        }
    });
});
