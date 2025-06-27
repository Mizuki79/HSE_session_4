const form= document.getElementById("ticketForm");
const submitButton = document.getElementById("submit");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Успешно!")
})

selectButton = document.getElementById("select");
selectButton.addEventListener("change", () => {
    switch (selectButton.value) {
        case "Стандарт":
            submitButton.textContent = "Оформить за 1500₽";
            submitButton.disabled = false;
            break;
        case "Семейный":
            submitButton.textContent = "Оформить за 4000₽";
            submitButton.disabled = false;
            break;
        case "Льготный":
            submitButton.disabled = false;
            break;
        default:
            submitButton.textContent = "Оформить";
            break;
            
    }
})

document.querySelectorAll(".reserve-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        selectButton.selectedIndex = btn.id;
        const event = new Event('change');
        selectButton.dispatchEvent(event);
    })
})