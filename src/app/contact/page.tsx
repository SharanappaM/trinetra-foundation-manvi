"use client";
// import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

// export const metadata: Metadata = { title: "Contact Us", description: "Book a free consultation or enroll in our Gandharividye program." };

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <Navbar />

      <section className="bg-section-dark relative overflow-hidden pt-[72px]">
        <div className="dot-grid absolute inset-0" />
        <div className="container-site relative z-10 py-20 text-center max-w-3xl">
          <span className="tag-pill tag-pill-light mb-6 inline-block">✦ Contact Us ✦</span>
          <h1 className="font-display font-black text-4xl md:text-5xl !text-cream leading-tight mb-5">
            Begin the Journey.<br />
            <span className="shimmer-gold">We're Here to Guide You.</span>
          </h1>
          <p className="font-body text-xl text-cream/65">
            Book a consultation, ask about upcoming batches, or simply reach out.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="container-site grid md:grid-cols-5 gap-12">

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-4">
            <div className="mb-8">
              <span className="tag-pill mb-4 inline-block">✦ Reach Us ✦</span>
              <h2 className="font-display font-bold text-3xl text-deep leading-tight">Let's Connect</h2>
            </div>


            {[
              { icon: MapPin, label: "Visit Us",  value: "Near B.V.R Kids Campus\nLakshmi Narayan Temple, Jayanagar\nManvi – 584123, Karnataka" },
              { icon: Phone,  label: "Call Us",   value: "+91 9972488787\n+91 9535168747" },
              { icon: Mail,   label: "Email Us",  value: "shivu9972488787@gmail.com" },
              { icon: Clock,  label: "Hours",     value: "Mon–Fri: 8:00 AM – 7:00 PM\nSaturday: 8:00 AM – 1:00 PM" },
            ].map(item => (
              <div key={item.label} className="card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center text-saffron shrink-0">
                  <item.icon size={17} />
                </div>
                <div>
                  <div className="font-ui font-bold text-[0.8rem] text-deep mb-1">{item.label}</div>
                  <div className="font-body text-[0.9rem] text-muted whitespace-pre-line leading-snug">{item.value}</div>
                </div>
              </div>
            ))}

            <div className="bg-saffron rounded-2xl p-6 text-center mt-2">
              <div className="font-display text-4xl text-white/30 mb-2">ॐ</div>
              <p className="font-body text-white/85 text-base italic">
                "Every great journey begins with a single step inward."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="card p-8 md:p-10">
              <h2 className="font-display font-bold text-2xl text-deep mb-2">Book a Consultation</h2>
              <p className="font-body text-[0.95rem] text-muted mb-8">
                Fill in the form below and we'll contact you within 24 hours to discuss the right program for your child.
              </p>

          
              <form
  className="space-y-5"
  onSubmit={async (e) => {
  e.preventDefault();

  setLoading(true); // 🔥 start loading

  const formData = new FormData(e.target);

  const data = {
    parent: formData.get("parent"),
    child: formData.get("child"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    age: formData.get("age"),
    program: formData.get("program"),
    city: formData.get("city"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Form submitted successfully!");
      e.target.reset();
    } else {
      alert("Something went wrong");
    }
  } catch (err) {
    alert("Error submitting form");
  } finally {
    setLoading(false); // 🔥 stop loading
  }
}}
>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parent" className="block font-ui text-sm font-semibold text-deep mb-1.5">Parent / Guardian Name *</label>
                    <input id="parent" type="text" name="parent" placeholder="e.g. Priya Sharma" required className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="child" className="block font-ui text-sm font-semibold text-deep mb-1.5">Child's Name *</label>
                    <input id="child" type="text" name="child" placeholder="e.g. Arjun Sharma" required className="form-input" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block font-ui text-sm font-semibold text-deep mb-1.5">Mobile Number *</label>
                    <input id="phone" type="tel" name="phone" placeholder="+91 9972488787" required className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-ui text-sm font-semibold text-deep mb-1.5">Email Address *</label>
                    <input id="email" type="email" name="email" placeholder="you@example.com" required className="form-input" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block font-ui text-sm font-semibold text-deep mb-1.5">Child's Age *</label>
                    <select id="age" name="age" required className="form-input">
                      <option value="">Select age</option>
                      {Array.from({length:11},(_,i)=>i+6).map(a=>(
                        <option key={a} value={a}>{a} years</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="program" className="block font-ui text-sm font-semibold text-deep mb-1.5">Preferred Program *</label>
                    <select id="program" name="program" required className="form-input">
                      <option value="">Select a program</option>
                      <option>Offline Program – Manvi</option>
                      <option>Online Classes – Zoom</option>
                      <option>Third Eye Workshop (1-Day)</option>
                      <option>Not sure – need guidance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block font-ui text-sm font-semibold text-deep mb-1.5">Your City</label>
                  <input id="city" type="text" name="city" placeholder="e.g. Mysore" className="form-input" />
                </div>

                <div>
                  <label htmlFor="message" className="block font-ui text-sm font-semibold text-deep mb-1.5">Message / Questions</label>
                  <textarea id="message" name="message" rows={4} placeholder="Any questions about the program or your child..." className="form-input resize-none" />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base" disabled={loading}
>
                  {/* Send Message & Book Consultation 🙏 */}
                  {loading ? "Sending..." : "Send Message & Book Consultation 🙏"}
                </button>

                <p className="font-ui text-xs text-center text-muted/60">
                  🔐 Your information is safe with us. We never share your data with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20 bg-cream">
        <div className="container-site">
          <div className="rounded-3xl h-64 bg-section-warm border border-saffron/15 flex flex-col items-center justify-center text-center gap-3">
            <MapPin size={36} className="text-saffron" />
            <div className="font-display font-bold text-xl text-deep">Find Us in Manvi</div>
            <div className="font-body text-sm text-muted">Near B.V.R Kids Campus, Lakshmi Narayan Temple, Jayanagar, Manvi – 584123, Karnataka</div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary !text-sm !py-2.5 !px-6 mt-1">
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
