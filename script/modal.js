const buttonsOrder = document.querySelectorAll(".product__button-order");
const overlayOrder = document.querySelector(".overlay_order");

buttonsOrder.forEach((buttonOrder) => {
  buttonOrder.addEventListener("click", () => {
    overlayOrder.classList.add("overlay_active");
    const order = document.querySelector(".overlay_active");
    order.value = buttonOrder.dataset.order;
    console.log("order.value: ", order.value);
  });
});

overlayOrder.addEventListener("click", (event) => {
  const target = event.target;

  if (target === overlayOrder || target.closest(".modal__close")) {
    overlayOrder.classList.remove("overlay_active");
  }
});
