const keyPad = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
const fieldClearBtn = keyPad.querySelector('[data-button-type="clear"]');
let lastButtonType = "";
let errorFlag = false;
let lastOperator = "";
let lastOperand = "";

function calculatorEvent(event) {
    const selectedButton = event.target;
    const type = selectedButton.dataset.buttonType;
    let displayValue = display.textContent;

    if (errorFlag) {
        display.textContent = "0";
    }

    if (!type) return;
    else if (type === "number") {
        // 숫자
        if (displayValue === "0") {
            display.textContent = selectedButton.textContent;
        } else {
            display.textContent += selectedButton.textContent;
        }
        uncheckActiveOperator();
    } else if (type === "operator") {
        document
            .querySelectorAll(".operator__button--active")
            .forEach((button) => {
                if (button !== selectedButton) {
                    button.classList.remove("operator__button--active");
                }
            });

        if (selectedButton.classList.contains("operator__button--active")) {
            return;
        }

        if (lastButtonType === "operator") {
            display.textContent =
                displayValue.slice(0, -1) + selectedButton.textContent;
        } else {
            const tempExpression = parseExpression(displayValue);
            const result = eval(tempExpression);
            display.textContent = result + selectedButton.textContent;
        }

        selectedButton.classList.add("operator__button--active");
    } else if (type === "decimal") {
        // 소수점
        const lastNumber = displayValue.split(/[\+\−×÷]/).pop();
        console.log(lastNumber);
        if (lastNumber.includes(".")) {
            console.log("여기1");
            return;
        }

        console.log(lastButtonType);
        console.log(display.textContent);
        if (lastButtonType !== "number" && display.textContent !== "0") {
            return;
        } else {
            display.textContent += selectedButton.textContent;
        }
    } else if (type === "equal") {
        if (
            (displayValue == 0 && lastOperator == "" && lastOperand == "") ||
            errorFlag
        ) {
            console.log("초기화");
            errorFlag = false;
            return;
        }

        if (lastButtonType == "operator") {
            displayValue = displayValue.slice(0, -1);
        }

        let expression;

        if (lastButtonType === "equal" && lastOperator && lastOperand) {
            expression = parseExpression(
                displayValue + lastOperator + lastOperand
            );
        } else {
            const match = displayValue.match(/([\+\−×÷])([^\+\−×÷]+)$/);
            console.log(displayValue);
            if (match) {
                lastOperator = parseExpression(match[1]);
                lastOperand = match[2];
            } else {
                lastOperator = "";
                lastOperand = "";
            }
            expression = parseExpression(displayValue);
        }

        if (!isFinite(eval(expression))) {
            display.textContent = "0으로 나눌 수 없습니다.";
            errorFlag = true;
        } else {
            display.textContent = eval(expression);
            lastButtonType = "equal";
        }

        uncheckActiveOperator();
    } else if (type === "clear") {
        display.textContent = "0";
        fieldClearBtn.textContent = "AC";
        lastOperator = "";
        lastOperand = "";
        resetCheckedOperator();
    }

    if (type !== "equal") lastButtonType = type;

    if (display.textContent != "0") {
        fieldClearBtn.textContent = "CE";
    }

    function uncheckActiveOperator() {
        document
            .querySelectorAll(".operator__button--active")
            .forEach((button) => {
                button.classList.remove("operator__button--active");
            });
    }

    function getCheckedOperator() {
        return document.querySelector(".operator__button--active");
    }

    function parseExpression(str) {
        return str
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/＋/g, "+")
            .replace(/−/g, "-");
    }

    function resetCheckedOperator() {
        const checkedOperator = getCheckedOperator();
        if (checkedOperator) {
            checkedOperator.classList.remove("operator__button--active");
        }
    }
}

keyPad.addEventListener("click", calculatorEvent);

document.addEventListener("keydown", handleKeyboardInput);

function handleKeyboardInput(event) {
    const key = event.key;

    console.log(key);

    // 숫자
    if (!isNaN(key)) {
        simulateButtonPress(`[data-button-type="number"]`, key);
    }

    // 연산자
    else if (key === "+") {
        simulateButtonPress(`[data-button-type="operator"]`, "+");
    } else if (key === "-") {
        simulateButtonPress(`[data-button-type="operator"]`, "−");
    } else if (key === "*") {
        simulateButtonPress(`[data-button-type="operator"]`, "×");
    } else if (key === "/") {
        simulateButtonPress(`[data-button-type="operator"]`, "÷");
    }

    // 소수점
    else if (key === ".") {
        simulateButtonPress(`[data-button-type="decimal"]`, ".");
    } else if (key === "Enter" || key === "=") {
        simulateButtonPress(`[data-button-type="equal"]`);
    } else if (key === "Escape" || key === "Backspace") {
        simulateButtonPress(`[data-button-type="clear"]`);
    }
}

function simulateButtonPress(selector, textMatch = null) {
    const buttons = document.querySelectorAll(selector);

    for (const button of buttons) {
        if (!textMatch || button.textContent.trim() === textMatch) {
            button.click();
            break;
        }
    }
}
