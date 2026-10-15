const nameInput = document.getElementById('name');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');
const resultBox = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const heightCm = parseFloat(heightInput.value);
  const weightKg = parseFloat(weightInput.value);

  if (!name || !heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
    resultBox.style.display = 'block';
    resultBox.innerHTML = '<p>Please enter your name, height, and weight correctly.</p>';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);
  let status = '';

  if (bmi < 18.5) {
    status = 'Underweight';
  } else if (bmi < 25) {
    status = 'Normal weight';
  } else if (bmi < 30) {
    status = 'Overweight';
  } else {
    status = 'Obese';
  }

  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <p><strong>${name}</strong>, your BMI is <strong>${bmiRounded}</strong>.</p>
    <p>Status: <strong>${status}</strong>.</p>
  `;
});