
import type { BlogPost } from './blog';

type SeedBlogPost = Omit<BlogPost, 'id' | 'authorId' | 'authorName' | 'createdAt' | 'updatedAt'>;

export const seedBlogPosts: SeedBlogPost[] = [
  // Python cơ bản (10 bài)
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

    // Python for AI (5 bài)
    {
        title: 'NumPy: Nền tảng tính toán cho AI trong Python',
        slug: 'python-for-ai-numpy-nen-tang-tinh-toan',
        category: 'python-for-ai',
        coverImage: 'https://picsum.photos/seed/python-ai-1/1200/630',
        excerpt: 'Khám phá NumPy, thư viện cốt lõi cho tính toán khoa học trong Python. Học cách tạo và thao tác với các mảng đa chiều (ndarray) - cấu trúc dữ liệu nền tảng của mọi mô hình AI.',
        content: `
            <h2>Tại sao NumPy lại quan trọng cho AI?</h2>
            <p>Trong Trí tuệ Nhân tạo, dữ liệu thường được biểu diễn dưới dạng các con số được sắp xếp trong các cấu trúc gọi là vector, ma trận, hoặc tensor. Ví dụ, một bức ảnh có thể được xem là một ma trận 3 chiều (chiều rộng, chiều cao, kênh màu). NumPy cung cấp một đối tượng mảng (<code>ndarray</code>) cực kỳ hiệu quả để làm việc với các cấu trúc dữ liệu số này.</p>
            <p>So với list thông thường của Python, mảng NumPy:</p>
            <ul>
                <li>Nhanh hơn rất nhiều cho các phép toán số học.</li>
                <li>Tiết kiệm bộ nhớ hơn.</li>
                <li>Cung cấp một bộ sưu tập khổng lồ các hàm toán học cấp cao.</li>
            </ul>
            <p>Hầu hết các thư viện AI và Khoa học dữ liệu lớn như TensorFlow, PyTorch, và Scikit-learn đều được xây dựng dựa trên NumPy.</p>

            <h3>Tạo mảng NumPy</h3>
            <p>Trước tiên, bạn cần cài đặt NumPy (<code>pip install numpy</code>) và import nó, thường với bí danh <code>np</code>.</p>
            <pre><code class="language-python">
import numpy as np

# Tạo mảng 1 chiều từ một list
a = np.array([1, 2, 3, 4, 5])
print(a) # [1 2 3 4 5]
print(a.shape) # (5,) -> một mảng có 5 phần tử

# Tạo mảng 2 chiều (ma trận)
b = np.array([[1, 2, 3], [4, 5, 6]])
print(b)
# [[1 2 3]
#  [4 5 6]]
print(b.shape) # (2, 3) -> 2 hàng, 3 cột
            </code></pre>

            <h3>Các phép toán trên mảng</h3>
            <p>Điều kỳ diệu của NumPy là bạn có thể thực hiện các phép toán trên toàn bộ mảng mà không cần dùng vòng lặp <code>for</code>. Điều này được gọi là "vectorization" và nó cực kỳ nhanh.</p>
            <pre><code class="language-python">
x = np.array([1, 2, 3])
y = np.array([10, 20, 30])

# Phép toán theo từng phần tử
print(x + y)  # [11 22 33]
print(x * 2)  # [2 4 6]
print(x ** 2) # [1 4 9]

# Phép toán trên ma trận
mat_a = np.array([[1, 2], [3, 4]])
mat_b = np.array([[10, 20], [30, 40]])

print(mat_a * mat_b) # Phép nhân theo từng phần tử (element-wise)
# [[ 10  40]
#  [ 90 160]]

# Phép nhân ma trận thực sự (dot product)
print(np.dot(mat_a, mat_b))
# [[ 70 100]
#  [150 220]]
            </code></pre>
            
            <h3>Broadcasting</h3>
            <p>Broadcasting là một cơ chế mạnh mẽ cho phép NumPy thực hiện các phép toán trên các mảng có hình dạng (shape) khác nhau.</p>
            <pre><code class="language-python">
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
vector = np.array([10, 20, 30])

# Cộng một vector vào mỗi hàng của ma trận
result = matrix + vector
print(result)
# [[11 22 33]
#  [14 25 36]
#  [17 28 39]]
            </code></pre>
            <p>NumPy là một chủ đề lớn, nhưng việc nắm vững các khái niệm cơ bản về tạo mảng, các phép toán và broadcasting sẽ cung cấp cho bạn nền tảng vững chắc để bước vào thế giới AI và Học máy với Python.</p>
        `,
    },
    {
        title: 'Pandas 101: Tiền xử lý dữ liệu cho các mô hình AI',
        slug: 'python-for-ai-pandas-tien-xu-ly-du-lieu',
        category: 'python-for-ai',
        coverImage: 'https://picsum.photos/seed/python-ai-2/1200/630',
        excerpt: 'Dữ liệu chất lượng là yếu tố quyết định thành công của một mô hình AI. Hãy cùng tìm hiểu Pandas, công cụ "dao đa năng của Thụy Sĩ" giúp bạn đọc, làm sạch và chuẩn bị dữ liệu một cách hiệu quả.',
        content: `
            <h2>Giới thiệu về Pandas</h2>
            <p>Pandas là một thư viện Python mã nguồn mở cung cấp các cấu trúc dữ liệu hiệu suất cao và dễ sử dụng cùng các công cụ phân tích dữ liệu. Cấu trúc dữ liệu chính của nó là <strong>DataFrame</strong>, một bảng dữ liệu 2 chiều giống như một trang tính Excel hoặc một bảng SQL, với các hàng và cột được đặt tên.</p>
            <p>Trong một dự án AI, giai đoạn tiền xử lý dữ liệu thường chiếm phần lớn thời gian. Pandas giúp giai đoạn này trở nên dễ dàng hơn rất nhiều.</p>

            <h3>Đọc và xem dữ liệu</h3>
            <p>Pandas có thể đọc dữ liệu từ rất nhiều định dạng khác nhau như CSV, Excel, JSON, SQL, v.v.</p>
            <pre><code class="language-python">
import pandas as pd

# Giả sử chúng ta có một file 'titanic.csv'
# Bạn có thể tìm thấy bộ dữ liệu này trên Kaggle
df = pd.read_csv('titanic.csv')

# Xem 5 dòng đầu tiên của DataFrame
print(df.head())

# Xem thông tin tổng quan về các cột và kiểu dữ liệu
print(df.info())

# Xem các thống kê mô tả cơ bản
print(df.describe())
            </code></pre>
            
            <h3>Lựa chọn và Lọc dữ liệu (Selection & Filtering)</h3>
            <p>Bạn có thể dễ dàng chọn các cột, hàng hoặc lọc dữ liệu dựa trên các điều kiện cụ thể.</p>
            <pre><code class="language-python">
# Chọn một cột duy nhất (kết quả là một Series)
ages = df['Age']

# Chọn nhiều cột
subset = df[['Name', 'Age', 'Sex', 'Survived']]

# Lọc dữ liệu dựa trên điều kiện
# Chọn tất cả hành khách nữ
female_passengers = df[df['Sex'] == 'female']

# Chọn hành khách nữ và đã sống sót
survived_females = df[(df['Sex'] == 'female') & (df['Survived'] == 1)]
print(survived_females.head())
            </code></pre>

            <h3>Xử lý dữ liệu bị thiếu (Missing Data)</h3>
            <p>Dữ liệu trong thế giới thực hiếm khi hoàn hảo. Xử lý các giá trị bị thiếu là một bước quan trọng.</p>
            <pre><code class="language-python">
# Kiểm tra số lượng giá trị bị thiếu trong mỗi cột
print(df.isnull().sum())

# Xóa các hàng có bất kỳ giá trị nào bị thiếu
df_dropped = df.dropna()

# Điền các giá trị tuổi bị thiếu bằng giá trị tuổi trung bình
mean_age = df['Age'].mean()
df['Age'].fillna(mean_age, inplace=True)
            </code></pre>
            <p>Sau khi làm sạch và chuẩn bị, dữ liệu từ DataFrame có thể dễ dàng được chuyển đổi thành mảng NumPy để đưa vào các mô hình học máy của Scikit-learn hoặc TensorFlow. Pandas là một kỹ năng không thể thiếu cho bất kỳ ai muốn làm việc với dữ liệu và AI trong Python.</p>
        `,
    },
    {
        title: 'Xây dựng mô hình AI đầu tiên với Scikit-learn',
        slug: 'python-for-ai-scikit-learn-mo-hinh-dau-tien',
        category: 'python-for-ai',
        coverImage: 'https://picsum.photos/seed/python-ai-3/1200/630',
        excerpt: 'Bước vào thế giới Học máy với Scikit-learn! Hướng dẫn từng bước xây dựng một mô hình phân loại đơn giản, từ việc chuẩn bị dữ liệu đến huấn luyện và đánh giá mô hình.',
        content: `
            <h2>Scikit-learn là gì?</h2>
            <p>Scikit-learn là một trong những thư viện Học máy (Machine Learning) phổ biến và mạnh mẽ nhất trong Python. Nó cung cấp các công cụ đơn giản và hiệu quả cho việc khai phá và phân tích dữ liệu, được xây dựng trên nền tảng NumPy, SciPy, và Matplotlib.</p>
            <p>Điểm mạnh của Scikit-learn là giao diện (API) nhất quán và dễ sử dụng. Quy trình chung để xây dựng một mô hình thường bao gồm các bước tương tự nhau.</p>

            <h3>Bài toán: Phân loại hoa Diên vĩ (Iris)</h3>
            <p>Chúng ta sẽ sử dụng bộ dữ liệu kinh điển Iris. Dựa trên 4 đặc trưng (chiều dài, chiều rộng của đài hoa và cánh hoa), chúng ta sẽ xây dựng một mô hình dự đoán loài của hoa (setosa, versicolor, hoặc virginica).</p>
            
            <h3>Bước 1: Tải và Chuẩn bị dữ liệu</h3>
            <pre><code class="language-python">
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Tải dữ liệu
iris = load_iris()
X, y = iris.data, iris.target

# X là dữ liệu đặc trưng (features), y là nhãn (labels)
print(f"Kích thước X: {X.shape}") # (150, 4) -> 150 mẫu, 4 đặc trưng
print(f"Kích thước y: {y.shape}") # (150,)

# Chia dữ liệu thành tập huấn luyện (train) và tập kiểm tra (test)
# 80% cho huấn luyện, 20% cho kiểm tra
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
            </code></pre>
            <p>Việc chia dữ liệu giúp chúng ta đánh giá mô hình trên những dữ liệu mà nó chưa từng thấy trước đây, đảm bảo tính khách quan.</p>

            <h3>Bước 2: Lựa chọn và Huấn luyện mô hình</h3>
            <p>Chúng ta sẽ bắt đầu với một mô hình đơn giản nhưng hiệu quả: K-Nearest Neighbors (KNN).</p>
            <pre><code class="language-python">
from sklearn.neighbors import KNeighborsClassifier

# 1. Khởi tạo mô hình
# Chúng ta sẽ tìm 5 "hàng xóm" gần nhất
knn = KNeighborsClassifier(n_neighbors=5)

# 2. Huấn luyện mô hình với dữ liệu training
knn.fit(X_train, y_train)
            </code></pre>
            <p>Chỉ với hai dòng code, mô hình của chúng ta đã được "học" từ dữ liệu!</p>

            <h3>Bước 3: Đánh giá mô hình</h3>
            <p>Bây giờ, chúng ta sẽ xem mô hình hoạt động tốt đến đâu trên tập dữ liệu test.</p>
            <pre><code class="language-python">
from sklearn.metrics import accuracy_score

# 3. Đưa ra dự đoán trên dữ liệu test
y_pred = knn.predict(X_test)

# 4. So sánh dự đoán với kết quả thực tế
accuracy = accuracy_score(y_test, y_pred)
print(f"Độ chính xác của mô hình: {accuracy:.2f}") # Kết quả thường là 1.00
            </code></pre>

            <h3>Bước 4: Sử dụng mô hình để dự đoán</h3>
            <p>Bây giờ mô hình đã sẵn sàng để dự đoán cho một bông hoa mới.</p>
            <pre><code class="language-python">
# Giả sử có một bông hoa mới với các số đo
new_flower = [[5.1, 3.5, 1.4, 0.2]] # Tương ứng với loài setosa
prediction = knn.predict(new_flower)
print(f"Dự đoán loài hoa: {iris.target_names[prediction][0]}")
            </code></pre>
            <p>Chúc mừng! Bạn đã thành công xây dựng, huấn luyện và đánh giá mô hình Học máy đầu tiên của mình. Scikit-learn cung cấp rất nhiều mô hình khác (Hồi quy Logistic, SVM, Cây quyết định, v.v.) nhưng tất cả đều tuân theo quy trình <code>.fit()</code>, <code>.predict()</code> tương tự, giúp bạn dễ dàng thử nghiệm và so sánh chúng.</p>
        `,
    },
    {
        title: 'TensorFlow/Keras: Xây dựng mạng Neural Network đầu tiên của bạn',
        slug: 'python-for-ai-tensorflow-keras-neural-network',
        category: 'python-for-ai',
        coverImage: 'https://picsum.photos/seed/python-ai-4/1200/630',
        excerpt: 'Bước vào thế giới Deep Learning! Học cách xây dựng một mạng neural network đơn giản bằng Keras, API cấp cao của TensorFlow, để giải quyết bài toán phân loại hình ảnh.',
        content: `
            <h2>Giới thiệu về TensorFlow và Keras</h2>
            <p><strong>TensorFlow</strong> là một nền tảng mã nguồn mở toàn diện cho Học máy, được phát triển bởi Google. <strong>Keras</strong> là một API cấp cao để xây dựng và huấn luyện các mô hình, được tích hợp sẵn trong TensorFlow. Keras giúp việc tạo ra các mạng neural phức tạp trở nên đơn giản và trực quan hơn rất nhiều.</p>
            
            <h3>Bài toán: Phân loại chữ số viết tay (MNIST)</h3>
            <p>Chúng ta sẽ sử dụng bộ dữ liệu "Hello, World!" của Deep Learning: MNIST. Đây là một bộ dữ liệu gồm 70,000 ảnh đen trắng (kích thước 28x28 pixels) của các chữ số viết tay từ 0 đến 9. Nhiệm vụ là xây dựng một mô hình có thể nhìn vào một ảnh và cho biết đó là chữ số nào.</p>
            
            <h3>Bước 1: Chuẩn bị dữ liệu</h3>
            <pre><code class="language-python">
import tensorflow as tf
from tensorflow import keras

# Tải bộ dữ liệu MNIST
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

# Chuẩn hóa dữ liệu: đưa giá trị pixel từ [0, 255] về [0, 1]
# Điều này giúp mô hình hội tụ nhanh và ổn định hơn
x_train = x_train / 255.0
x_test = x_test / 255.0
            </code></pre>

            <h3>Bước 2: Xây dựng kiến trúc mô hình</h3>
            <p>Chúng ta sẽ xây dựng một mạng neural tuần tự (Sequential) đơn giản gồm 3 lớp:</p>
            <ul>
                <li><strong>Flatten:</strong> Lớp này "làm phẳng" ma trận ảnh 28x28 thành một vector 784 phần tử.</li>
                <li><strong>Dense (fully-connected):</strong> Một lớp kết nối đầy đủ với 128 nơ-ron và hàm kích hoạt ReLU.</li>
                <li><strong>Dense (output):</strong> Lớp đầu ra có 10 nơ-ron (tương ứng 10 chữ số 0-9) và hàm kích hoạt Softmax để đưa ra xác suất cho mỗi lớp.</li>
            </ul>
            <pre><code class="language-python">
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])
            </code></pre>

            <h3>Bước 3: Biên dịch (Compile) mô hình</h3>
            <p>Trước khi huấn luyện, chúng ta cần cấu hình cho quá trình học. Điều này được thực hiện bằng phương thức <code>compile()</code>.</p>
            <ul>
                <li><strong>Optimizer:</strong> Thuật toán tối ưu hóa để cập nhật trọng số của mạng. 'adam' là một lựa chọn phổ biến.</li>
                <li><strong>Loss function:</strong> Hàm mất mát để đo lường độ chính xác của mô hình trong quá trình huấn luyện.</li>
                <li><strong>Metrics:</strong> Các chỉ số dùng để theo dõi, ví dụ như 'accuracy' (độ chính xác).</li>
            </ul>
            <pre><code class="language-python">
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
            </code></pre>

            <h3>Bước 4: Huấn luyện (Train) mô hình</h3>
            <p>Bây giờ, chúng ta huấn luyện mô hình với dữ liệu training trong một số lượng 'epoch' nhất định (một epoch là một lần duyệt qua toàn bộ tập huấn luyện).</p>
            <pre><code class="language-python">
model.fit(x_train, y_train, epochs=5)
            </code></pre>
            <p>Bạn sẽ thấy độ chính xác tăng lên sau mỗi epoch!</p>

            <h3>Bước 5: Đánh giá mô hình</h3>
            <p>Cuối cùng, kiểm tra hiệu suất của mô hình trên tập dữ liệu test.</p>
            <pre><code class="language-python">
test_loss, test_acc = model.evaluate(x_test, y_test, verbose=2)
print(f'\\nTest accuracy: {test_acc}')
            </code></pre>
            <p>Chỉ với vài chục dòng code, bạn đã xây dựng được một mạng neural có khả năng nhận dạng chữ viết tay với độ chính xác rất cao (thường trên 97%). Đây chính là sức mạnh của TensorFlow và Keras, mở ra cánh cửa để bạn giải quyết những bài toán AI phức tạp hơn.</p>
        `,
    },
    {
        title: 'Nhập môn Xử lý Ngôn ngữ Tự nhiên (NLP) với Python',
        slug: 'python-for-ai-nhap-mon-nlp',
        category: 'python-for-ai',
        coverImage: 'https://picsum.photos/seed/python-ai-5/1200/630',
        excerpt: 'Dạy máy tính cách "hiểu" ngôn ngữ của con người. Khám phá các khái niệm và kỹ thuật cơ bản trong NLP như tokenization, stop words, và stemming sử dụng thư viện NLTK.',
        content: `
            <h2>NLP là gì?</h2>
            <p>Xử lý Ngôn ngữ Tự nhiên (Natural Language Processing - NLP) là một lĩnh vực của Trí tuệ Nhân tạo tập trung vào việc cho phép máy tính hiểu, diễn giải và tạo ra ngôn ngữ của con người. Các ứng dụng của NLP có ở khắp mọi nơi: từ trợ lý ảo (Siri, Google Assistant), dịch máy, phân tích cảm xúc, cho đến chatbot.</p>

            <h3>Các bước tiền xử lý văn bản cơ bản</h3>
            <p>Trước khi đưa văn bản vào các mô hình học máy, chúng ta cần "làm sạch" và chuẩn hóa nó. Đây là một số bước phổ biến nhất.</p>
            <p>Chúng ta sẽ sử dụng NLTK (Natural Language Toolkit), một thư viện kinh điển cho NLP trong Python. (Cài đặt: <code>pip install nltk</code>).</p>
            <pre><code class="language-python">
import nltk
# Tải các tài nguyên cần thiết cho lần chạy đầu tiên
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
            </code></pre>

            <h3>1. Tokenization (Tách từ)</h3>
            <p>Đây là quá trình tách một câu hoặc một đoạn văn bản thành các đơn vị nhỏ hơn gọi là "token" (thường là các từ hoặc dấu câu).</p>
            <pre><code class="language-python">
from nltk.tokenize import word_tokenize

sentence = "Python is an amazing language for AI."
tokens = word_tokenize(sentence)
print(tokens)
# ['Python', 'is', 'an', 'amazing', 'language', 'for', 'AI', '.']
            </code></pre>
            
            <h3>2. Chuyển thành chữ thường (Lowercasing)</h3>
            <p>Thường thì chúng ta sẽ chuyển tất cả các từ về chữ thường để mô hình không coi "Python" và "python" là hai từ khác nhau.</p>
            <pre><code class="language-python">
lower_tokens = [word.lower() for word in tokens]
print(lower_tokens)
# ['python', 'is', 'an', 'amazing', 'language', 'for', 'ai', '.']
            </code></pre>

            <h3>3. Loại bỏ Stop Words</h3>
            <p>Stop words là những từ phổ biến nhưng không mang nhiều ý nghĩa (như 'is', 'an', 'the', 'for'). Việc loại bỏ chúng giúp mô hình tập trung vào những từ quan trọng hơn.</p>
            <pre><code class="language-python">
from nltk.corpus import stopwords

stop_words = set(stopwords.words('english'))
filtered_tokens = [word for word in lower_tokens if word.isalpha() and word not in stop_words]
# isalpha() dùng để loại bỏ các dấu câu
print(filtered_tokens)
# ['python', 'amazing', 'language', 'ai']
            </code></pre>

            <h3>4. Stemming và Lemmatization</h3>
            <p>Đây là hai kỹ thuật để đưa các từ về dạng gốc của chúng.</p>
            <ul>
                <li><strong>Stemming:</strong> Cắt bỏ phần cuối của từ. Nhanh nhưng đôi khi tạo ra những từ không có thật (ví dụ: 'studies' -> 'studi').</li>
                <li><strong>Lemmatization:</strong> Đưa từ về dạng từ điển (lemma) của nó. Chậm hơn nhưng chính xác hơn (ví dụ: 'studies' -> 'study').</li>
            </ul>
            <pre><code class="language-python">
from nltk.stem import PorterStemmer, WordNetLemmatizer

# Stemming
stemmer = PorterStemmer()
stemmed_tokens = [stemmer.stem(word) for word in filtered_tokens]
print(f"Stemmed: {stemmed_tokens}")
# Stemmed: ['python', 'amaz', 'languag', 'ai']

# Lemmatization
lemmatizer = WordNetLemmatizer()
lemmatized_tokens = [lemmatizer.lemmatize(word) for word in filtered_tokens]
print(f"Lemmatized: {lemmatized_tokens}")
# Lemmatized: ['python', 'amazing', 'language', 'ai']
            </code></pre>
            <p>Sau khi tiền xử lý, chúng ta có một danh sách các token "sạch", sẵn sàng để được chuyển đổi thành vector số (sử dụng các kỹ thuật như Bag-of-Words hoặc TF-IDF) và đưa vào các mô hình phân loại văn bản, phân tích cảm xúc, v.v. Đây là những bước nền tảng cho mọi bài toán NLP phức tạp.</p>
        `,
    },

    // Python for Data (5 bài)
    {
        title: 'Nghệ thuật làm sạch dữ liệu với Pandas',
        slug: 'python-for-data-lam-sach-du-lieu-pandas',
        category: 'python-for-data',
        coverImage: 'https://picsum.photos/seed/python-data-1/1200/630',
        excerpt: 'Dữ liệu bẩn là kẻ thù của mọi phân tích chính xác. Học các kỹ thuật thiết yếu để xử lý dữ liệu thiếu, dữ liệu trùng lặp, sai định dạng và các giá trị ngoại lai bằng Pandas.',
        content: `
            <h2>"Garbage In, Garbage Out"</h2>
            <p>Câu nói kinh điển trong khoa học dữ liệu này có nghĩa là: nếu bạn đưa dữ liệu rác vào mô hình, bạn sẽ nhận lại kết quả rác. Do đó, làm sạch dữ liệu (Data Cleaning) là một trong những kỹ năng quan trọng nhất của một nhà phân tích dữ liệu.</p>
            
            <h3>1. Xử lý dữ liệu bị thiếu (Missing Values)</h3>
            <p>Đây là vấn đề phổ biến nhất. Pandas cung cấp các công cụ mạnh mẽ để tìm và xử lý chúng.</p>
            <pre><code class="language-python">
import pandas as pd
import numpy as np

data = {'col1': [1, 2, np.nan, 4], 'col2': ['A', 'B', 'C', np.nan]}
df = pd.DataFrame(data)

# Kiểm tra giá trị thiếu
print(df.isnull().sum())

# Cách 1: Xóa hàng/cột chứa giá trị thiếu
df_dropped = df.dropna() # Xóa hàng
df_dropped_cols = df.dropna(axis=1) # Xóa cột

# Cách 2: Điền giá trị thay thế (Imputation)
# Điền bằng một giá trị cụ thể
df_filled = df.fillna(0)

# Điền bằng giá trị trước đó/sau đó
df_ffill = df.fillna(method='ffill')

# Điền bằng giá trị thống kê (trung bình, trung vị)
mean_col1 = df['col1'].mean()
df['col1'].fillna(mean_col1, inplace=True)
            </code></pre>
            
            <h3>2. Xử lý dữ liệu trùng lặp (Duplicates)</h3>
            <pre><code class="language-python">
data = {'col1': ['A', 'B', 'A', 'C'], 'col2': [1, 2, 1, 3]}
df_dup = pd.DataFrame(data)

# Kiểm tra hàng trùng lặp
print(df_dup.duplicated())

# Xóa các hàng trùng lặp, chỉ giữ lại bản ghi đầu tiên
df_no_dup = df_dup.drop_duplicates()
print(df_no_dup)
            </code></pre>

            <h3>3. Sửa lỗi kiểu dữ liệu</h3>
            <p>Đôi khi các cột số lại bị đọc thành dạng chuỗi (object). Chúng ta cần chuyển đổi chúng.</p>
            <pre><code class="language-python">
df = pd.DataFrame({'price': ['1,000', '2,500', '500']})
print(df.info()) # price là object

# Lỗi nếu tính toán trực tiếp
# df['price'].mean() -> Lỗi

# Làm sạch và chuyển đổi
df['price'] = df['price'].str.replace(',', '').astype(int)
print(df.info()) # price bây giờ là int64
print(df['price'].mean())
            </code></pre>

            <h3>4. Xử lý giá trị ngoại lai (Outliers)</h3>
            <p>Giá trị ngoại lai là những điểm dữ liệu khác biệt đáng kể so với phần còn lại. Chúng có thể làm sai lệch kết quả phân tích. Một cách phổ biến để xác định chúng là sử dụng phương pháp IQR (Interquartile Range).</p>
            <pre><code class="language-python">
data = {'score': [10, 12, 15, 13, 11, 14, 55, 9]}
df_outlier = pd.DataFrame(data)

Q1 = df_outlier['score'].quantile(0.25)
Q3 = df_outlier['score'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Lọc ra các giá trị không phải ngoại lai
df_no_outlier = df_outlier[(df_outlier['score'] >= lower_bound) & (df_outlier['score'] <= upper_bound)]
print(df_no_outlier)
            </code></pre>
            <p>Làm sạch dữ liệu là một quá trình lặp đi lặp lại và đòi hỏi sự am hiểu về bộ dữ liệu. Việc thành thạo các kỹ thuật này với Pandas sẽ giúp bạn xây dựng các phân tích và mô hình đáng tin cậy hơn.</p>
        `,
    },
    {
        title: 'Kể chuyện bằng dữ liệu: Trực quan hóa với Matplotlib & Seaborn',
        slug: 'python-for-data-truc-quan-hoa-matplotlib-seaborn',
        category: 'python-for-data',
        coverImage: 'https://picsum.photos/seed/python-data-2/1200/630',
        excerpt: 'Một biểu đồ đáng giá hơn ngàn lời nói. Học cách sử dụng Matplotlib và Seaborn để biến những con số khô khan thành các biểu đồ đẹp mắt và đầy ý nghĩa, giúp bạn khám phá và truyền đạt thông điệp từ dữ liệu.',
        content: `
            <h2>Tại sao phải trực quan hóa dữ liệu?</h2>
            <p>Bộ não con người xử lý thông tin hình ảnh nhanh hơn nhiều so với văn bản và số liệu. Trực quan hóa dữ liệu giúp chúng ta:</p>
            <ul>
                <li>Nhanh chóng nhận ra các xu hướng, quy luật và các điểm bất thường.</li>
                <li>Hiểu được mối quan hệ giữa các biến.</li>
                <li>Truyền đạt kết quả phân tích một cách hiệu quả và thuyết phục.</li>
            </ul>
            <p><strong>Matplotlib</strong> là thư viện trực quan hóa nền tảng trong Python, cung cấp khả năng tùy chỉnh cao. <strong>Seaborn</strong> được xây dựng dựa trên Matplotlib, cung cấp giao diện cấp cao hơn để vẽ các biểu đồ thống kê hấp dẫn và đẹp mắt hơn.</p>
            
            <h3>Cài đặt và Import</h3>
            <pre><code class="language-python">
# pip install matplotlib seaborn pandas
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

# Thiết lập để biểu đồ đẹp hơn
sns.set_theme(style="whitegrid")
            </code></pre>
            
            <h3>Các loại biểu đồ phổ biến</h3>
            <p>Chúng ta sẽ sử dụng bộ dữ liệu "tips" có sẵn trong Seaborn.</p>
            <pre><code class="language-python">
tips = sns.load_dataset("tips")
print(tips.head())
            </code></pre>

            <h4>1. Biểu đồ phân tán (Scatter Plot) - Xem mối quan hệ</h4>
            <p>Dùng để xem mối quan hệ giữa hai biến số liên tục. Mối quan hệ giữa tổng hóa đơn (total_bill) và tiền tip (tip) là gì?</p>
            <pre><code class="language-python">
plt.figure(figsize=(10, 6))
sns.scatterplot(data=tips, x="total_bill", y="tip", hue="sex", size="size")
plt.title('Mối quan hệ giữa Tổng hóa đơn và Tiền Tip')
plt.xlabel('Tổng hóa đơn ($)')
plt.ylabel('Tiền tip ($)')
plt.show()
            </code></pre>

            <h4>2. Biểu đồ tần suất (Histogram) - Xem phân phối</h4>
            <p>Dùng để xem phân phối của một biến số. Phân phối của tổng hóa đơn trông như thế nào?</p>
            <pre><code class="language-python">
plt.figure(figsize=(10, 6))
sns.histplot(data=tips, x="total_bill", kde=True, bins=20)
plt.title('Phân phối của Tổng hóa đơn')
plt.xlabel('Tổng hóa đơn ($)')
plt.ylabel('Số lượng')
plt.show()
            </code></pre>

            <h4>3. Biểu đồ hộp (Box Plot) - So sánh các nhóm</h4>
            <p>Tuyệt vời để so sánh sự phân phối của một biến số giữa các nhóm khác nhau. Nam giới hay nữ giới có xu hướng tip nhiều hơn?</p>
            <pre><code class="language-python">
plt.figure(figsize=(10, 6))
sns.boxplot(data=tips, x="day", y="total_bill", hue="sex")
plt.title('Tổng hóa đơn theo Ngày và Giới tính')
plt.xlabel('Ngày trong tuần')
plt.ylabel('Tổng hóa đơn ($)')
plt.show()
            </code></pre>
            
            <h4>4. Biểu đồ cột (Bar Plot) - So sánh giá trị trung bình</h4>
            <p>Hiển thị giá trị ước tính (mặc định là trung bình) cho một biến số giữa các nhóm.</p>
            <pre><code class="language-python">
plt.figure(figsize=(10, 6))
sns.barplot(data=tips, x="day", y="total_bill", hue="smoker")
plt.title('Hóa đơn trung bình theo Ngày và Người hút thuốc')
plt.xlabel('Ngày trong tuần')
plt.ylabel('Hóa đơn trung bình ($)')
plt.show()
            </code></pre>
            <p>Việc lựa chọn đúng loại biểu đồ cho đúng mục đích là một kỹ năng quan trọng. Hãy thử nghiệm với các loại biểu đồ và các tùy chọn khác nhau trong Seaborn để tìm ra cách tốt nhất để kể câu chuyện từ dữ liệu của bạn.</p>
        `,
    },
    {
        title: 'Web Scraping: Thu thập dữ liệu từ trang web với BeautifulSoup',
        slug: 'python-for-data-web-scraping-beautifulsoup',
        category: 'python-for-data',
        coverImage: 'https://picsum.photos/seed/python-data-3/1200/630',
        excerpt: 'Khám phá cách tự động trích xuất thông tin từ các trang web bằng Python. Học cách sử dụng thư viện Requests để tải nội dung HTML và BeautifulSoup để phân tích và lấy ra dữ liệu bạn cần.',
        content: `
            <h2>Web Scraping là gì?</h2>
            <p>Web Scraping (còn gọi là cào dữ liệu web) là quá trình tự động hóa việc trích xuất một lượng lớn dữ liệu từ các trang web. Dữ liệu này sau đó có thể được lưu lại và sử dụng cho nhiều mục đích khác nhau như phân tích thị trường, theo dõi giá, tổng hợp tin tức, v.v.</p>
            <p><strong>Lưu ý quan trọng:</strong> Khi cào dữ liệu, bạn phải tôn trọng các điều khoản sử dụng của trang web và file <code>robots.txt</code> của họ. Hãy hành động một cách có trách nhiệm, tránh gửi quá nhiều yêu cầu trong một thời gian ngắn để không làm quá tải server của họ.</p>

            <h3>Các công cụ cần thiết</h3>
            <ul>
                <li><strong>Requests:</strong> Một thư viện tuyệt vời để gửi các yêu cầu HTTP trong Python. Chúng ta sẽ dùng nó để lấy mã HTML của một trang web.</li>
                <li><strong>BeautifulSoup:</strong> Một thư viện dùng để phân tích cú pháp (parse) các tài liệu HTML và XML. Nó tạo ra một cây phân tích cho trang và cung cấp các cách đơn giản để duyệt và tìm kiếm trên cây đó.</li>
            </ul>
            <pre><code class="language-bash">
pip install requests beautifulsoup4
            </code></pre>
            
            <h3>Quy trình cơ bản</h3>
            <p>Chúng ta sẽ thử cào tiêu đề của các bài viết từ trang tin tức hư cấu <code>example.com</code>.</p>
            
            <h4>Bước 1: Gửi yêu cầu và lấy nội dung HTML</h4>
            <pre><code class="language-python">
import requests

URL = "http://quotes.toscrape.com/" # Một trang web được tạo ra để thực hành cào dữ liệu
response = requests.get(URL)

# Kiểm tra xem yêu cầu có thành công không (status code 200)
if response.status_code == 200:
    html_content = response.text
    print("Tải trang thành công!")
else:
    print(f"Lỗi: {response.status_code}")
            </code></pre>
            
            <h4>Bước 2: Phân tích HTML với BeautifulSoup</h4>
            <p>Chúng ta tạo một đối tượng <code>BeautifulSoup</code> từ nội dung HTML.</p>
            <pre><code class="language-python">
from bs4 import BeautifulSoup

soup = BeautifulSoup(html_content, 'html.parser')
            </code></pre>
            
            <h4>Bước 3: Tìm kiếm các phần tử HTML</h4>
            <p>Đây là phần cốt lõi. Bạn cần sử dụng các công cụ dành cho nhà phát triển (Developer Tools) của trình duyệt (thường là nhấn F12) để "kiểm tra" (inspect) cấu trúc HTML của trang và tìm ra các thẻ (tag) và các lớp (class) hoặc ID chứa thông tin bạn muốn lấy.</p>
            <p>Trên trang <code>quotes.toscrape.com</code>, mỗi câu trích dẫn được chứa trong một thẻ <code>div</code> với class là <code>quote</code>. Nội dung trích dẫn nằm trong thẻ <code>span</code> với class <code>text</code>, và tên tác giả trong thẻ <code>small</code> với class <code>author</code>.</p>
            <pre><code class="language-python">
# Tìm tất cả các thẻ div có class 'quote'
quotes = soup.find_all('div', class_='quote')

# Lặp qua từng trích dẫn và lấy thông tin
for quote in quotes:
    text = quote.find('span', class_='text').text
    author = quote.find('small', class_='author').text
    
    print(f'"{text}" - {author}')
    print("-" * 20)
            </code></pre>
            
            <h3>Lưu dữ liệu vào file CSV</h3>
            <p>Sau khi cào được dữ liệu, bạn thường muốn lưu nó lại. Pandas là công cụ tuyệt vời cho việc này.</p>
            <pre><code class="language-python">
import pandas as pd

all_quotes = []
for quote in quotes:
    text = quote.find('span', class_='text').text
    author = quote.find('small', 'author').text
    all_quotes.append({'quote': text, 'author': author})

df = pd.DataFrame(all_quotes)
df.to_csv('quotes.csv', index=False, encoding='utf-8-sig')
print("Đã lưu dữ liệu vào quotes.csv")
            </code></pre>
            <p>Web scraping là một kỹ năng cực kỳ mạnh mẽ, mở ra cánh cửa đến với vô số dữ liệu trên Internet. Tuy nhiên, hãy luôn nhớ thực hành một cách có đạo đức và trách nhiệm.</p>
        `,
    },
    {
        title: 'Làm việc với API: Lấy dữ liệu động bằng Python',
        slug: 'python-for-data-lam-viec-voi-api',
        category: 'python-for-data',
        coverImage: 'https://picsum.photos/seed/python-data-4/1200/630',
        excerpt: 'Không phải lúc nào bạn cũng cần cào dữ liệu. Nhiều dịch vụ cung cấp API để bạn có thể truy cập dữ liệu của họ một cách có cấu trúc. Học cách gửi yêu cầu đến một API và xử lý phản hồi JSON.',
        content: `
            <h2>API là gì?</h2>
            <p><strong>API (Application Programming Interface - Giao diện Lập trình Ứng dụng)</strong> là một tập hợp các quy tắc và công cụ cho phép các ứng dụng phần mềm khác nhau giao tiếp với nhau. Khi nói đến việc lấy dữ liệu, một Web API cho phép bạn yêu cầu dữ liệu từ một server bằng cách gửi một yêu cầu HTTP đến một URL cụ thể (gọi là endpoint).</p>
            <p>So với Web Scraping, sử dụng API có nhiều lợi thế:</p>
            <ul>
                <li><strong>Đáng tin cậy hơn:</strong> Dữ liệu được trả về ở định dạng có cấu trúc (thường là JSON), không bị ảnh hưởng bởi những thay đổi về giao diện của trang web.</li>
                <li><strong>Chính thức và được hỗ trợ:</strong> Bạn đang sử dụng một kênh được nhà cung cấp dịch vụ cho phép.</li>
                <li><strong>Hiệu quả hơn:</strong> Bạn chỉ yêu cầu và nhận được đúng dữ liệu mình cần.</li>
            </ul>

            <h3>Sử dụng thư viện <code>requests</code></h3>
            <p>Chúng ta sẽ lại sử dụng thư viện <code>requests</code>, một công cụ không thể thiếu khi làm việc với web trong Python.</p>
            
            <h3>Ví dụ: Lấy thông tin về Trạm Vũ trụ Quốc tế (ISS)</h3>
            <p>Chúng ta sẽ sử dụng một API mở và không cần xác thực: Open Notify API.</p>
            
            <h4>1. Gửi yêu cầu GET</h4>
            <p>Chúng ta sẽ gọi đến endpoint để lấy vị trí hiện tại của ISS.</p>
            <pre><code class="language-python">
import requests

# Endpoint của API
url = "http://api.open-notify.org/iss-now.json"

try:
    response = requests.get(url)
    # Ném ra một exception nếu có lỗi HTTP (ví dụ: 404, 500)
    response.raise_for_status() 
    
    print("Yêu cầu thành công!")
    
except requests.exceptions.RequestException as e:
    print(f"Lỗi khi yêu cầu API: {e}")

            </code></pre>

            <h4>2. Xử lý phản hồi JSON</h4>
            <p>API thường trả về dữ liệu dưới định dạng JSON (JavaScript Object Notation). Thư viện <code>requests</code> có một phương thức tích hợp sẵn là <code>.json()</code> để tự động phân tích cú pháp JSON thành một dictionary trong Python.</p>
            <pre><code class="language-python">
# Giả sử yêu cầu thành công
data = response.json()
print(data)
# Kết quả sẽ giống như sau:
# {'message': 'success', 'iss_position': {'longitude': '-59.2104', 'latitude': '-43.1411'}, 'timestamp': 1678886400}

# Truy cập dữ liệu như một dictionary thông thường
timestamp = data['timestamp']
latitude = data['iss_position']['latitude']
longitude = data['iss_position']['longitude']

print(f"Tại thời điểm {timestamp}, ISS đang ở vị trí:")
print(f"Vĩ độ (Latitude): {latitude}")
print(f"Kinh độ (Longitude): {longitude}")
            </code></pre>

            <h4>3. API với Tham số (Parameters)</h4>
            <p>Nhiều API cho phép bạn tùy chỉnh yêu cầu bằng cách truyền các tham số trong URL. Thư viện <code>requests</code> cho phép bạn làm điều này một cách dễ dàng bằng cách truyền một dictionary vào tham số <code>params</code>.</p>
            <p>Ví dụ với một API khác (JSONPlaceholder): lấy các bài viết của một người dùng cụ thể.</p>
            <pre><code class="language-python">
api_url = "https://jsonplaceholder.typicode.com/posts"

# Định nghĩa các tham số
params = {
    'userId': 1
}

response_posts = requests.get(api_url, params=params)
posts_data = response_posts.json()

# In ra tiêu đề của bài viết đầu tiên
print(posts_data[0]['title'])
            </code></pre>
            <p>Nhiều API phức tạp hơn sẽ yêu cầu xác thực (thường là qua API key). Bạn sẽ cần đọc tài liệu của API đó để biết cách truyền key (thường là trong headers hoặc params). Việc thành thạo cách làm việc với API là một kỹ năng thiết yếu để kết nối ứng dụng của bạn với thế giới dữ liệu rộng lớn.</p>
        `,
    },
    {
        title: 'Phân tích dữ liệu khám phá (EDA): Tiết lộ câu chuyện ẩn sau con số',
        slug: 'python-for-data-phan-tich-kham-pha-eda',
        category: 'python-for-data',
        coverImage: 'https://picsum.photos/seed/python-data-5/1200/630',
        excerpt: 'Học quy trình Phân tích dữ liệu khám phá (EDA) từ đầu đến cuối. Sử dụng Pandas để tóm tắt, thao tác và dùng Matplotlib/Seaborn để trực quan hóa, nhằm tìm ra những insight giá trị từ bộ dữ liệu Titanic.',
        content: `
            <h2>EDA là gì?</h2>
            <p><strong>Phân tích dữ liệu khám phá (Exploratory Data Analysis - EDA)</strong> là một phương pháp tiếp cận để phân tích các bộ dữ liệu nhằm tóm tắt các đặc điểm chính của chúng, thường bằng các phương pháp trực quan. Đây là bước đầu tiên và cực kỳ quan trọng trong bất kỳ dự án khoa học dữ liệu nào. Mục tiêu của EDA không phải là đưa ra kết luận cuối cùng, mà là để:</p>
            <ul>
                <li>Hiểu rõ hơn về bộ dữ liệu.</li>
                <li>Phát hiện các lỗi hoặc vấn đề (dữ liệu thiếu, ngoại lai).</li>
                <li>Kiểm tra các giả định ban đầu.</li>
                <li>Phát hiện các quy luật và mối quan hệ tiềm năng giữa các biến.</li>
            </ul>

            <h3>Quy trình EDA với bộ dữ liệu Titanic</h3>
            <p>Chúng ta sẽ thực hiện một quy trình EDA đơn giản trên bộ dữ liệu Titanic nổi tiếng.</p>
            <pre><code class="language-python">
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Đọc dữ liệu
df = pd.read_csv('titanic.csv')
            </code></pre>
            
            <h3>Bước 1: Tìm hiểu tổng quan về dữ liệu</h3>
            <pre><code class="language-python">
# Xem 5 dòng đầu
print(df.head())

# Xem kích thước dữ liệu (số hàng, số cột)
print(df.shape)

# Xem thông tin về các cột, kiểu dữ liệu và giá trị non-null
print(df.info())

# Kiểm tra số lượng giá trị bị thiếu
print(df.isnull().sum())
# => Có nhiều giá trị thiếu ở cột 'Age', 'Cabin' và một ít ở 'Embarked'

# Xem thống kê mô tả cho các cột số
print(df.describe())
# => Tỷ lệ sống sót (Survived) trung bình là 38%. Độ tuổi trung bình là ~30.
            </code></pre>

            <h3>Bước 2: Đặt câu hỏi và Khám phá bằng Trực quan hóa</h3>
            <p>Dựa trên bước 1, chúng ta bắt đầu đặt câu hỏi và tìm câu trả lời.</p>

            <h4>Câu hỏi 1: Tỷ lệ sống sót là bao nhiêu?</h4>
            <pre><code class="language-python">
sns.countplot(x='Survived', data=df)
plt.title('Phân phối số lượng Sống sót (0 = Tử vong, 1 = Sống sót)')
plt.show()
            </code></pre>
            <p><strong>Insight:</strong> Số người tử vong nhiều hơn số người sống sót.</p>

            <h4>Câu hỏi 2: Yếu tố giới tính có ảnh hưởng đến khả năng sống sót không?</h4>
            <pre><code class="language-python">
sns.countplot(x='Survived', hue='Sex', data=df)
plt.title('Tỷ lệ sống sót theo Giới tính')
plt.show()
            </code></pre>
            <p><strong>Insight:</strong> Nữ giới có tỷ lệ sống sót cao hơn đáng kể so với nam giới. Đây là một phát hiện quan trọng.</p>
            
            <h4>Câu hỏi 3: Hạng vé (Pclass) có liên quan đến sự sống còn không?</h4>
            <pre><code class="language-python">
sns.countplot(x='Survived', hue='Pclass', data=df)
plt.title('Tỷ lệ sống sót theo Hạng vé')
plt.show()
            </code></pre>
            <p><strong>Insight:</strong> Hành khách ở hạng vé 1 (đắt nhất) có tỷ lệ sống sót cao nhất, trong khi hành khách hạng 3 có tỷ lệ tử vong cao nhất.</p>

            <h4>Câu hỏi 4: Phân phối độ tuổi của hành khách trông như thế nào?</h4>
            <pre><code class="language-python">
# Trước tiên, hãy điền các giá trị tuổi bị thiếu một cách đơn giản
df['Age'].fillna(df['Age'].median(), inplace=True)

sns.histplot(df['Age'], bins=30, kde=True)
plt.title('Phân phối độ tuổi của hành khách')
plt.show()
            </code></pre>
            <p><strong>Insight:</strong> Phần lớn hành khách ở độ tuổi từ 20-40.</p>

            <h3>Bước 3: Tổng kết các phát hiện</h3>
            <p>Sau quá trình khám phá, chúng ta có thể tóm tắt các insight ban đầu:</p>
            <ul>
                <li>Tỷ lệ tử vong cao hơn tỷ lệ sống sót.</li>
                <li>Phụ nữ và trẻ em (cần phân tích thêm) có nhiều khả năng sống sót hơn (phù hợp với quy tắc "women and children first").</li>
                <li>Hành khách ở hạng vé cao hơn có cơ hội sống sót cao hơn.</li>
                <li>Dữ liệu có nhiều giá trị thiếu cần được xử lý cẩn thận trước khi đưa vào mô hình.</li>
            </ul>
            <p>EDA là một quá trình sáng tạo và lặp đi lặp lại. Những insight bạn tìm thấy ở đây sẽ định hướng cho các bước tiếp theo như kỹ thuật đặc trưng (feature engineering) và lựa chọn mô hình.</p>
        `,
    },
];

