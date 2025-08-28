
import type { BlogPost } from './blog';

type SeedBlogPost = Omit<BlogPost, 'id' | 'authorId' | 'authorName' | 'createdAt' | 'updatedAt'>;

export const seedBlogPosts: SeedBlogPost[] = [
  {
    title: 'Bài 1: Cài đặt Python và Viết chương trình "Hello, World!"',
    slug: 'python-co-ban-bai-1-cai-dat-hello-world',
    category: 'python-co-ban',
    coverImage: 'https://picsum.photos/seed/python1/1200/630',
    excerpt: 'Hướng dẫn chi tiết từng bước để cài đặt môi trường Python trên máy tính của bạn và viết chương trình đầu tiên - một cột mốc quan trọng cho mọi lập trình viên.',
    content: `
      <h2>Chào mừng đến với thế giới Python!</h2>
      <p>Python là một ngôn ngữ lập trình bậc cao, thông dịch, hướng đối tượng và rất dễ học. Nó được sử dụng rộng rãi trong nhiều lĩnh vực như phát triển web, khoa học dữ liệu, trí tuệ nhân tạo, và tự động hóa. Trong bài học đầu tiên này, chúng ta sẽ cùng nhau cài đặt Python và viết chương trình kinh điển "Hello, World!".</p>
      
      <h3>Bước 1: Tải và Cài đặt Python</h3>
      <ol>
        <li>Truy cập trang chủ chính thức của Python tại <a href="https://www.python.org/downloads/" target="_blank">python.org/downloads</a>.</li>
        <li>Website sẽ tự động nhận diện hệ điều hành của bạn (Windows, macOS, Linux) và đề xuất phiên bản mới nhất. Hãy nhấn vào nút "Download Python".</li>
        <li>Chạy tệp cài đặt vừa tải về. <strong>Lưu ý quan trọng cho người dùng Windows:</strong> Ở màn hình cài đặt đầu tiên, hãy nhớ tick vào ô "Add Python to PATH" trước khi nhấn "Install Now". Điều này sẽ giúp bạn chạy Python từ bất kỳ đâu trong Command Prompt.</li>
        <li>Làm theo các hướng dẫn trên màn hình để hoàn tất quá trình cài đặt.</li>
      </ol>
      
      <h3>Bước 2: Kiểm tra Cài đặt</h3>
      <p>Sau khi cài đặt xong, hãy mở Terminal (trên macOS/Linux) hoặc Command Prompt (trên Windows) và gõ lệnh sau:</p>
      <pre><code class="language-bash">python --version</code></pre>
      <p>Nếu quá trình cài đặt thành công, bạn sẽ thấy phiên bản Python bạn vừa cài đặt hiển thị trên màn hình (ví dụ: <code>Python 3.12.4</code>).</p>

      <h3>Bước 3: Viết chương trình "Hello, World!"</h3>
      <p>Đây là phần thú vị nhất! Chúng ta sẽ sử dụng trình thông dịch (interpreter) của Python để chạy lệnh đầu tiên.</p>
      <ol>
        <li>Trong Terminal hoặc Command Prompt, gõ <code>python</code> và nhấn Enter. Bạn sẽ thấy dấu nhắc lệnh thay đổi thành <code>>>></code>. Đây là môi trường tương tác của Python.</li>
        <li>Bây giờ, hãy gõ chính xác dòng mã sau và nhấn Enter:</li>
      </ol>
      <pre><code class="language-python">print("Hello, World!")</code></pre>
      <p>Ngay lập tức, bạn sẽ thấy kết quả:</p>
      <pre><code>Hello, World!</code></pre>
      
      <h4>Chuyện gì đã xảy ra?</h4>
      <ul>
        <li><code>print()</code> là một hàm (function) được tích hợp sẵn trong Python.</li>
        <li>Hàm này nhận một hoặc nhiều đối số và hiển thị chúng ra màn hình.</li>
        <li><code>"Hello, World!"</code> là một chuỗi ký tự (string). Trong Python, chuỗi được đặt trong dấu ngoặc kép <code>" "</code> hoặc ngoặc đơn <code>' '</code>.</li>
      </ul>

      <p><strong>Chúc mừng!</strong> Bạn đã viết và chạy thành công chương trình Python đầu tiên của mình. Đây là một bước khởi đầu nhỏ nhưng vô cùng quan trọng trên hành trình chinh phục ngôn ngữ lập trình mạnh mẽ này. Trong các bài học tiếp theo, chúng ta sẽ khám phá sâu hơn về biến, kiểu dữ liệu, và các khái niệm cơ bản khác.</p>
    `,
  },
  {
    title: 'Bài 2: Biến và Các Kiểu Dữ liệu Cơ bản',
    slug: 'python-co-ban-bai-2-bien-va-kieu-du-lieu',
    category: 'python-co-ban',
    coverImage: 'https://picsum.photos/seed/python2/1200/630',
    excerpt: 'Tìm hiểu về biến - "những chiếc hộp" chứa dữ liệu trong lập trình, và khám phá các kiểu dữ liệu cơ bản nhất trong Python: số nguyên, số thực, chuỗi và boolean.',
    content: `
      <h2>Lưu trữ thông tin với Biến (Variables)</h2>
      <p>Trong lập trình, chúng ta cần một cách để lưu trữ và quản lý dữ liệu. Đó là lúc biến phát huy tác dụng. Bạn có thể hình dung biến như một chiếc hộp được dán nhãn, và bạn có thể đặt các giá trị khác nhau vào chiếc hộp đó.</p>
      <p>Để tạo một biến trong Python, bạn chỉ cần đặt tên cho nó và dùng dấu bằng (<code>=</code>) để gán một giá trị:</p>
      <pre><code class="language-python">
# Tạo một biến tên là 'ten' và gán giá trị chuỗi "An"
ten = "An"

# Tạo biến 'tuoi' và gán giá trị số 25
tuoi = 25

# In giá trị của biến ra màn hình
print(ten)
print(tuoi)
      </code></pre>
      <p>Quy tắc đặt tên biến:</p>
      <ul>
        <li>Tên biến chỉ có thể chứa chữ cái, số, và dấu gạch dưới (<code>_</code>).</li>
        <li>Tên biến không được bắt đầu bằng một con số.</li>
        <li>Tên biến có phân biệt chữ hoa, chữ thường (<code>tuoi</code> khác với <code>Tuoi</code>).</li>
        <li>Nên đặt tên biến có ý nghĩa để code dễ đọc hơn (ví dụ: <code>user_name</code> thay vì <code>x</code>).</li>
      </ul>

      <h2>Các Kiểu Dữ liệu (Data Types) Cơ bản</h2>
      <p>Python có thể xử lý nhiều loại dữ liệu khác nhau. Mỗi giá trị trong Python đều thuộc về một kiểu dữ liệu nào đó. Dưới đây là những kiểu cơ bản nhất:</p>
      
      <h3>1. Số nguyên (Integer - <code>int</code>)</h3>
      <p>Là các số nguyên, không có phần thập phân. Ví dụ:</p>
      <pre><code class="language-python">
so_luong = 10
nhiet_do = -5
print(type(so_luong)) # Kết quả: <class 'int'>
      </code></pre>
      <p>Hàm <code>type()</code> giúp chúng ta kiểm tra kiểu dữ liệu của một biến.</p>

      <h3>2. Số thực (Floating-Point - <code>float</code>)</h3>
      <p>Là các số có phần thập phân.</p>
      <pre><code class="language-python">
diem_trung_binh = 8.5
gia_xang = 25500.50
print(type(diem_trung_binh)) # Kết quả: <class 'float'>
      </code></pre>

      <h3>3. Chuỗi ký tự (String - <code>str</code>)</h3>
      <p>Là một dãy các ký tự, được đặt trong dấu ngoặc đơn (<code>'</code>) hoặc ngoặc kép (<code>"</code>).</p>
      <pre><code class="language-python">
loi_chao = "Xin chào các bạn"
mon_hoc = 'Lập trình Python'
print(type(loi_chao)) # Kết quả: <class 'str'>
      </code></pre>

      <h3>4. Logic (Boolean - <code>bool</code>)</h3>
      <p>Chỉ có hai giá trị: <code>True</code> (đúng) hoặc <code>False</code> (sai). Kiểu dữ liệu này rất quan trọng trong việc đưa ra quyết định và kiểm tra điều kiện.</p>
      <pre><code class="language-python">
da_dang_nhap = True
con_hang = False
print(type(da_dang_nhap)) # Kết quả: <class 'bool'>
      </code></pre>

      <p>Python là một ngôn ngữ có kiểu dữ liệu động (dynamically typed), nghĩa là bạn không cần khai báo kiểu dữ liệu của biến trước. Trình thông dịch sẽ tự động xác định kiểu dữ liệu dựa trên giá trị bạn gán cho nó.</p>
      <p>Trong bài tiếp theo, chúng ta sẽ tìm hiểu về các phép toán cơ bản có thể thực hiện trên các kiểu dữ liệu này.</p>
    `,
  },
  {
    title: 'Bài 3: Các Phép toán Cơ bản trong Python',
    slug: 'python-co-ban-bai-3-cac-phep-toan',
    category: 'python-co-ban',
    coverImage: 'https://picsum.photos/seed/python3/1200/630',
    excerpt: 'Khám phá cách thực hiện các phép toán số học (cộng, trừ, nhân, chia), phép so sánh (lớn hơn, nhỏ hơn, bằng), và phép toán logic (AND, OR, NOT) trong Python.',
    content: `
        <h2>Làm việc với Số: Phép toán số học</h2>
        <p>Python hỗ trợ đầy đủ các phép toán số học cơ bản mà bạn đã quen thuộc.</p>
        <pre><code class="language-python">
a = 10
b = 3

tong = a + b       # Phép cộng: 13
hieu = a - b       # Phép trừ: 7
tich = a * b       # Phép nhân: 30
thuong = a / b     # Phép chia: 3.333...

chia_lay_nguyen = a // b  # Phép chia lấy phần nguyên: 3
chia_lay_du = a % b       # Phép chia lấy phần dư (modulo): 1
luy_thua = a ** b     # Phép lũy thừa (a mũ b): 1000

print(f"Tổng: {tong}")
print(f"Thương: {thuong}")
print(f"Phần dư: {chia_lay_du}")
print(f"Lũy thừa: {luy_thua}")
        </code></pre>
        <p>Lưu ý: Phép chia (<code>/</code>) luôn trả về một số thực (float), ngay cả khi hai số chia hết cho nhau.</p>

        <h2>Đưa ra quyết định: Phép toán so sánh</h2>
        <p>Các phép toán so sánh được dùng để so sánh hai giá trị. Kết quả của chúng luôn là một giá trị Boolean (<code>True</code> hoặc <code>False</code>).</p>
        <ul>
            <li><code>==</code>: Bằng nhau</li>
            <li><code>!=</code>: Không bằng nhau</li>
            <li><code>></code>: Lớn hơn</li>
            <li><code><</code>: Nhỏ hơn</li>
            <li><code>>=</code>: Lớn hơn hoặc bằng</li>
            <li><code><=</code>: Nhỏ hơn hoặc bằng</li>
        </ul>
        <pre><code class="language-python">
x = 5
y = 10

print(x == y)  # False
print(x != y)  # True
print(y > x)   # True
print(x >= 5)  # True
        </code></pre>
        <p>Những phép toán này là nền tảng cho các câu lệnh điều kiện như <code>if</code>, <code>else</code> mà chúng ta sẽ học sau.</p>
        
        <h2>Kết hợp điều kiện: Phép toán Logic</h2>
        <p>Đôi khi chúng ta cần kiểm tra nhiều điều kiện cùng một lúc. Python cung cấp ba toán tử logic chính:</p>
        <ul>
            <li><code>and</code>: Trả về <code>True</code> nếu <strong>cả hai</strong> vế đều đúng.</li>
            <li><code>or</code>: Trả về <code>True</code> nếu <strong>ít nhất một</strong> trong hai vế đúng.</li>
            <li><code>not</code>: Đảo ngược giá trị Boolean (<code>True</code> thành <code>False</code> và ngược lại).</li>
        </ul>
        <pre><code class="language-python">
tuoi = 20
co_bang_lai = True

# Điều kiện để được lái xe ô tô (ví dụ)
duoc_lai_xe = (tuoi >= 18) and (co_bang_lai == True)
print(f"Được phép lái xe: {duoc_lai_xe}") # True

nhiet_do = 35
troi_mua = False

# Điều kiện để đi bơi
nen_di_boi = (nhiet_do > 30) or (not troi_mua)
print(f"Nên đi bơi: {nen_di_boi}") # True
        </code></pre>
        <p>Việc nắm vững các phép toán này là cực kỳ quan trọng vì chúng xuất hiện trong hầu hết mọi chương trình máy tính. Hãy thử tự tạo ra các biến và thực hành với các phép toán trên nhé!</p>
    `,
    },
    {
        title: 'Bài 4: Làm việc với Chuỗi (String)',
        slug: 'python-co-ban-bai-4-lam-viec-voi-chuoi',
        category: 'python-co-ban',
        coverImage: 'https://picsum.photos/seed/python4/1200/630',
        excerpt: 'Khám phá các thao tác phổ biến với chuỗi như nối chuỗi, định dạng f-string, truy cập ký tự, cắt chuỗi và các phương thức hữu ích như upper(), lower(), strip().',
        content: `
            <h2>Chuỗi là gì?</h2>
            <p>Chuỗi (string) là một trong những kiểu dữ liệu được sử dụng nhiều nhất. Về cơ bản, nó là một chuỗi các ký tự. Trong Python, bạn có thể tạo chuỗi bằng cách đặt văn bản vào trong dấu ngoặc đơn <code>''</code> hoặc ngoặc kép <code>""</code>.</p>
            
            <h3>1. Nối chuỗi (Concatenation)</h3>
            <p>Bạn có thể ghép các chuỗi lại với nhau bằng toán tử <code>+</code>.</p>
            <pre><code class="language-python">
ho = "Nguyễn"
ten = "Văn An"
ho_va_ten = ho + " " + ten
print(ho_va_ten) # Kết quả: Nguyễn Văn An
            </code></pre>

            <h3>2. Định dạng chuỗi với f-string</h3>
            <p>f-string (chuỗi định dạng) là cách hiện đại và tiện lợi nhất để chèn giá trị của biến vào trong một chuỗi. Bạn chỉ cần đặt chữ <code>f</code> trước dấu ngoặc mở đầu của chuỗi và đặt tên biến trong cặp dấu ngoặc nhọn <code>{}</code>.</p>
            <pre><code class="language-python">
ten_sach = "Lập trình Python"
gia_tien = 250000
thong_bao = f"Cuốn sách '{ten_sach}' có giá {gia_tien} VNĐ."
print(thong_bao)
# Kết quả: Cuốn sách 'Lập trình Python' có giá 250000 VNĐ.
            </code></pre>

            <h3>3. Truy cập ký tự và Cắt chuỗi (Slicing)</h3>
            <p>Bạn có thể coi chuỗi như một danh sách các ký tự. Mỗi ký tự có một chỉ số (index), bắt đầu từ 0.</p>
            <pre><code class="language-python">
loi_chao = "Xin chào"
#          01234567

print(loi_chao[0]) # X
print(loi_chao[4]) # c

# Cắt chuỗi: lấy một phần của chuỗi
# cu_phap: [start:stop:step]
print(loi_chao[0:3]) # Xin (lấy từ index 0 đến trước index 3)
print(loi_chao[4:])  # chào (lấy từ index 4 đến hết)
print(loi_chao[:3])  # Xin (lấy từ đầu đến trước index 3)
            </code></pre>

            <h3>4. Một số phương thức (method) chuỗi hữu ích</h3>
            <p>Phương thức là các hàm thuộc về một đối tượng. Chuỗi trong Python có rất nhiều phương thức tiện lợi.</p>
            <pre><code class="language-python">
van_ban = "  Python Thật Vui!  "

print(len(van_ban))               # Lấy độ dài chuỗi: 21
print(van_ban.upper())            # Chuyển thành chữ hoa: "  PYTHON THẬT VUI!  "
print(van_ban.lower())            # Chuyển thành chữ thường: "  python thật vui!  "
print(van_ban.strip())            # Xóa khoảng trắng ở đầu và cuối: "Python Thật Vui!"
print(van_ban.replace("Vui", "Tuyệt")) # Thay thế chuỗi: "  Python Thật Tuyệt!  "
print("Vui" in van_ban)           # Kiểm tra chuỗi con có tồn tại không: True
            </code></pre>
            <p>Làm chủ các thao tác với chuỗi sẽ giúp bạn xử lý văn bản, dữ liệu đầu vào từ người dùng và hiển thị thông tin một cách hiệu quả. Hãy thử nghiệm với các phương thức khác nhau để hiểu rõ hơn về chúng!</p>
        `,
    },
    {
        title: 'Bài 5: Cấu trúc dữ liệu List (Danh sách)',
        slug: 'python-co-ban-bai-5-cau-truc-du-lieu-list',
        category: 'python-co-ban',
        coverImage: 'https://picsum.photos/seed/python5/1200/630',
        excerpt: 'Giới thiệu về List - cấu trúc dữ liệu linh hoạt và mạnh mẽ nhất trong Python để lưu trữ một tập hợp các mục. Học cách tạo, truy cập, sửa đổi và duyệt qua các phần tử trong List.',
        content: `
            <h2>List là gì?</h2>
            <p>List (danh sách) là một cấu trúc dữ liệu cho phép bạn lưu trữ một tập hợp các mục theo một thứ tự nhất định. Các mục trong list có thể thuộc nhiều kiểu dữ liệu khác nhau. List rất linh hoạt và được sử dụng cực kỳ phổ biến trong Python.</p>
            <p>List được tạo bằng cách đặt các phần tử bên trong cặp dấu ngoặc vuông <code>[]</code>, cách nhau bởi dấu phẩy.</p>
            <pre><code class="language-python">
# Một list chứa các chuỗi
trai_cay = ["táo", "chuối", "cam"]

# Một list chứa các số
diem_so = [10, 9, 8, 7]

# Một list chứa nhiều kiểu dữ liệu khác nhau
thong_tin_ca_nhan = ["An", 25, "Hà Nội", True]

# Một list rỗng
nhiem_vu = []
            </code></pre>

            <h3>1. Truy cập phần tử</h3>
            <p>Tương tự như chuỗi, bạn có thể truy cập các phần tử trong list bằng chỉ số (index), bắt đầu từ 0.</p>
            <pre><code class="language-python">
trai_cay = ["táo", "chuối", "cam", "dâu"]
print(trai_cay[0])  # táo
print(trai_cay[2])  # cam
print(trai_cay[-1]) # Lấy phần tử cuối cùng: dâu
            </code></pre>

            <h3>2. Thay đổi phần tử</h3>
            <p>List là một cấu trúc "khả biến" (mutable), nghĩa là bạn có thể thay đổi nội dung của nó sau khi đã tạo.</p>
            <pre><code class="language-python">
trai_cay[1] = "nho" # Thay "chuối" bằng "nho"
print(trai_cay) # ['táo', 'nho', 'cam', 'dâu']
            </code></pre>

            <h3>3. Các phương thức phổ biến của List</h3>
            <p>List có nhiều phương thức hữu ích để thêm, xóa, và sắp xếp các phần tử.</p>
            <pre><code class="language-python">
# Bắt đầu với một list
nhiem_vu = ["Đi chợ", "Lau nhà"]

# Thêm một phần tử vào cuối list
nhiem_vu.append("Nấu cơm")
print(nhiem_vu) # ['Đi chợ', 'Lau nhà', 'Nấu cơm']

# Chèn một phần tử vào vị trí cụ thể
nhiem_vu.insert(1, "Rửa bát")
print(nhiem_vu) # ['Đi chợ', 'Rửa bát', 'Lau nhà', 'Nấu cơm']

# Xóa một phần tử theo giá trị
nhiem_vu.remove("Lau nhà")
print(nhiem_vu) # ['Đi chợ', 'Rửa bát', 'Nấu cơm']

# Xóa một phần tử theo chỉ số và trả về giá trị đó
viec_da_lam = nhiem_vu.pop(0)
print(f"Việc đã làm: {viec_da_lam}") # Việc đã làm: Đi chợ
print(nhiem_vu) # ['Rửa bát', 'Nấu cơm']

# Sắp xếp list
so = [3, 1, 4, 1, 5, 9, 2]
so.sort()
print(so) # [1, 1, 2, 3, 4, 5, 9]

# Đảo ngược list
so.reverse()
print(so) # [9, 5, 4, 3, 2, 1, 1]

# Lấy độ dài của list
print(len(so)) # 7
            </code></pre>
            <p>List là một công cụ cực kỳ mạnh mẽ để tổ chức dữ liệu. Trong bài tiếp theo, chúng ta sẽ học cách sử dụng vòng lặp để duyệt qua từng phần tử trong list một cách tự động.</p>
        `,
    },
    {
        title: 'Bài 6: Vòng lặp For và Lặp qua List',
        slug: 'python-co-ban-bai-6-vong-lap-for',
        category: 'python-co-ban',
        coverImage: 'https://picsum.photos/seed/python6/1200/630',
        excerpt: 'Học cách tự động hóa các tác vụ lặp đi lặp lại bằng vòng lặp "for". Đây là một trong những khái niệm nền tảng và mạnh mẽ nhất trong lập trình, đặc biệt khi làm việc với List.',
        content: `
            <h2>Tại sao cần vòng lặp?</h2>
            <p>Hãy tưởng tượng bạn có một danh sách (list) gồm 100 tên và bạn muốn in lời chào đến từng người. Viết 100 lệnh <code>print()</code> sẽ rất tốn thời gian và không hiệu quả. Vòng lặp cho phép chúng ta thực thi một khối lệnh lặp đi lặp lại cho mỗi phần tử trong một chuỗi hoặc một tập hợp.</p>
            
            <h3>Cú pháp vòng lặp <code>for</code></h3>
            <p>Vòng lặp <code>for</code> trong Python có cú pháp rất tự nhiên và dễ đọc:</p>
            <pre><code class="language-python">
for bien_tam_thoi in doi_tuong_lap:
    # Khối lệnh được thực thi
    # Lưu ý: khối lệnh này phải được thụt vào đầu dòng
            </code></pre>
            
            <h3>Lặp qua một List</h3>
            <p>Đây là cách sử dụng phổ biến nhất của vòng lặp <code>for</code>.</p>
            <pre><code class="language-python">
trai_cay = ["táo", "chuối", "cam"]

for mot_loai_trai_cay in trai_cay:
    print(f"Tôi thích ăn {mot_loai_trai_cay}")

# Kết quả:
# Tôi thích ăn táo
# Tôi thích ăn chuối
# Tôi thích ăn cam
            </code></pre>
            <p><strong>Cách hoạt động:</strong></p>
            <ol>
                <li>Python lấy phần tử đầu tiên của list <code>trai_cay</code> (là "táo") và gán nó cho biến tạm thời <code>mot_loai_trai_cay</code>.</li>
                <li>Khối lệnh bên trong vòng lặp được thực thi (<code>print()</code>).</li>
                <li>Sau khi xong, Python lấy phần tử tiếp theo ("chuối"), gán lại cho <code>mot_loai_trai_cay</code> và thực thi lại khối lệnh.</li>
                <li>Quá trình này tiếp tục cho đến khi tất cả các phần tử trong list đã được duyệt qua.</li>
            </ol>

            <h3>Vòng lặp với hàm <code>range()</code></h3>
            <p>Nếu bạn muốn lặp một số lần nhất định, hàm <code>range()</code> rất hữu ích. Nó tạo ra một chuỗi các con số.</p>
            <pre><code class="language-python">
# Lặp 5 lần, i sẽ có giá trị từ 0 đến 4
for i in range(5):
    print(f"Lần lặp thứ {i}")

# range(start, stop, step)
# In ra các số chẵn từ 2 đến 8
for so_chan in range(2, 10, 2):
    print(so_chan) # 2, 4, 6, 8
            </code></pre>

            <h3>Ví dụ: Tính tổng các số trong một list</h3>
            <pre><code class="language-python">
diem_so = [8, 9, 7, 10, 6]
tong_diem = 0

for diem in diem_so:
    tong_diem = tong_diem + diem # Hoặc viết gọn: tong_diem += diem

print(f"Tổng số điểm là: {tong_diem}") # Tổng số điểm là: 40
            </code></pre>
            <p>Vòng lặp <code>for</code> là một khái niệm cốt lõi trong lập trình. Hãy thực hành bằng cách tạo ra các list của riêng bạn và viết vòng lặp để xử lý chúng, ví dụ như tìm phần tử lớn nhất, hoặc tạo một list mới dựa trên list cũ.</p>
        `,
    },
    {
        title: 'Bài 7: Câu lệnh điều kiện If, Elif, Else',
        slug: 'python-co-ban-bai-7-cau-lenh-dieu-kien-if-else',
        category: 'python-co-ban',
        coverImage: 'https://picsum.photos/seed/python7/1200/630',
        excerpt: 'Dạy cho chương trình của bạn cách "ra quyết định". Học cách sử dụng câu lệnh if, elif, và else để điều khiển luồng thực thi của code dựa trên các điều kiện đúng hoặc sai.',
        content: `
            <h2>Để chương trình thông minh hơn</h2>
            <p>Trong thực tế, các chương trình hiếm khi chạy một mạch từ trên xuống dưới. Chúng thường phải đưa ra các quyết định dựa trên dữ liệu đầu vào hoặc một trạng thái nào đó. Ví dụ: "Nếu người dùng đã đăng nhập, hiển thị trang cá nhân. Nếu không, hiển thị nút đăng nhập." Câu lệnh <code>if</code> giúp chúng ta làm điều đó.</p>
            
            <h3>Câu lệnh <code>if</code> đơn giản</h3>
            <p>Khối lệnh bên trong <code>if</code> chỉ được thực thi nếu điều kiện là <code>True</code>.</p>
            <pre><code class="language-python">
nhiet_do = 32

if nhiet_do > 30:
    print("Trời nóng quá!")
    print("Hãy đi bơi thôi.")

# Dòng lệnh này luôn được thực thi vì nó nằm ngoài khối if
print("Chúc một ngày tốt lành!")
            </code></pre>
            <p>Lưu ý phần thụt vào đầu dòng. Python sử dụng việc thụt lề để xác định các khối code. Tất cả các dòng được thụt vào sau dấu hai chấm (<code>:</code>) đều thuộc về khối <code>if</code>.</p>

            <h3>Câu lệnh <code>if-else</code></h3>
            <p>Sử dụng <code>else</code> để chỉ định một khối lệnh sẽ được thực thi nếu điều kiện của <code>if</code> là <code>False</code>.</p>
            <pre><code class="language-python">
tuoi = 16

if tuoi >= 18:
    print("Bạn đã đủ tuổi trưởng thành.")
else:
    print("Bạn chưa đủ tuổi trưởng thành.")
            </code></pre>
            
            <h3>Chuỗi <code>if-elif-else</code> (The if-elif-else Chain)</h3>
            <p>Khi bạn có nhiều hơn hai khả năng, bạn có thể sử dụng <code>elif</code> (viết tắt của "else if") để kiểm tra các điều kiện tiếp theo.</p>
            <pre><code class="language-python">
diem = 7.5

if diem >= 8.5:
    print("Học sinh Giỏi")
elif diem >= 6.5:
    print("Học sinh Khá")
elif diem >= 5.0:
    print("Học sinh Trung bình")
else:
    print("Học sinh Yếu")

# Kết quả: Học sinh Khá
            </code></pre>
            <p>Python sẽ kiểm tra các điều kiện từ trên xuống dưới. Ngay khi tìm thấy một điều kiện đúng, nó sẽ thực thi khối lệnh tương ứng và bỏ qua tất cả các điều kiện <code>elif</code> và <code>else</code> còn lại.</p>

            <h3>Kết hợp với vòng lặp</h3>
            <p>Câu lệnh điều kiện thường được sử dụng bên trong vòng lặp để xử lý các phần tử khác nhau theo những cách khác nhau.</p>
            <pre><code class="language-python">
so_nguyen = [1, -4, 0, 5, -2, 3]

for so in so_nguyen:
    if so > 0:
        print(f"{so} là số dương")
    elif so < 0:
        print(f"{so} là số âm")
    else:
        print(f"{so} là số không")
            </code></pre>
            <p>Nắm vững câu lệnh <code>if-elif-else</code> là bạn đã có trong tay một trong những công cụ mạnh mẽ nhất để xây dựng logic và điều khiển luồng cho chương trình của mình.</p>
        `,
    },
    {
        title: 'Bài 8: Cấu trúc dữ liệu Dictionary (Từ điển)',
        slug: 'python-co-ban-bai-8-dictionary',
        category: 'python-co-ban',
        coverImage: 'https://picsum.photos/seed/python8/1200/630',
        excerpt: 'Tìm hiểu về Dictionary, một cấu trúc dữ liệu cực kỳ hữu ích để lưu trữ thông tin dưới dạng các cặp key-value (khóa-giá trị), giúp truy cập dữ liệu nhanh và có tổ chức.',
        content: `
            <h2>Khi List là chưa đủ</h2>
            <p>Hãy tưởng tượng bạn muốn lưu thông tin của một người dùng: tên, tuổi, thành phố. Bạn có thể dùng một List như sau: <code>["An", 25, "Hà Nội"]</code>. Nhưng làm thế nào để biết phần tử nào là tên, phần tử nào là tuổi? Bạn phải nhớ thứ tự. Điều này không hiệu quả và dễ gây lỗi.</p>
            <p>Dictionary (từ điển) giải quyết vấn đề này bằng cách cho phép bạn lưu trữ dữ liệu dưới dạng các cặp <strong>key-value (khóa-giá trị)</strong>. Mỗi giá trị được liên kết với một "khóa" duy nhất.</p>

            <h3>Tạo một Dictionary</h3>
            <p>Dictionary được tạo bằng cách đặt các cặp key-value bên trong dấu ngoặc nhọn <code>{}</code>. Khóa và giá trị được phân cách bởi dấu hai chấm <code>:</code>, và các cặp được phân cách bởi dấu phẩy.</p>
            <pre><code class="language-python">
# Một dictionary lưu thông tin một sinh viên
sinh_vien = {
    "ho_ten": "Nguyễn Văn An",
    "ma_sv": "SV001",
    "tuoi": 20,
    "diem_trung_binh": 8.5,
    "da_tot_nghiep": False
}
print(sinh_vien)
            </code></pre>
            <p>Khóa (key) thường là một chuỗi (string) và phải là duy nhất trong một dictionary. Giá trị (value) có thể là bất kỳ kiểu dữ liệu nào: số, chuỗi, boolean, thậm chí là một list hoặc một dictionary khác.</p>

            <h3>Truy cập giá trị</h3>
            <p>Bạn truy cập giá trị bằng cách sử dụng khóa của nó trong dấu ngoặc vuông <code>[]</code>.</p>
            <pre><code class="language-python">
print(sinh_vien["ho_ten"])   # Nguyễn Văn An
print(sinh_vien["tuoi"])     # 20
            </code></pre>
            <p>Nếu bạn cố gắng truy cập một khóa không tồn tại, chương trình sẽ báo lỗi. Một cách an toàn hơn là sử dụng phương thức <code>.get()</code>, nó sẽ trả về <code>None</code> (hoặc một giá trị mặc định bạn cung cấp) nếu khóa không tồn tại.</p>
            <pre><code class="language-python">
dia_chi = sinh_vien.get("dia_chi")
print(dia_chi) # None

dia_chi_mac_dinh = sinh_vien.get("dia_chi", "Chưa có thông tin")
print(dia_chi_mac_dinh) # Chưa có thông tin
            </code></pre>

            <h3>Thêm và Sửa đổi cặp Key-Value</h3>
            <p>Bạn có thể dễ dàng thêm một cặp mới hoặc thay đổi giá trị của một khóa đã có.</p>
            <pre><code class="language-python">
# Thêm một cặp key-value mới
sinh_vien["chuyen_nganh"] = "Công nghệ thông tin"

# Cập nhật giá trị của một khóa đã có
sinh_vien["tuoi"] = 21

print(sinh_vien)
            </code></pre>

            <h3>Lặp qua Dictionary</h3>
            <p>Bạn có thể sử dụng vòng lặp <code>for</code> để duyệt qua các khóa, các giá trị, hoặc cả hai.</p>
            <pre><code class="language-python">
# Lặp qua các khóa (mặc định)
for key in sinh_vien:
    print(f"Khóa: {key}, Giá trị: {sinh_vien[key]}")

print("-" * 20)

# Lặp qua các cặp key-value bằng phương thức .items()
for key, value in sinh_vien.items():
    print(f"{key}: {value}")
            </code></pre>
            <p>Dictionary là nền tảng để làm việc với các định dạng dữ liệu có cấu trúc như JSON, vốn rất phổ biến trong phát triển web và API. Việc thành thạo dictionary sẽ mở ra cho bạn rất nhiều khả năng trong Python.</p>
        `,
    },
    {
        title: 'Bài 9: Nhận dữ liệu từ người dùng với hàm input()',
        slug: 'python-co-ban-bai-9-ham-input',
        category: 'python-co-ban',
        coverImage: 'https://picsum.photos/seed/python9/1200/630',
        excerpt: 'Học cách làm cho chương trình của bạn trở nên tương tác bằng cách nhận dữ liệu nhập từ bàn phím của người dùng bằng hàm input() và xử lý dữ liệu đó.',
        content: `
            <h2>Tạo chương trình tương tác</h2>
            <p>Hầu hết các chương trình hữu ích đều cần tương tác với người dùng theo một cách nào đó. Chúng cần nhận thông tin đầu vào (input) để xử lý và tạo ra kết quả. Trong các ứng dụng dòng lệnh, cách đơn giản nhất để làm điều này là sử dụng hàm <code>input()</code>.</p>
            
            <h3>Hàm <code>input()</code> hoạt động như thế nào?</h3>
            <p>Hàm <code>input()</code> thực hiện hai việc:</p>
            <ol>
                <li>Hiển thị một thông báo (gọi là prompt) ra màn hình để hướng dẫn người dùng.</li>
                <li>Tạm dừng chương trình và đợi người dùng nhập một cái gì đó rồi nhấn Enter.</li>
                <li>Sau khi người dùng nhấn Enter, hàm sẽ trả về tất cả những gì người dùng đã nhập dưới dạng một <strong>chuỗi (string)</strong>.</li>
            </ol>
            
            <h3>Ví dụ cơ bản</h3>
            <pre><code class="language-python">
# Hiển thị thông báo và đợi người dùng nhập
ten = input("Vui lòng nhập tên của bạn: ")

# In lời chào sử dụng tên vừa nhập
print(f"Xin chào, {ten}! Rất vui được gặp bạn.")
            </code></pre>
            <p>Khi bạn chạy đoạn mã trên, chương trình sẽ in ra "Vui lòng nhập tên của bạn: " và con trỏ sẽ nhấp nháy, chờ bạn nhập. Giả sử bạn gõ "Bình" và nhấn Enter, kết quả sẽ là "Xin chào, Bình! Rất vui được gặp bạn."</p>

            <h3>Lưu ý quan trọng: <code>input()</code> luôn trả về chuỗi (string)</h3>
            <p>Đây là một điểm cực kỳ quan trọng và là nguồn gốc của nhiều lỗi cho người mới bắt đầu. Ngay cả khi người dùng nhập vào một con số, <code>input()</code> vẫn sẽ coi đó là một chuỗi ký tự.</p>
            <pre><code class="language-python">
tuoi_nhap_vao = input("Bạn bao nhiêu tuổi? ")
print(type(tuoi_nhap_vao)) # <class 'str'>
            </code></pre>
            <p>Nếu bạn muốn thực hiện các phép toán số học với giá trị này, bạn sẽ gặp lỗi:</p>
            <pre><code class="language-python">
# Đoạn code này sẽ gây lỗi!
# nam_sinh = 2024 - tuoi_nhap_vao # Lỗi TypeError: unsupported operand type(s) for -: 'int' and 'str'
            </code></pre>

            <h3>Chuyển đổi kiểu dữ liệu (Type Casting)</h3>
            <p>Để giải quyết vấn đề trên, chúng ta cần chuyển đổi chuỗi số thành kiểu dữ liệu số (int hoặc float) bằng cách sử dụng các hàm <code>int()</code> hoặc <code>float()</code>.</p>
            <pre><code class="language-python">
tuoi_nhap_vao = input("Bạn bao nhiêu tuổi? ")

# Chuyển chuỗi thành số nguyên
so_tuoi = int(tuoi_nhap_vao)

# Bây giờ có thể thực hiện phép toán
nam_sinh = 2024 - so_tuoi
print(f"Vậy có lẽ bạn sinh năm {nam_sinh}.")
            </code></pre>
            <p>Việc kết hợp <code>input()</code> để lấy dữ liệu và các hàm chuyển đổi kiểu dữ liệu như <code>int()</code>, <code>float()</code> là một kỹ năng cơ bản nhưng thiết yếu để xây dựng các ứng dụng có tính tương tác.</p>
        `,
    },
    {
        title: 'Bài 10: Giới thiệu về Hàm (Functions)',
        slug: 'python-co-ban-bai-10-ham-functions',
        category: 'python-co-ban',
        coverImage: 'https://picsum.photos/seed/python10/1200/630',
        excerpt: 'Tìm hiểu cách đóng gói code vào các khối có thể tái sử dụng được gọi là "hàm". Hàm giúp code của bạn trở nên có tổ chức, dễ đọc, dễ bảo trì và tránh lặp lại code.',
        content: `
            <h2>Tại sao phải dùng Hàm?</h2>
            <p>Khi chương trình của bạn lớn dần, bạn sẽ thấy mình viết đi viết lại một số đoạn code. Ví dụ, một đoạn code để tính diện tích hình chữ nhật. Thay vì sao chép và dán, chúng ta có thể định nghĩa một <strong>hàm (function)</strong>.</p>
            <p>Hàm là một khối code được đặt tên, thực hiện một nhiệm vụ cụ thể. Bạn có thể "gọi" (call) hàm đó bất cứ khi nào bạn cần thực hiện nhiệm vụ đó.</p>
            <p>Lợi ích của việc dùng hàm:</p>
            <ul>
                <li><strong>Tái sử dụng code:</strong> Viết một lần, gọi nhiều lần.</li>
                <li><strong>Tính tổ chức:</strong> Chia một chương trình lớn thành các hàm nhỏ hơn, dễ quản lý hơn.</li>
                <li><strong>Dễ đọc:</strong> Tên hàm có ý nghĩa giúp người khác (và cả bạn trong tương lai) hiểu code đang làm gì.</li>
                <li><strong>Dễ sửa lỗi:</strong> Nếu có lỗi trong logic, bạn chỉ cần sửa ở một nơi duy nhất là trong hàm đó.</li>
            </ul>

            <h3>Định nghĩa một Hàm</h3>
            <p>Bạn sử dụng từ khóa <code>def</code> để bắt đầu định nghĩa một hàm.</p>
            <pre><code class="language-python">
# Định nghĩa một hàm đơn giản tên là 'loi_chao'
def loi_chao():
    """Hàm này in ra một lời chào đơn giản.""" # Đây là docstring, mô tả hàm
    print("Xin chào!")
    print("Chào mừng bạn đến với lập trình Python.")

# Gọi hàm để thực thi code bên trong nó
loi_chao()
loi_chao() # Có thể gọi nhiều lần
            </code></pre>

            <h3>Hàm với Tham số (Parameters)</h3>
            <p>Để hàm trở nên linh hoạt hơn, chúng ta có thể truyền dữ liệu vào cho nó thông qua các tham số (parameters). Tham số hoạt động như những biến bên trong hàm.</p>
            <pre><code class="language-python">
# 'ten' là một tham số
def loi_chao_ca_nhan(ten):
    print(f"Xin chào, {ten}!")

# Khi gọi hàm, chúng ta truyền vào một đối số (argument)
loi_chao_ca_nhan("Lan")   # "Lan" là đối số
loi_chao_ca_nhan("Nam")  # "Nam" là đối số
            </code></pre>

            <h3>Hàm trả về giá trị với <code>return</code></h3>
            <p>Không phải lúc nào hàm cũng chỉ in ra màn hình. Thường thì chúng sẽ xử lý dữ liệu và trả về một kết quả. Chúng ta sử dụng từ khóa <code>return</code> để làm điều này.</p>
            <pre><code class="language-python">
# Hàm này nhận vào hai số và trả về tổng của chúng
def tinh_tong(a, b):
    tong = a + b
    return tong

# Gọi hàm và lưu kết quả trả về vào một biến
ket_qua = tinh_tong(5, 7)
print(f"Kết quả là: {ket_qua}") # Kết quả là: 12

# Bạn cũng có thể dùng trực tiếp
print(f"Tổng của 10 và 20 là: {tinh_tong(10, 20)}")
            </code></pre>
            <p>Khi Python gặp câu lệnh <code>return</code>, nó sẽ ngay lập tức thoát khỏi hàm và trả về giá trị đã chỉ định. Bất kỳ đoạn code nào trong hàm nằm sau lệnh <code>return</code> sẽ không được thực thi.</p>
            <p>Hàm là một trong những khái niệm nền tảng quan trọng nhất trong lập trình. Việc chia nhỏ chương trình thành các hàm hợp lý là một kỹ năng thiết yếu của một lập trình viên giỏi.</p>
        `,
    },
];
