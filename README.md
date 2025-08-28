# Python Viet Nam Jobs

Chào mừng bạn đến với Python Viet Nam Jobs, một nền tảng tìm kiếm việc làm hiện đại được thiết kế để kết nối cộng đồng lập trình Python Việt Nam với các cơ hội việc làm hàng đầu trên cả nước.

![Python Viet Nam Jobs Screenshot](./public/screenshot.png)

## Giới thiệu

Python Viet Nam Jobs là một ứng dụng web được xây dựng bằng Next.js, được thiết kế để cung cấp trải nghiệm mượt mà và hiệu quả cho người tìm kiếm việc làm và nhà tuyển dụng. Ứng dụng tích hợp trí tuệ nhân tạo (AI) để cung cấp kết quả tìm kiếm phù hợp và chính xác hơn, giúp các lập trình viên Python tìm được công việc ưng ý nhất.

## Các tính năng chính

### Dành cho người tìm việc
- **Danh sách việc làm Python**: Duyệt qua danh sách các công việc lập trình Python mới nhất từ các công ty hàng đầu tại Việt Nam.
- **Tìm kiếm thông minh bằng AI**: Sử dụng bộ lọc được hỗ trợ bởi AI để tìm các công việc phù hợp nhất với kỹ năng và sở thích của bạn.
- **Ứng tuyển nhanh chóng**: Tải lên CV và để AI tự động bóc tách thông tin, giúp bạn ứng tuyển chỉ trong vài cú nhấp chuột.
- **Xác thực người dùng**: Đăng nhập an toàn bằng tài khoản Google của bạn thông qua Firebase Authentication.
- **Thiết kế đáp ứng (Responsive)**: Giao diện được tối ưu hóa cho cả thiết bị máy tính và di động.
- **Chi tiết công việc**: Xem mô tả chi tiết và yêu cầu cho từng vị trí.

### Dành cho nhà tuyển dụng
- **Đăng ký làm nhà tuyển dụng**: Gửi yêu cầu để có quyền đăng tin tuyển dụng sau khi đăng nhập.
- **Đăng tin tuyển dụng**: Nhà tuyển dụng đã được duyệt có thể dễ dàng đăng các vị trí tuyển dụng mới thông qua một biểu mẫu trực quan.
- **Bảng điều khiển Nhà tuyển dụng**: Quản lý các tin đã đăng và xem danh sách các ứng viên đã ứng tuyển.
- **Xem CV trực tuyến**: Dễ dàng xem CV của ứng viên ngay trên trình duyệt.

## Công nghệ sử dụng

Dự án này được xây dựng trên một ngăn xếp công nghệ hiện đại, tập trung vào hiệu suất và trải nghiệm người dùng.

- **Framework**: [Next.js](https://nextjs.org/) - Một framework React cho các ứng dụng web phía máy chủ (SSR) và tĩnh (SSG).
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/) - Giúp mã nguồn dễ đọc và bảo trì hơn.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Một framework CSS ưu tiên tiện ích để tạo kiểu nhanh chóng.
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/) - Một bộ sưu tập các thành phần giao diện người dùng có thể tái sử dụng.
- **Cơ sở dữ liệu & Xác thực**: [Firebase](https://firebase.google.com/) (Firestore, Authentication, Storage) - Cung cấp backend an toàn, thời gian thực và có khả năng mở rộng.
- **Tính năng AI**: [Genkit](https://firebase.google.com/docs/genkit) - Tích hợp các mô hình ngôn ngữ lớn để xử lý và lọc công việc.

## Bắt đầu

Để chạy dự án này trên máy cục bộ của bạn, hãy làm theo các bước sau:

### Yêu cầu

- [Node.js](https://nodejs.org/) (phiên bản 18.x trở lên)
- `npm` hoặc `yarn`

### Cài đặt

1. **Sao chép kho lưu trữ (repository)**
   ```bash
   git clone https://github.com/your-username/vn-jobs-hub.git
   cd vn-jobs-hub
   ```

2. **Cài đặt các gói phụ thuộc**
   ```bash
   npm install
   ```

3. **Thiết lập biến môi trường**

   Tạo một tệp `.env.local` ở thư mục gốc của dự án và thêm các khóa cấu hình Firebase của bạn.

   ```env
   # Biến môi trường Firebase - Thay thế bằng cấu hình của bạn
   NEXT_PUBLIC_FIREBASE_API_KEY="AIza..."
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
   NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="12345..."
   NEXT_PUBLIC_FIREBASE_APP_ID="1:12345..."

   # Biến môi trường Genkit (nếu có)
   GEMINI_API_KEY="your-gemini-api-key"
   ```

4. **Chạy máy chủ phát triển**
   ```bash
   npm run dev
   ```

   Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn để xem ứng dụng.

## Cấu trúc dự án

- `/src/app`: Chứa các tuyến đường và trang chính của ứng dụng theo App Router của Next.js.
- `/src/components`: Chứa các thành phần React có thể tái sử dụng.
- `/src/lib`: Chứa các hàm tiện ích và cấu hình Firebase.
- `/src/hooks`: Chứa các custom hooks của React.
- `/src/ai`: Chứa các flow Genkit cho các tính năng AI.
- `/public`: Chứa các tài sản tĩnh như hình ảnh và font chữ.

## Đóng góp

Chúng tôi hoan nghênh các đóng góp! Vui lòng tạo một issue hoặc pull request nếu bạn có ý tưởng cải thiện ứng dụng.
