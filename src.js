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
            break;
        case '-':
            return subtraction(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
};