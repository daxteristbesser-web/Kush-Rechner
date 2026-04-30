// Add event listeners for tab switching
const tabs = document.querySelectorAll('.tab');
const kushRechnerSection = document.getElementById('kushRechner');
const autoTuningRechnerSection = document.getElementById('autoTuningRechner');

function switchTab(tab) {
  if (tab === 'kush') {
    kushRechnerSection.style.display = 'block';
    autoTuningRechnerSection.style.display = 'none';
  } else {
    kushRechnerSection.style.display = 'none';
    autoTuningRechnerSection.style.display = 'block';
  }
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

// Kush Rechner
const quantityInputs = document.querySelectorAll('.kush-quantity');
const priceElements = document.querySelectorAll('.kush-price');
const totalElement = document.getElementById('kush-total');

function calculateKushTotal() {
  let total = 0;
  quantityInputs.forEach((input, index) => {
    const quantity = parseFloat(input.value) || 0;
    const price = parseFloat(priceElements[index].textContent.replace('$', '')) || 0;
    total += quantity * price;
  });
  totalElement.textContent = formatCurrency(total);
}

quantityInputs.forEach(input => {
  input.addEventListener('input', calculateKushTotal);
});

// Auto Tuning Rechner
const regInput = document.getElementById('reg-value');
const tuningSelect = document.getElementById('tuning-level');
const insuranceCostElement = document.getElementById('insurance-cost');
const autoTotalElement = document.getElementById('auto-total');

function calculateAutoTotal() {
  const regValue = parseFloat(regInput.value) || 0;
  const tuningLevel = parseFloat(tuningSelect.value) || 0;
  const subtotals = calculateSubtotals(regValue, tuningLevel);
  const insuranceCost = calculateInsuranceCost(regValue);
  const finalTotal = subtotals + insuranceCost;
  insuranceCostElement.textContent = formatCurrency(insuranceCost);
  autoTotalElement.textContent = formatCurrency(finalTotal);
}

regInput.addEventListener('input', calculateAutoTotal);
tuningSelect.addEventListener('change', calculateAutoTotal);

function calculateSubtotals(regValue, tuningLevel) {
  // (Insert logic for calculating subtotals based on registration value and tuning level)
  return regValue * tuningLevel; // Example calculation
}

function calculateInsuranceCost(regValue) {
  return regValue * 0.05; // Example calculation
}

// Utility functions
function formatCurrency(num) {
  return '$' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Reset functions if needed
function resetValues() {
  quantityInputs.forEach(input => input.value = '0');
  calculateKushTotal();
  regInput.value = '';
  tuningSelect.value = '0';
  calculateAutoTotal();
}

// Background animation (Matrix effect)
function createMatrixAnimation() {
  // (Insert logic for matrix background animation)
}

createMatrixAnimation();
