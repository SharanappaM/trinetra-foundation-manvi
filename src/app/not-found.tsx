import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="min-h-[80vh] flex items-center justify-center text-center px-5 bg-cream">
        <div>
          <div className="font-display text-7xl text-saffron/30 mb-2 select-none">ॐ</div>
          <h1 className="font-display font-black text-8xl text-deep mb-2">404</h1>
          <p className="font-body text-xl text-muted mb-2">This path leads to stillness.</p>
          <p className="font-body text-base text-muted/60 mb-8">The page you're looking for doesn't exist.</p>
          <Link href="/" className="btn-primary">Return Home 🙏</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
