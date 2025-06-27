document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".booking-form");
    const orderBtn = document.querySelector(".order-button");
    const merchInput = document.querySelector(".merch");
    const title = document.querySelector(".item-title");
    const price = document.querySelector(".price");
    const submitBtn = document.querySelector(".submit-btn");

    form.style.display = "none";

    orderBtn.addEventListener("click", (e) => {
        e.preventDefault();
        merchInput.value = title.textContent;
        submitBtn.textContent = `Заказать за ${price.textContent}`;
        submitBtn.disabled = false;
        form.style.display = "block";
    });

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Успешно!");
    });
});
