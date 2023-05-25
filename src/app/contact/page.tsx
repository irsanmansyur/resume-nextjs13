import Scroll from '@/components/layout/scroll';
import FormContactPage from './form-contact';

export default function Contact() {
  return (
    <section className="pt-20 space-y-10 h-screen container">
      <h1 className="title text-5xl font-semibold text-center pt-10">
        Contact <span className="text-primary"> Me!</span>
      </h1>
      <FormContactPage />
      <Scroll back="/skill" />
    </section>
  );
}
