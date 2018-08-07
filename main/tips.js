// selectors/target buttons
const calcButton = document.querySelector("#calculate");
const selectAmount = document.querySelector("#amount");
const selectTip = document.querySelector("#tip-percent");

// Math
calcButton.addEventListener("click", () => {
    let amount = selectAmount.value;
    let tip = selectTip.value / 100;
    let totalTip = Math.round(amount * tip);
    let total = Math.round((+amount +totalTip) * 100) / 100;
    document.querySelector("#tip-amount").innerHTML = `Tip: $${totalTip}`;
    document.querySelector("#total").innerHTML = `Total: $${total}`;
});