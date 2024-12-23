/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #007bff, #42a5f5);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    box-sizing: border-box;
}

.animated-background {
    display: flex;
    width: 90%;
    max-width: 1200px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    padding: 40px;
    animation: fadeIn 1s ease-in-out; /* Fade-in effect for the container */
}

/* Sidebar Styling */
.sidebar {
    width: 30%;
    background: #f8f9fa;
    padding: 30px;
    border-right: 1px solid #e9ecef;
    display: flex;
    flex-direction: column;
    animation: slideInLeft 1s ease-in-out; /* Sidebar slides in */
}

.sidebar .logo {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #007bff;
    text-align: center;
}

.steps {
    list-style: none;
    padding: 0;
    margin: 0;
}

.steps li {
    margin-bottom: 15px;
    font-size: 16px;
    color: #6c757d;
    padding: 12px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    text-align: left;
    animation: fadeIn 1.5s ease-in-out both; /* Each item fades in */
}

.steps li.current {
    font-weight: bold;
    color: #007bff;
    background-color: #e9f5ff;
}

/* Main Content Styling */
.main-content {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 30px;
    animation: fadeIn 1.5s ease-in-out; /* Main content fades in */
}

/* Ensure the box is positioned properly during transitions */
.step {
  display: none; /* Initially hidden */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease; /* Adjusted duration */
}

.step.active {
  display: block; /* Show only active steps */
  opacity: 1;
  transform: translateY(0); /* Slide into place */
}

.step.exiting {
  opacity: 0;
  transform: translateY(-20px); /* Slide out upwards smoothly */
  pointer-events: none; /* Prevent interaction during exit */
}

/* Form Styling */
.form-row {
    display: flex;
    gap: 30px; /* Add space between columns */
    margin-bottom: 20px;
}

.form-group {
    flex: 1;
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 10px; /* Increased spacing between label and input */
    font-size: 14px;
    color: #333;
}

input, textarea, select {
    width: 100%;
    padding: 15px; /* Increased padding inside inputs for better spacing */
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px; /* Slightly rounded corners for better design */
    box-sizing: border-box;
    transition: transform 1.3s ease, box-shadow 1.3s ease; /* Added hover animation */
}

input:hover, textarea:hover, select:hover {
    transform: scale(1.02); /* Slight zoom effect on hover */
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.2);
}

textarea {
    resize: none;
}

input:focus, textarea:focus, select:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

input[type="range"] {
    width: 100%;
    margin-top: 10px;
}

/* Buttons */
.button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    height: 50px; /* Fixed height to avoid layout shifting */
    opacity: 1; /* Start fully visible */
    transition: opacity 0.5s ease; /* Smooth fade transition */
}

button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 1.5s ease, transform 1.5s ease;
}

button.hidden {
    opacity: 0;
    pointer-events: none; /* Disable interaction while hidden */
}

button:hover {
    background: #0056b3;
    transform: scale(1.05); /* Slight zoom on hover */
}

button:disabled {
    background: #d6d6d6;
    cursor: not-allowed;
    opacity: 0.6; /* Make disabled button slightly transparent */
}

/* Keyframes for Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(-50px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInUp {
    from {
        transform: translateY(50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .animated-background {
        flex-direction: column;
        padding: 20px;
    }

    .sidebar {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #e9ecef;
    }

    .form-row {
        flex-direction: column;
    }

    .main-content {
        margin-left: 0;
    }
}
