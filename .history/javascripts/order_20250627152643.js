document.getElementById("order").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("merch").value = e.target.textContent;
})