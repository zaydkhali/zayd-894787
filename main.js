// nav background
let header = document.querySelector("header");

window.addEventListener("scroll",() => {
header.classList.toggle("shadow", window.scrollY > 0)
})
let selectedPlan = '';

function selectPlan(plan) {
    selectedPlan = plan;
    document.getElementById('plan-title').innerText = `You selected the ${plan} Plan`;
}

function processPayment() {
    if (!selectedPlan) {
        alert('Please select a plan first.');
        return;
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    if (name && email && cardNumber && expiry && cvv) {
        document.getElementById('success-message').style.display = 'block';
    } else {
        alert('Please fill all the fields.');
    }
}
function toggleAnswer(faqId) {
    const answer = document.getElementById(`faq-answer-${faqId}`);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}