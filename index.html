let currentStep = 0; // Tracks the current step
const steps = document.querySelectorAll('.step'); // All step elements
const stepIndicators = document.querySelectorAll('.steps li'); // Sidebar step indicators
const buttonGroup = document.querySelector('.button-group'); // Button group container

// Function to update step visibility with fade transitions
function updateStepVisibility(nextStep) {
    const currentStepElement = steps[currentStep];
    const nextStepElement = steps[nextStep];

    // Start fade-out animation for current step
    currentStepElement.classList.remove('active');
    currentStepElement.classList.add('exiting');

    // Fade out buttons during the transition
    updateButtons(false);

    // Wait for the fade-out animation to complete
    setTimeout(() => {
        currentStepElement.classList.remove('exiting');
        currentStepElement.style.display = 'none'; // Hide the step completely

        // Prepare and show the next step
        nextStepElement.style.display = 'block';
        nextStepElement.classList.add('active');

        // Update sidebar indicators
        stepIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('current', index === nextStep);
        });

        // Update the current step index
        currentStep = nextStep;

        // Fade in buttons after step transition
        updateButtons(true);
    }, 500); // Match the transition duration (CSS)
}
// Function to fade buttons in or out
function updateButtons(visible) {
    if (visible) {
        buttonGroup.style.opacity = '1';
        buttonGroup.style.pointerEvents = 'auto';
    } else {
        buttonGroup.style.opacity = '0';
        buttonGroup.style.pointerEvents = 'none';
    }
}

// Move to the next step
function nextStep() {
    if (currentStep < steps.length - 1) {
        updateStepVisibility(currentStep + 1);
    } else {
        alert('Form submitted successfully!');
    }
}

// Move to the previous step
function prevStep() {
    if (currentStep > 0) {
        updateStepVisibility(currentStep - 1);
    }
}

// Initialize the first step on page load
document.addEventListener('DOMContentLoaded', () => {
    steps[currentStep].classList.add('active'); // Show the first step
    updateButtons(true); // Ensure buttons are visible
});
