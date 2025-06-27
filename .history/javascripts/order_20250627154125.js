const submit_btns = document.getElementById("submit_btn");
const form = document.getElementById("booking-form");


document.getElementById("order").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("merch").value = document.getElementById('item_title').textContent;
    submit_btn.textContent = `Заказать за ${document.getElementById('price').textContent}`;
    submit_btn.disabled = false;
    form.style.display = "block";
})

submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Успешно!");
})