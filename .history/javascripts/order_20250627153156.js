document.getElementById("order").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("merch").value = document.getElementById('item_title').textContent;
    submit_btn = 
    document.getElementById("submit_btn").textContent = `Заказать за ${document.getElementById('price').textContent}`;
})