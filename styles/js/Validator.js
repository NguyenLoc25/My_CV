class FormValidator {
    constructor(formElement) {
        this.form = formElement;
        this.fields = this.form.querySelectorAll('input, textarea');
        this.setupListeners();
    }

    // Kiểm tra trường bắt buộc không được để trống
    isRequired(field) {
        return field.value.trim() !== ''; // Trả về true nếu không trống
    }

    // Kiểm tra email có hợp lệ không
    isEmail(field) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex kiểm tra email
        return emailPattern.test(field.value);
    }

    // Hàm kiểm tra từng trường
    validateField(field) {
        const formNotify = field.nextElementSibling; // Lấy phần tử thông báo lỗi (error-notify)

        // Bỏ qua nếu trường không phải là 'name' hoặc 'email'
        if (field.name === 'message') {
            return true; // Không kiểm tra trường message
        }

        // Kiểm tra trường "name" bắt buộc
        if (field.name === 'name' && !this.isRequired(field)) {
            field.classList.add('invalid');
            formNotify.textContent = 'Name is required';
            formNotify.style.display = 'block';
            return false;
        }

        // Kiểm tra trường "email" phải hợp lệ
        if (field.name === 'email') {
            if (!this.isRequired(field)) {
                field.classList.add('invalid');
                formNotify.textContent = 'Email is required';
                formNotify.style.display = 'block';
                return false;
            } else if (!this.isEmail(field)) {
                field.classList.add('invalid');
                formNotify.textContent = 'Not a valid email';
                formNotify.style.display = 'block';
                return false;
            }
        }

        // Nếu hợp lệ, xóa class invalid và ẩn thông báo lỗi
        field.classList.remove('invalid');
        formNotify.style.display = 'none';
        return true;
    }

    // Thêm sự kiện 'blur' cho mỗi trường
    setupListeners() {
        this.fields.forEach((field) => {
            field.addEventListener('blur', () => {
                this.validateField(field); // Kiểm tra trường khi rời khỏi
            });
        });

        // Kiểm tra form khi submit
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // Ngăn chặn gửi form ngay lập tức
            if (this.validateForm()) {
                alert('Form submitted successfully!'); // Thông báo thành công nếu tất cả hợp lệ
            }
        });
    }

    // Kiểm tra toàn bộ form khi submit
    validateForm() {
        let isValid = true;
        this.fields.forEach((field) => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        return isValid;
    }
}

// Xuất class để có thể sử dụng ở nơi khác
export default FormValidator;
