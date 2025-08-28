#!/bin/bash

# Script tự động triển khai ứng dụng Next.js với PM2
# Dừng ngay lập tức nếu có lệnh nào thất bại
set -e

# Tên ứng dụng trên PM2
APP_NAME="python-vietnam-jobs"

echo "Bắt đầu quá trình triển khai cho $APP_NAME..."

# 1. Kiểm tra và cài đặt PM2 nếu chưa có
if ! command -v pm2 &> /dev/null
then
    echo "PM2 chưa được cài đặt. Tiến hành cài đặt PM2 toàn cục..."
    npm install pm2 -g
else
    echo "PM2 đã được cài đặt."
fi

# 2. Cài đặt các gói phụ thuộc của dự án
echo "Đang cài đặt các gói phụ thuộc (npm install)..."
npm install

# 3. Build ứng dụng cho môi trường production
echo "Đang build ứng dụng (npm run build)..."
npm run build

# 4. Quản lý ứng dụng với PM2
echo "Quản lý ứng dụng với PM2..."

# Kiểm tra xem ứng dụng đã chạy trên PM2 chưa
if pm2 list | grep -q "$APP_NAME"; then
  echo "Ứng dụng '$APP_NAME' đã tồn tại. Tiến hành khởi động lại (restart)..."
  pm2 restart "$APP_NAME"
else
  echo "Ứng dụng '$APP_NAME' chưa tồn tại. Tiến hành khởi động mới (start)..."
  # Chạy ứng dụng với PM2
  # Cờ --name để đặt tên cho tiến trình
  # Cờ -- start để chạy file thực thi của Next.js
  pm2 start npm --name "$APP_NAME" -- start
fi

# Thiết lập PM2 tự khởi động cùng hệ thống (nếu cần)
# Bỏ comment dòng dưới nếu bạn muốn PM2 tự chạy khi reboot server
# pm2 startup

# Lưu lại danh sách tiến trình PM2
pm2 save

echo "--------------------------------------"
echo "Hoàn tất triển khai!"
echo "Ứng dụng '$APP_NAME' đang chạy trên PM2."
echo "Bạn có thể kiểm tra trạng thái bằng lệnh: pm2 status"
echo "Bạn có thể xem logs bằng lệnh: pm2 logs $APP_NAME"
echo "--------------------------------------"

