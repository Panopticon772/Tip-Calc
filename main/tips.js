// enter check amount

// enter tip as %

// when button clicked, takes check amount + tip % and calculates tip amount, and also provides a total amount

// design

// selectors/target button
const calcButton = document.querySelector("#calculate");
const selectAmount = document.querySelector("#amount");
const selectTip = document.querySelector("#tip-percent");

calcButton.addEventListener("click", () => {
    let amount = selectAmount.value;
    let tip = selectTip.value / 100;
    let totalTip = Math.round(amount * tip);
    let total = +amount +totalTip;
    document.querySelector("#tip-amount").innerHTML = `Tip: $${totalTip}`;
    document.querySelector("#total").innerHTML = `Total: $${total}`;
});