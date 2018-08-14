// selectors/target buttons
const calcButton = document.querySelector("#calculate");
const selectAmount = document.querySelector("#amount");
const selectTip = document.querySelector("#tip-percent");
const getModal = document.getElementById("my-modal");
const getSpan = document.getElementsByClassName("close-modal")[0];

// math + open modal
calcButton.addEventListener("click", () => {
    let amount = selectAmount.value;
    console.log(amount);
    let tip = selectTip.value / 100;
    let totalTip = Math.round(amount * tip);
    let total = Math.round((+amount +totalTip) * 100) / 100;
    getModal.style.display = "block";
    document.querySelector("#tip-amount").innerHTML = `Tip: $${totalTip.toLocaleString("en")}`;
    document.querySelector("#total").innerHTML = `Total: $${total.toLocaleString("en")}`;
});

// close modal x
getSpan.addEventListener("click", () => {
    getModal.style.display = "none";
});

// close modal by esc key
window.onkeydown = (e) => {
    if (e.key === "Escape" || e.key === "Esc" || e.key === 27) {
        getModal.style.display = "none";
    }
}

// close modal by clicking anywhere outside of it
window.onclick = (e) => {
    if (e.target === getModal) {
        getModal.style.display = "none";
    }
}

// to-do
// commas when entering numbers