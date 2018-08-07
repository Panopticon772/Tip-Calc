// selectors/target buttons
const calcButton = document.querySelector("#calculate");
const selectAmount = document.querySelector("#amount");
const selectTip = document.querySelector("#tip-percent");
const getModal = document.getElementById("my-modal");
const getSpan = document.getElementsByClassName("close-modal")[0];

// math + open modal
calcButton.addEventListener("click", () => {
    let amount = selectAmount.value;
    let tip = selectTip.value / 100;
    let totalTip = Math.round(amount * tip);
    let total = Math.round((+amount +totalTip) * 100) / 100;
    getModal.style.display = "block";
    document.querySelector("#tip-amount").innerHTML = `Tip: $${totalTip}`;
    document.querySelector("#total").innerHTML = `Total: $${total}`;
});

// close modal x
getSpan.addEventListener("click", () => {
    getModal.style.display = "none";
});

// close modal by clicking anywhere outside
window.onclick = (e) => {
    if (e.target === getModal) {
        getModal.style.display = "none";
    }
}