document.querySelectorAll(".item").forEach(item => {
  const img = item.querySelector(".open-popup");
  const popup = item.querySelector(".popup");
  const close = item.querySelector(".close");

  if (popup && close) {
    img.onclick = () => popup.style.display = "flex";
    close.onclick = () => popup.style.display = "none";

    popup.onclick = e => {
      if (e.target === popup) popup.style.display = "none";
    };
  }
});
