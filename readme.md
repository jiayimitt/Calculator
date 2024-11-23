
# Calculator Web Application

## Introduction
This web-based calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also supports decimal calculations.

## Features
- Simple and clean UI
- Supports basic arithmetic and decimal operations
- Responsive design

## Technologies Used
- HTML
- CSS
- JavaScript

Code Example:
```javascript
function calculate() {
    try {
        let expression = display.textContent.trim();
        const lastChar = expression.slice(-1);
        const operators = ['+', '-', '*', '/', '%'];
        if (operators.includes(lastChar)) {
            expression = expression.slice(0, -1);
        }

        const result = eval(expression);
        display.textContent = result || '';
        hasCalculated = true; 
    } catch (e) {
        display.textContent = 'Error'; 
        hasError = true; 
    }
}
```

## Setup Instructions
### Clone the repository
```bash
git clone https://github.com/<your-username>/calculator-app.git
cd calculator-app
```

### Running the Application
Open `index.html` in your browser to start using the calculator.

### Code Walkthrough
#### `index.html`
Contains the structure for the calculator buttons and display.
#### `style.css`
Provides the layout styling for the app, making it visually appealing and responsive.
#### `script.js`
Handles the logic for displaying the input, performing calculations, and managing button clicks.

## Live Demo
You can view the live demo of the app on GitHub Pages: [Live Demo](https://<your-username>.github.io/calculator-app/)
