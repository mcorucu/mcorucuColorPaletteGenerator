document.addEventListener("DOMContentLoaded", function() {
    const colorInputForm = document.getElementById('color-input-form');
    const paletteContainer = document.querySelector('.palette-container');
    const colorSamples = document.querySelector('.color-samples');

    const sampleColors = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#FF69B4'];

    // Generate color samples
    sampleColors.forEach(color => {
        const colorSample = document.createElement('div');
        colorSample.className = 'color-sample';
        colorSample.style.backgroundColor = color;
        colorSample.addEventListener('click', () => {
            document.getElementById('base-color').value = color;
        });
        colorSamples.appendChild(colorSample);
    });

    colorInputForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const baseColor = document.getElementById('base-color').value;
        generatePalette(baseColor);
    });

    function generatePalette(baseColor) {
        paletteContainer.innerHTML = '';

        for (let i = 0; i < 5; i++) {
            const colorBox = document.createElement('div');
            colorBox.className = 'col-md-2 col-sm-4 color-box';
            colorBox.style.backgroundColor = baseColor;
            paletteContainer.appendChild(colorBox);
        }
    }
});
