const modalContainer = document.querySelector("#modal-container");
const modal = document.querySelector("#modal");
const modalOpen = document.querySelector("#modal-open");
const close = document.querySelector("#close")

if (modal && modalOpen && close && modalContainer) {
    close.onclick = () => {
        modalContainer.classList.add('modal-container--hidden');
    }

    modalOpen.onclick = () => {
        modalContainer.classList.remove('modal-container--hidden');

        modal.classList.add('fadeIn');

        modal.onanimationend = () => {
            modal.classList.remove('fadeIn');
        }
    }
}