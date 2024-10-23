// imageToggle.js
class ImageToggle {
    constructor() {
        this.currentImageIndex = 0;
    }

    // Hàm chuyển đổi hình ảnh
    toggleImage(imageElement, imageArray) {
        this.currentImageIndex = (this.currentImageIndex + 1) % imageArray.length;
        imageElement.src = imageArray[this.currentImageIndex];
    }
}

// Xuất lớp để sử dụng ở các nơi khác
export default ImageToggle;
