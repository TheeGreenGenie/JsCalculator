function addition(...nums) {
    return nums.reduce((current, number) => current+number);
};

function subtraction(...nums) {
    let args = nums,
        first = nums[0];
    args.shift();
    return args.reduce((current, number) => current-number, first);
};

function multiply(...nums) {
    return nums.reduce((current, number) => current*number);
};

function divide(...nums) {
    let args = nums,
        first = nums[0];
    args.shift();
    return args.reduce((current, number) => current/number, first);
};

function operate(num1, opr, num2) {
    switch (opr) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/': 
            return divide(num1, num2);
    }
};

let display = document.querySelector('.display');

function buttonEventListner() {
    const buttons = document.querySelectorAll("button");
          operator = 0;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            switch(button.id) {
                case '1':
                    display.textContent = display.textContent + '1';
                    break;
                case '2':
                    display.textContent = display.textContent + '2';
                    break;
                case '3':
                    display.textContent = display.textContent + '3';
                    break;
                case '4':
                    display.textContent = display.textContent + '4';
                    break;
                case '5':
                    display.textContent = display.textContent + '5';
                    break;
                case '6':
                    display.textContent = display.textContent + '6';
                    break;
                case '7':
                    display.textContent = display.textContent + '7';
                    break;
                case '8':
                    display.textContent = display.textContent + '8';
                    break;
                case '9':
                    display.textContent = display.textContent + '9';
                    break;
                case '0':
                    display.textContent = display.textContent + '0';
                    break;
                case 'add':
                    display.textContent = display.textContent + ' + ';
                    break;
                case 'subtract':
                    display.textContent = display.textContent + ' - ';
                    break;
                case 'divide':
                    display.textContent = display.textContent + ' / ';
                    break;
                case 'multiply':
                    display.textContent = display.textContent + ' * ';
                    break;
                case 'equal':
                    text = (display.textContent).split(' ');
                    new_num = operate(Number(text[0]), text[1], Number(text[2]));
                    display.textContent = new_num % 1 !== 0 ? new_num.toFixed(13) : new_num;
                    break;
                default:
                    display.textContent = '';
                    break;
            }
        });
    });
};

buttonEventListner();



// myBox.textContent = '1+2'

// console.log(myBox)
