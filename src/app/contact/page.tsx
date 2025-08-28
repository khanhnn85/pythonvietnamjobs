import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | VN Jobs Hub',
  description: 'Get in touch with us for support or inquiries.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Have a question or need support? Fill out the form below.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
