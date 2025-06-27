document.getElementById("order").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("merch").value = document.getElementById('item_title').textContent;
})