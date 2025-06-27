const submit_btn = document.querySelectorAll(".submit-btn");
const form = document.getElementById("booking-form");
form.style.display = "none";


document.querySelectorAll("order-button").forEach((button, id) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("merch").value = document.getElementById('item_title').textContent;
        submit_btn[id].textContent = `Заказать за ${document.querySelectorAll('price').textContent}`;
        submit_btn.disabled = false;
        form.style.display = "block";
    })
})

submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Успешно!");
})