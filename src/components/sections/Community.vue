<template>
  <section
    id="testimonials-section"
    class="common-padding relative mx-auto min-h-[70svh] flex flex-col items-center justify-center py-20 overflow-hidden bg-[#b8b8a6]"
  >
    <!-- Section Header -->
    <div class="border-black/20 w-full border-b-[1px] pb-[clamp(2rem,2vw_+_1rem,3rem)] mb-16 md:mb-24 flex justify-center text-center">
      <h3 class="heading-1 max-sm:heading-2 text-[#1a1a1a] leading-none font-black uppercase tracking-tight">
        What they say about us
      </h3>
    </div>

    <!-- Testimonial Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full z-10 relative max-w-7xl px-4">
      <div 
        v-for="(testimonial, idx) in testimonials" 
        :key="idx" 
        class="bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-10 md:p-14 lg:p-16 flex flex-col justify-between relative group hover:bg-[#111111] hover:border-white/10 transition-all duration-500 shadow-2xl"
      >
        <!-- Top Left Quote Icon -->
        <div class="absolute top-8 left-8 text-flax-smoke-500/20 group-hover:text-flax-smoke-500/40 transition-colors duration-500">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <!-- Quote Text -->
        <p class="text-flax-smoke-300 text-lg md:text-xl lg:text-2xl leading-relaxed text-center font-fancy z-10 relative mt-12 mb-16 text-balance font-medium">
          "{{ testimonial.quote }}"
        </p>

        <!-- Author Area -->
        <div class="flex flex-col items-center justify-center relative z-10">
          <!-- Blue underline from the original image -->
          <div class="w-16 h-1 bg-[#0ea5e9] mb-6 rounded-full group-hover:w-24 transition-all duration-500"></div>
          <p class="text-white font-bold uppercase tracking-widest text-sm md:text-base">{{ testimonial.name }}</p>
        </div>
        
        <!-- Bottom Right Quote Icon -->
        <div class="absolute bottom-8 right-8 text-flax-smoke-500/20 group-hover:text-flax-smoke-500/40 transition-colors duration-500 rotate-180">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Contact Us Button -->
    <div id="contact-us-button" class="mt-16 md:mt-24 mb-10 flex items-center justify-center z-10 relative scale-[1.5] md:scale-[2] xl:scale-[2.5] 2xl:scale-[3] transform-origin-center">
      <Button label="Contact Us" @click="openModal" />
    </div>

    <!-- Contact Form Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="showModal" 
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <!-- Modal Content -->
          <div class="bg-[#0B0B0A] border border-flax-smoke-800/50 rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[90vh] relative overflow-hidden">
            
            <!-- Close button -->
            <button @click="closeModal" class="absolute top-4 left-4 md:left-auto md:right-4 text-flax-smoke-500 hover:text-white transition-colors p-2 z-20">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <!-- SUCCESS STATE -->
            <Transition name="success">
              <div v-if="submitted" class="flex flex-col items-center justify-center gap-8 p-12 md:p-16 text-center">
                <div class="w-20 h-20 rounded-full bg-[#0ea5e9]/10 border-2 border-[#0ea5e9] flex items-center justify-center animate-success-pop">
                  <svg class="w-10 h-10 text-[#0ea5e9]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl md:text-3xl font-black text-white font-fancy mb-3">Message Sent!</h3>
                  <p class="text-flax-smoke-400 font-fancy text-base md:text-lg leading-relaxed max-w-sm">
                    Thanks for reaching out. We'll get back to you at <span class="text-[#0ea5e9] font-bold">{{ form.email }}</span> shortly.
                  </p>
                </div>
                <button @click="closeModal" class="mt-2 px-8 py-3 rounded-full bg-[#0ea5e9] text-black font-black font-mono uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
                  Done
                </button>
              </div>
            </Transition>

            <!-- FORM STATE -->
            <template v-if="!submitted">
              <!-- Header -->
              <div class="p-6 md:p-8 pb-4 border-b border-flax-smoke-800/50 shrink-0">
                <h3 class="heading-4 text-flax-smoke-200 text-center font-fancy leading-relaxed max-w-[90%] mx-auto text-balance mt-2">
                  Got a technical issue? Want to send us feedback? Need event details? Let us know.
                </h3>
              </div>
              
              <!-- Body (scrollable) -->
              <div class="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar" @wheel.stop @touchmove.stop>
                <form @submit.prevent="handleSubmit" id="contact-form" class="flex flex-col gap-8" novalidate>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Admission Number -->
                    <div class="flex flex-col gap-1">
                      <label class="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Admission Number</label>
                      <input 
                        v-model="form.admission"
                        type="text" 
                        placeholder="e.g. U24CS001"
                        class="bg-transparent text-flax-smoke-50 placeholder-flax-smoke-400 border-b py-3 outline-none transition-colors font-fancy text-lg"
                        :class="errors.admission ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'"
                      />
                      <span v-if="errors.admission" class="text-red-400 text-xs font-mono mt-1">{{ errors.admission }}</span>
                    </div>
                    <!-- Full Name -->
                    <div class="flex flex-col gap-1">
                      <label class="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Full Name</label>
                      <input 
                        v-model="form.name"
                        type="text" 
                        placeholder="Your name"
                        class="bg-transparent text-flax-smoke-50 placeholder-flax-smoke-400 border-b py-3 outline-none transition-colors font-fancy text-lg"
                        :class="errors.name ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'"
                      />
                      <span v-if="errors.name" class="text-red-400 text-xs font-mono mt-1">{{ errors.name }}</span>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Email -->
                    <div class="flex flex-col gap-1">
                      <label class="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Your Email</label>
                      <input 
                        v-model="form.email"
                        type="email" 
                        placeholder="name@email.com"
                        class="bg-transparent text-flax-smoke-50 placeholder-flax-smoke-400 border-b py-3 outline-none transition-colors font-fancy text-lg"
                        :class="errors.email ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'"
                      />
                      <span v-if="errors.email" class="text-red-400 text-xs font-mono mt-1">{{ errors.email }}</span>
                    </div>
                    <!-- Phone -->
                    <div class="flex flex-col gap-1">
                      <label class="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Phone Number</label>
                      <input 
                        v-model="form.phone"
                        type="tel" 
                        placeholder="+91 99988 99988"
                        class="bg-transparent text-flax-smoke-50 placeholder-flax-smoke-400 border-b py-3 outline-none transition-colors font-fancy text-lg"
                        :class="errors.phone ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'"
                      />
                      <span v-if="errors.phone" class="text-red-400 text-xs font-mono mt-1">{{ errors.phone }}</span>
                    </div>
                  </div>
                  
                  <!-- Subject -->
                  <div class="flex flex-col gap-1">
                    <label class="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Subject</label>
                    <input 
                      v-model="form.subject"
                      type="text" 
                      placeholder="Let us know how we can help you"
                      class="bg-transparent text-flax-smoke-50 placeholder-flax-smoke-800/50 border-b py-3 outline-none transition-colors font-fancy text-lg"
                      :class="errors.subject ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'"
                    />
                    <span v-if="errors.subject" class="text-red-400 text-xs font-mono mt-1">{{ errors.subject }}</span>
                  </div>
                  
                  <!-- Message -->
                  <div class="flex flex-col gap-1">
                    <label class="text-flax-smoke-500 font-mono text-xs uppercase tracking-widest font-bold">Your Message</label>
                    <textarea 
                      v-model="form.message"
                      rows="3" 
                      placeholder="Leave a comment..."
                      class="bg-transparent text-flax-smoke-50 placeholder-flax-smoke-800/50 border-b py-3 outline-none transition-colors font-fancy text-lg resize-y"
                      :class="errors.message ? 'border-red-500' : 'border-flax-smoke-800 focus:border-flax-smoke-500'"
                    ></textarea>
                    <span v-if="errors.message" class="text-red-400 text-xs font-mono mt-1">{{ errors.message }}</span>
                  </div>
                </form>
              </div>

              <!-- Footer (fixed) -->
              <div class="p-6 md:p-8 pt-6 border-t border-flax-smoke-800/50 shrink-0 flex justify-end">
                <Button label="Send Message" @click="handleSubmit" class="w-full md:w-auto h-12 md:h-14 !px-8" />
              </div>
            </template>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { Button } from '../common';
  import { lenis } from '@/main';

  const showModal = ref(false);
  const submitted = ref(false);

  const form = reactive({
    admission: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const errors = reactive({
    admission: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const openModal = () => {
    submitted.value = false;
    Object.keys(form).forEach(k => (form as any)[k] = '');
    Object.keys(errors).forEach(k => (errors as any)[k] = '');
    showModal.value = true;
    lenis?.stop();
  };

  const closeModal = () => {
    showModal.value = false;
    submitted.value = false;
    lenis?.start();
  };

  const validate = (): boolean => {
    let valid = true;

    // Admission Number — just require it to be non-empty
    if (!form.admission.trim()) {
      errors.admission = 'Admission number is required.';
      valid = false;
    } else {
      errors.admission = '';
    }

    // Name — at least 2 words
    if (!form.name.trim()) {
      errors.name = 'Full name is required.';
      valid = false;
    } else if (form.name.trim().split(/\s+/).length < 2) {
      errors.name = 'Please enter your full name (first & last).';
      valid = false;
    } else {
      errors.name = '';
    }

    // Email
    if (!form.email.trim()) {
      errors.email = 'Email address is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Enter a valid email address.';
      valid = false;
    } else {
      errors.email = '';
    }

    // Phone — 10 digits (Indian), optionally with +91
    if (!form.phone.trim()) {
      errors.phone = 'Phone number is required.';
      valid = false;
    } else if (!/^(\+91[\s-]?)?[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
      errors.phone = 'Enter a valid 10-digit Indian mobile number.';
      valid = false;
    } else {
      errors.phone = '';
    }

    // Subject
    if (!form.subject.trim()) {
      errors.subject = 'Please enter a subject.';
      valid = false;
    } else if (form.subject.trim().length < 5) {
      errors.subject = 'Subject must be at least 5 characters.';
      valid = false;
    } else {
      errors.subject = '';
    }

    // Message
    if (!form.message.trim()) {
      errors.message = 'Please write your message.';
      valid = false;
    } else if (form.message.trim().length < 20) {
      errors.message = 'Message must be at least 20 characters.';
      valid = false;
    } else {
      errors.message = '';
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      submitted.value = true;
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
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.success-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.success-enter-from {
  opacity: 0;
  transform: scale(0.85) translateY(20px);
}

@keyframes success-pop {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}
.animate-success-pop {
  animation: success-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
</style>
