import { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '@/components/common/Button';
import { lenis } from '@/main';
import './Community.css';

export default function Community() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    admission: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    admission: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const openModal = () => {
    setSubmitted(false);
    setForm({ admission: '', name: '', email: '', phone: '', subject: '', message: '' });
    setErrors({ admission: '', name: '', email: '', phone: '', subject: '', message: '' });
    setShowModal(true);
    lenis?.stop();
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitted(false);
    lenis?.start();
  };

  const validate = (): boolean => {
    let valid = true;
    let newErrors = { admission: '', name: '', email: '', phone: '', subject: '', message: '' };

    if (!form.admission.trim()) {
      newErrors.admission = 'Admission number is required.';
      valid = false;
    }

    if (!form.name.trim()) {
      newErrors.name = 'Full name is required.';
      valid = false;
    } else if (form.name.trim().split(/\s+/).length < 2) {
      newErrors.name = 'Please enter your full name (first & last).';
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
      valid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
      valid = false;
    } else if (!/^(\+91[\s-]?)?[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
      valid = false;
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
      valid = false;
    } else if (form.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters.';
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please write your message.';
      valid = false;
    } else if (form.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const testimonials = [
    {
      quote: "ACM NIT Surat chapter has been an incredible platform for me to enhance my technical skills; the engaging workshops and coding competitions have been both educational and fun!",
      name: "Anand"
    },
    {
      quote: "I am impressed with ACM NIT Surat's welcoming community, where I've made valuable connections and had the chance to participate in exciting coding competitions and hackathons.",
      name: "Arjun"
    }
  ];

  return (
    <section
      id="testimonials-section"
      className="common-padding relative mx-auto min-h-[70svh] flex flex-col items-center justify-center py-20 overflow-hidden bg-[#b8b8a6]"
    >
      <div className="border-black/20 w-full border-b-[1px] pb-[clamp(2rem,2vw_+_1rem,3rem)] mb-16 md:mb-24 flex justify-center text-center">
        <h3 className="heading-1 max-sm:heading-2 text-[#1a1a1a] leading-none font-black uppercase tracking-tight">
          What they say about us
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full z-10 relative max-w-7xl px-4">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx} 
            className="bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-10 md:p-14 lg:p-16 flex flex-col justify-between relative group hover:bg-[#111111] hover:border-white/10 transition-all duration-500 shadow-2xl"
          >
            <div className="absolute top-8 left-8 text-flax-smoke-500/20 group-hover:text-flax-smoke-500/40 transition-colors duration-500">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <p className="text-flax-smoke-300 text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-fancy z-10 relative mt-12 mb-16 text-balance font-medium">
              "{testimonial.quote}"
            </p>

            <div className="flex flex-col items-center justify-center relative z-10">
              <div className="w-16 h-1 bg-[#0ea5e9] mb-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
              <p className="text-white font-bold uppercase tracking-widest text-sm md:text-base">{testimonial.name}</p>
            </div>
            
            <div className="absolute bottom-8 right-8 text-flax-smoke-500/20 group-hover:text-flax-smoke-500/40 transition-colors duration-500 rotate-180">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div id="contact-us-button" className="mt-16 md:mt-24 mb-10 flex items-center justify-center z-10 relative scale-[1.5] md:scale-[2] xl:scale-[2.5] 2xl:scale-[3] transform-origin-center">
        <Button label="Contact Us" onClick={openModal} />
      </div>

      {showModal && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-[#0B0B0A] border border-flax-smoke-800/50 rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[90vh] relative overflow-hidden">
            
            <button onClick={closeModal} className="absolute top-4 left-4 md:left-auto md:right-4 text-flax-smoke-500 hover:text-white transition-colors p-2 z-20">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-8 p-12 md:p-16 text-center">
                <div className="w-20 h-20 rounded-full bg-[#0ea5e9]/10 border-2 border-[#0ea5e9] flex items-center justify-center animate-success-pop">
                  <svg className="w-10 h-10 text-[#0ea5e9]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">

                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white font-fancy mb-3">Message Sent!</h3>
                  <p className="text-flax-smoke-400 font-fancy text-base md:text-lg leading-relaxed max-w-sm">
                    Thanks for reaching out. We'll get back to you at <span className="text-[#0ea5e9] font-bold">{form.email}</span> shortly.

                  </p>
                </div>
                <button onClick={closeModal} className="mt-2 px-8 py-3 rounded-full bg-[#0ea5e9] text-black font-black font-mono uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="p-6 md:p-8 pb-4 border-b border-flax-smoke-800/50 shrink-0">
                  <h3 className="heading-4 text-flax-smoke-200 text-center font-fancy leading-relaxed max-w-[90%] mx-auto text-balance mt-2">
                    Got a technical issue? Want to send us feedback? Need event details? Let us know.
                  </h3>
                </div>
                
                <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
                  <form onSubmit={handleSubmit} id="contact-form" className="flex flex-col gap-8" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-1">
                        <label className="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Admission Number</label>
                        <input 
                          value={form.admission}
                          onChange={(e) => setForm({ ...form, admission: e.target.value })}
                          type="text" 
                          placeholder="e.g. U24CS001"
                          className={`bg-transparent text-flax-smoke-50 placeholder-flax-smoke-400 border-b py-3 outline-none transition-colors font-fancy text-lg ${errors.admission ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'}`}
                        />
                        {errors.admission && <span className="text-red-400 text-xs font-mono mt-1">{errors.admission}</span>}
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Full Name</label>
                        <input 
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          type="text" 
                          placeholder="Your name"
                          className={`bg-transparent text-flax-smoke-50 placeholder-flax-smoke-400 border-b py-3 outline-none transition-colors font-fancy text-lg ${errors.name ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'}`}
                        />
                        {errors.name && <span className="text-red-400 text-xs font-mono mt-1">{errors.name}</span>}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-1">
                        <label className="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Your Email</label>
                        <input 
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          type="email" 
                          placeholder="name@email.com"
                          className={`bg-transparent text-flax-smoke-50 placeholder-flax-smoke-400 border-b py-3 outline-none transition-colors font-fancy text-lg ${errors.email ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'}`}
                        />
                        {errors.email && <span className="text-red-400 text-xs font-mono mt-1">{errors.email}</span>}
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Phone Number</label>
                        <input 
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          type="tel" 
                          placeholder="+91 99988 99988"
                          className={`bg-transparent text-flax-smoke-50 placeholder-flax-smoke-400 border-b py-3 outline-none transition-colors font-fancy text-lg ${errors.phone ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'}`}
                        />
                        {errors.phone && <span className="text-red-400 text-xs font-mono mt-1">{errors.phone}</span>}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <label className="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Subject</label>
                      <input 
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        type="text" 
                        placeholder="Let us know how we can help you"
                        className={`bg-transparent text-flax-smoke-50 placeholder-flax-smoke-800/50 border-b py-3 outline-none transition-colors font-fancy text-lg ${errors.subject ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'}`}
                      />
                      {errors.subject && <span className="text-red-400 text-xs font-mono mt-1">{errors.subject}</span>}
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <label className="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Your Message</label>
                      <textarea 
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={3} 
                        placeholder="Leave a comment..."
                        className={`bg-transparent text-flax-smoke-50 placeholder-flax-smoke-800/50 border-b py-3 outline-none transition-colors font-fancy text-lg resize-y ${errors.message ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'}`}
                      ></textarea>
                      {errors.message && <span className="text-red-400 text-xs font-mono mt-1">{errors.message}</span>}
                    </div>
                  </form>
                </div>

                <div className="p-6 md:p-8 pt-6 border-t border-flax-smoke-800/50 shrink-0 flex justify-end">
                  <Button label="Send Message" onClick={handleSubmit} className="w-full md:w-auto h-12 md:h-14 !px-8" />
                </div>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
