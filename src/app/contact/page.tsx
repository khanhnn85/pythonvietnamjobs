import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Liên hệ | Python Viet Nam Jobs',
  description: 'Liên hệ với chúng tôi để được hỗ trợ hoặc giải đáp thắc mắc.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Liên hệ chúng tôi</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Bạn có câu hỏi hoặc cần hỗ trợ? Điền vào biểu mẫu dưới đây.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
