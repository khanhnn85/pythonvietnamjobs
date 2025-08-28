# VN Jobs Hub

Chào mừng bạn đến với VN Jobs Hub, một nền tảng tìm kiếm việc làm hiện đại được thiết kế để kết nối các nhà phát triển Python tài năng với các cơ hội việc làm hàng đầu tại Việt Nam.

![VN Jobs Hub Screenshot](./public/screenshot.png)

## Giới thiệu

VN Jobs Hub là một ứng dụng web được xây dựng bằng Next.js, được thiết kế để cung cấp trải nghiệm mượt mà và hiệu quả cho người dùng tìm kiếm việc làm trong lĩnh vực Python. Ứng dụng tích hợp trí tuệ nhân tạo (AI) để cung cấp kết quả tìm kiếm phù hợp và chính xác hơn.

## Các tính năng chính

- **Danh sách việc làm**: Duyệt qua danh sách các công việc Python mới nhất từ các công ty hàng đầu tại Việt Nam.
- **Tìm kiếm thông minh bằng AI**: Sử dụng bộ lọc được hỗ trợ bởi AI để tìm các công việc phù hợp nhất với kỹ năng và sở thích của bạn, vượt ra ngoài việc khớp từ khóa đơn giản.
- **Lưu công việc**: Đánh dấu các công việc bạn quan tâm để xem lại sau.
- **Xác thực người dùng**: Đăng nhập an toàn bằng tài khoản Google của bạn thông qua Firebase Authentication.
- **Thiết kế đáp ứng (Responsive)**: Giao diện được tối ưu hóa cho cả thiết bị máy tính và di động.
- **Chi tiết công việc**: Xem mô tả chi tiết và yêu cầu cho từng vị trí.
- **Trang liên hệ**: Dễ dàng gửi câu hỏi hoặc phản hồi qua biểu mẫu liên hệ.

## Công nghệ sử dụng

Dự án này được xây dựng trên một ngăn xếp công nghệ hiện đại, tập trung vào hiệu suất và trải nghiệm người dùng.

- **Framework**: [Next.js](https://nextjs.org/) - Một framework React cho các ứng dụng web phía máy chủ (SSR) và tĩnh (SSG).
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/) - Giúp mã nguồn dễ đọc và bảo trì hơn.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Một framework CSS ưu tiên tiện ích để tạo kiểu nhanh chóng.
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/) - Một bộ sưu tập các thành phần giao diện người dùng có thể tái sử dụng.
- **Xác thực**: [Firebase Authentication](https://firebase.google.com/docs/auth) - Cung cấp dịch vụ backend an toàn để xác thực người dùng.
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

   Tạo một tệp `.env.local` ở thư mục gốc của dự án và thêm các khóa cấu hình Firebase của bạn. Các khóa này có thể được tìm thấy trong tệp `src/lib/firebase.ts`.

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
