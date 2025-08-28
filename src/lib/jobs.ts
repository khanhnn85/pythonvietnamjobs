import type { JobPosting } from '@/ai/flows/filter-jobs';

export interface Job extends JobPosting {
  id: string;
  [key: string]: any; // Allow other properties like createdAt, recruiterId etc. from firestore
}

// This is now a static fallback and a source for initial SEO data.
// The primary source of truth will be Firestore.
// The recruiterId is a placeholder. In a real scenario, you'd replace this
// with the actual UID of the recruiter user from Firebase Auth.
const placeholderRecruiter = {
    recruiterId: 'O9flsM1A8vY1YVfucD8aHl4aXvE3', // Placeholder UID for khanhnn85@gmail.com
    recruiterEmail: 'khanhnn85@gmail.com',
    createdAt: new Date('2024-07-28T10:00:00Z'),
};

export const allJobs: Job[] = [
  {
    id: '1',
    title: 'Lập trình viên Python cấp cao',
    company: 'TechCorp Việt Nam',
    location: 'Thành phố Hồ Chí Minh',
    description: 'Tham gia vào đội ngũ sáng tạo của chúng tôi để xây dựng các dịch vụ backend có khả năng mở rộng bằng Python và Django.',
    fullDescription: 'TechCorp Việt Nam đang tìm kiếm một Lập trình viên Python cấp cao có kinh nghiệm để dẫn dắt việc phát triển nền tảng cốt lõi của chúng tôi. Bạn sẽ làm việc với một đội ngũ kỹ sư tài năng để thiết kế, phát triển và duy trì các hệ thống backend hiệu suất cao, đáng tin cậy và có khả năng mở rộng. Vai trò này mang lại cơ hội làm việc trong các dự án đầy thách thức và tạo ra tác động đáng kể.',
    requirements: 'Hơn 5 năm kinh nghiệm về Python, kiến thức vững chắc về Django hoặc Flask, kinh nghiệm với các API RESTful và thành thạo các cơ sở dữ liệu SQL như PostgreSQL. Kinh nghiệm với Docker và Kubernetes là một lợi thế.',
    ...placeholderRecruiter
  },
  {
    id: '2',
    title: 'Lập trình viên Python/Odoo',
    company: 'Innovate Solutions',
    location: 'Hà Nội',
    description: 'Tùy chỉnh và phát triển các mô-đun cho hệ thống Odoo ERP. Yêu cầu kỹ năng Python tốt.',
    fullDescription: 'Innovate Solutions đang tìm kiếm một Lập trình viên Python/Odoo để tham gia vào đội ngũ ERP của chúng tôi. Ứng viên lý tưởng sẽ chịu trách nhiệm thiết kế, phát triển và bảo trì các mô-đun Odoo. Bạn sẽ làm việc chặt chẽ với các nhà phân tích kinh doanh và các bên liên quan để hiểu các yêu cầu và cung cấp các giải pháp hiệu quả.',
    requirements: 'Hơn 2 năm kinh nghiệm phát triển Python và Odoo. Hiểu biết vững chắc về framework Odoo, PostgreSQL và XML-RPC. Có khả năng làm việc độc lập và theo nhóm.',
    ...placeholderRecruiter
  },
  {
    id: '3',
    title: 'Kỹ sư dữ liệu (Python, SQL)',
    company: 'Data Analytics Inc.',
    location: 'Đà Nẵng',
    description: 'Xây dựng và duy trì các đường ống dữ liệu và cơ sở hạ tầng cho nền tảng phân tích của chúng tôi.',
    fullDescription: 'Là một Kỹ sư dữ liệu tại Data Analytics Inc., bạn sẽ là một nhân tố chủ chốt trong đội ngũ dữ liệu của chúng tôi. Bạn sẽ chịu trách nhiệm thiết kế, xây dựng và tối ưu hóa các đường ống dữ liệu, đảm bảo chất lượng và tính sẵn sàng của dữ liệu cho các nhà khoa học dữ liệu và nhà phân tích của chúng tôi. Nếu bạn đam mê dữ liệu và thành thạo Python, chúng tôi rất muốn nghe từ bạn.',
    requirements: 'Hơn 3 năm kinh nghiệm làm Kỹ sư dữ liệu. Chuyên môn về Python, SQL và các quy trình ETL. Kinh nghiệm với các công nghệ dữ liệu lớn như Spark, Hadoop và Airflow. Kinh nghiệm về nền tảng đám mây (AWS, GCP hoặc Azure) là một lợi thế lớn.',
    ...placeholderRecruiter
  },
  {
    id: '4',
    title: 'Lập trình viên Python cấp thấp',
    company: 'Startup Hub',
    location: 'Thành phố Hồ Chí Minh',
    description: 'Một cơ hội thú vị cho một lập trình viên cấp thấp để phát triển kỹ năng của mình trong một môi trường startup năng động.',
    fullDescription: 'Startup Hub đang tìm kiếm một Lập trình viên Python cấp thấp năng động để tham gia vào đội ngũ đang phát triển của chúng tôi. Bạn sẽ có cơ hội làm việc trên nhiều phần khác nhau của sản phẩm, từ các API backend đến các kịch bản xử lý dữ liệu. Đây là một vai trò tuyệt vời cho những ai ham học hỏi và muốn đóng góp cho một đội ngũ năng động.',
    requirements: '1-2 năm kinh nghiệm với Python. Hiểu biết cơ bản về các framework web như Flask hoặc Django. Quen thuộc với Git và các khái niệm cơ sở dữ liệu cơ bản. Khao khát học hỏi và kỹ năng giải quyết vấn đề là điều cần thiết.',
    ...placeholderRecruiter
  },
  {
    id: '5',
    title: 'Kỹ sư AI/ML',
    company: 'AI First',
    location: 'Hà Nội',
    description: 'Phát triển và triển khai các mô hình học máy để giải quyết các vấn đề trong thế giới thực.',
    fullDescription: 'AI First đi đầu trong lĩnh vực nghiên cứu và ứng dụng trí tuệ nhân tạo. Chúng tôi đang tìm kiếm một Kỹ sư AI/ML tài năng để thiết kế, đào tạo và triển khai các mô hình học máy. Bạn sẽ làm việc trong các dự án tiên tiến trong các lĩnh vực như xử lý ngôn ngữ tự nhiên, thị giác máy tính và phân tích dự đoán.',
    requirements: 'Nền tảng vững chắc về Học máy và Học sâu. Thành thạo Python và các thư viện ML như TensorFlow, PyTorch và scikit-learn. Kinh nghiệm xử lý dữ liệu và kỹ thuật đặc trưng. Bằng Thạc sĩ hoặc Tiến sĩ trong một lĩnh vực liên quan là một lợi thế.',
    ...placeholderRecruiter
  },
  {
    id: '6',
    title: 'Kỹ sư Backend (Python/Go)',
    company: 'Global Fintech',
    location: 'Làm việc từ xa',
    description: 'Làm việc trên một nền tảng giao dịch tần suất cao sử dụng Python và Go.',
    fullDescription: 'Global Fintech đang tuyển dụng một Kỹ sư Backend để nâng cao các hệ thống giao dịch cốt lõi của chúng tôi. Vai trò này bao gồm làm việc với cả Python để phân tích dữ liệu và Go cho các microservice hiệu suất cao. Bạn sẽ là một phần của một đội ngũ phân tán xây dựng một nền tảng mạnh mẽ và có độ trễ thấp.',
    requirements: 'Hơn 4 năm kinh nghiệm phát triển backend. Thành thạo Python và/hoặc Go. Kinh nghiệm với kiến trúc microservice, gRPC và các hàng đợi thông báo như Kafka hoặc RabbitMQ. Kinh nghiệm trong ngành tài chính là một lợi thế đáng kể.',
    ...placeholderRecruiter
  },
  {
    id: '7',
    title: 'Lập trình viên Full-stack (Python/React)',
    company: 'E-commerce Leader',
    location: 'Thành phố Hồ Chí Minh',
    description: 'Phát triển các tính năng cho nền tảng thương mại điện tử hàng đầu của chúng tôi, sử dụng Python ở backend và React ở frontend.',
    fullDescription: 'Tham gia đội ngũ kỹ thuật tại E-commerce Leader và đóng góp vào một nền tảng được hàng triệu người sử dụng. Chúng tôi đang tìm kiếm một Lập trình viên Full-stack có thể làm việc thoải mái trên toàn bộ ngăn xếp công nghệ. Bạn sẽ xây dựng các tính năng mới cho người dùng, cải thiện hiệu suất backend và hợp tác với các quản lý sản phẩm và nhà thiết kế.',
    requirements: 'Hơn 3 năm kinh nghiệm phát triển full-stack. Kỹ năng tốt về Python (Django/Flask) và JavaScript (React). Kinh nghiệm với các công nghệ web hiện đại, API REST và cơ sở dữ liệu. Đam mê tạo ra trải nghiệm người dùng tuyệt vời.',
    ...placeholderRecruiter
  },
  {
    id: '8',
    title: 'Kỹ sư DevOps',
    company: 'Cloud Native VN',
    location: 'Đà Nẵng',
    description: 'Tự động hóa cơ sở hạ tầng và các đường ống triển khai của chúng tôi. Cần có kỹ năng viết kịch bản tốt bằng Python hoặc Bash.',
    fullDescription: 'Cloud Native VN đang tìm kiếm một Kỹ sư DevOps để giúp chúng tôi xây dựng và mở rộng cơ sở hạ tầng đám mây. Bạn sẽ chịu trách nhiệm về các đường ống CI/CD, cơ sở hạ tầng dưới dạng mã (IaC), giám sát và đảm bảo độ tin cậy của các dịch vụ của chúng tôi. Đây là một cơ hội tuyệt vời để làm việc với các công cụ và thực tiễn DevOps hiện đại.',
    requirements: 'Kinh nghiệm với các công cụ CI/CD (ví dụ: Jenkins, GitLab CI). Thành thạo viết kịch bản bằng Python hoặc Bash. Kinh nghiệm thực tế với Docker, Kubernetes và Terraform. Kiến thức vững chắc về một nhà cung cấp đám mây lớn (AWS, GCP, Azure).',
    ...placeholderRecruiter
  },
];
