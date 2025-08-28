
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { User, Briefcase, FileText, CheckSquare, Search, Send, FileUp } from "lucide-react";

export default function GuidePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight">Hướng dẫn sử dụng</h1>
                <p className="mt-3 text-lg text-muted-foreground">
                    Tìm hiểu cách đăng tin và ứng tuyển hiệu quả trên Python Viet Nam Jobs.
                </p>
            </div>

            <div className="space-y-8">
                {/* Hướng dẫn cho nhà tuyển dụng */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                           <Briefcase className="h-8 w-8 text-primary" />
                           Dành cho Nhà tuyển dụng
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">
                                    <div className="flex items-center gap-2">
                                        <User className="h-5 w-5" /> Bước 1: Đăng nhập và Đăng ký quyền tuyển dụng
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed pl-2">
                                    <p>Đầu tiên, bạn cần đăng nhập vào hệ thống bằng tài khoản Google của mình bằng cách nhấp vào nút "Đăng nhập" ở góc trên bên phải.</p>
                                    <p className="mt-2">Sau khi đăng nhập, truy cập menu người dùng và chọn "Đăng ký làm nhà tuyển dụng". Điền các thông tin cần thiết về công ty của bạn và gửi yêu cầu. Yêu cầu của bạn sẽ được quản trị viên xem xét.</p>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">
                                     <div className="flex items-center gap-2">
                                        <CheckSquare className="h-5 w-5" /> Bước 2: Đăng tin tuyển dụng
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed pl-2">
                                    <p>Khi yêu cầu của bạn được duyệt, tài khoản của bạn sẽ có quyền đăng tin. Bạn có thể truy cập "Bảng điều khiển" hoặc chọn "Đăng tin mới" từ menu người dùng.</p>
                                    <p className="mt-2">Điền đầy đủ và chi tiết các thông tin về vị trí công việc, mô tả, yêu cầu để thu hút các ứng viên phù hợp nhất.</p>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">
                                     <div className="flex items-center gap-2">
                                        <FileText className="h-5 w-5" /> Bước 3: Quản lý ứng viên
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed pl-2">
                                    <p>Trong "Bảng điều khiển Nhà tuyển dụng", bạn sẽ thấy danh sách các công việc đã đăng. Nhấp vào nút "Xem ứng viên" để xem danh sách tất cả các ứng viên đã nộp đơn.</p>
                                    <p className="mt-2">Bạn có thể xem thông tin chi tiết và nhấp vào nút "Xem CV" để xem hồ sơ của ứng viên trực tuyến.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                {/* Hướng dẫn cho ứng viên */}
                 <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-2xl">
                           <Send className="h-8 w-8 text-primary" />
                            Dành cho Ứng viên
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">
                                     <div className="flex items-center gap-2">
                                        <Search className="h-5 w-5" /> Bước 1: Tìm kiếm việc làm
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed pl-2">
                                    <p>Sử dụng thanh tìm kiếm ở trang chủ để tìm kiếm công việc theo chức danh, kỹ năng, hoặc địa điểm. Bạn cũng có thể duyệt qua toàn bộ danh sách các công việc mới nhất.</p>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">
                                     <div className="flex items-center gap-2">
                                        <FileUp className="h-5 w-5" /> Bước 2: Ứng tuyển
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-base leading-relaxed pl-2">
                                    <p>Khi tìm thấy công việc ưng ý, hãy nhấp vào để xem chi tiết. Sau đó, nhấp vào nút "Ứng tuyển ngay".</p>
                                    <p className="mt-2">Một hộp thoại sẽ hiện ra. Vui lòng tải lên CV của bạn (định dạng PDF hoặc Word). Hệ thống AI của chúng tôi sẽ cố gắng tự động điền các thông tin như Họ tên, Email, SĐT giúp bạn. Hãy kiểm tra lại thông tin và chỉnh sửa nếu cần, sau đó nhấn "Gửi đơn ứng tuyển".</p>
                                     <p className="mt-2">Bạn không cần tạo tài khoản để ứng tuyển, giúp quá trình diễn ra nhanh chóng và thuận tiện.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
