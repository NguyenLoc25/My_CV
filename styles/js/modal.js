class Modal {
    constructor() {}

    // Hàm hiển thị modal với animation
    showModal(modalElement) {
        modalElement.classList.add('show'); // Thêm class để kích hoạt animation
        modalElement.style.display = 'block'; // Đảm bảo modal được hiển thị
    }

    // Hàm ẩn modal với animation
    hideModal(modalElement) {
        modalElement.classList.remove('show'); // Loại bỏ class animation
        setTimeout(() => {
            modalElement.style.display = 'none'; // Đợi animation hoàn tất rồi ẩn modal
        }, 500); // Thời gian tương ứng với hiệu ứng CSS (0.5s)
    }

    // Hàm xử lý sự kiện khi nhấn ra ngoài modal
    closeModalOnOutsideClick(modalElement, event) {
        if (event.target === modalElement) {
            this.hideModal(modalElement);
        }
    }

    // Thêm event listener cho modal
    setupModalListeners(emailBtn, closeBtn, modalElement) {
        // Hiển thị modal khi nhấn nút
        emailBtn.addEventListener('click', () => {
            this.showModal(modalElement);
        });

        // Đóng modal khi nhấn vào nút X (icon ti-close)
        closeBtn.addEventListener('click', () => {
            this.hideModal(modalElement);
        });

        // Đóng modal khi nhấn ra ngoài modal
        window.addEventListener('click', (event) => {
            this.closeModalOnOutsideClick(modalElement, event);
        });
    }
}

// Xuất lớp để sử dụng ở các nơi khác
export default Modal;
