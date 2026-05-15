<template>
  <footer class="relative flex flex-col items-center justify-center pt-24 pb-8 px-6 md:px-[5%] bg-[#0e100f] text-flax-smoke-50">
    <div class="grid w-full grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 mb-16 max-w-7xl mx-auto">
      
      <!-- Left Column -->
      <div class="flex flex-col md:col-span-5 pr-0 md:pr-10">
        <div class="flex items-center gap-4 mb-6">
          <img src="/logo.png" alt="ACM NIT Surat Logo" class="w-12 h-12 object-contain" />
          <h2 class="text-2xl font-bold tracking-wide">ACM NIT Surat</h2>
        </div>
        <p class="text-flax-smoke-300 leading-relaxed font-medium">
          ACM NIT-Surat is a student chapter highly focused on planning and organising events for coding, development, design.
        </p>
      </div>

      <!-- Middle Column -->
      <div class="flex flex-col md:col-span-3">
        <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
        <div class="flex flex-col gap-3">
          <a v-for="link in quickLinks" :key="link.name" :href="link.url" class="text-flax-smoke-300 hover:text-white transition-colors duration-300">
            {{ link.name }}
          </a>
        </div>
      </div>

      <!-- Right Column -->
      <div class="flex flex-col md:col-span-4">
        <h3 class="text-lg font-semibold mb-6">Contacts</h3>
        <div class="flex flex-col gap-4">
          <a href="tel:+917977579577" class="flex items-center gap-3 text-flax-smoke-300 hover:text-white transition-colors duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span>+91 79775 79577</span>
          </a>
          <a href="mailto:acm@svnit.ac.in" class="flex items-center gap-3 text-flax-smoke-300 hover:text-white transition-colors duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>acm@svnit.ac.in</span>
          </a>
          <div class="flex items-start gap-3 text-flax-smoke-300">
            <svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>SVNIT, Ichchhanth, Surat 395 007</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Area -->
    <div class="flex flex-col items-center justify-center w-full max-w-7xl mx-auto pt-8 border-t border-flax-smoke-800">
      <div class="flex items-center gap-6 mb-4">
        <a href="mailto:acmnitsurat@gmail.com" target="_blank" class="text-flax-smoke-300 hover:text-white transition-colors duration-300">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
        <a href="https://github.com/acm-svnit" target="_blank" class="text-flax-smoke-300 hover:text-white transition-colors duration-300">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
        </a>
        <a href="https://www.facebook.com/acmnitsurat" target="_blank" class="text-flax-smoke-300 hover:text-white transition-colors duration-300">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
        </a>
        <a href="https://www.youtube.com/c/acmnitsurat" target="_blank" class="text-flax-smoke-300 hover:text-white transition-colors duration-300">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/acmnitsurat" target="_blank" class="text-flax-smoke-300 hover:text-white transition-colors duration-300">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://twitter.com/acmnitsurat" target="_blank" class="text-flax-smoke-300 hover:text-white transition-colors duration-300">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        </a>
      </div>
      <p class="text-sm text-flax-smoke-400">
        Made with ❤️ by <span class="text-[#0ea5e9]">ACM</span> NIT Surat &bull; &copy; {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const quickLinks = [
    { name: 'Blog', url: '#' },
    { name: 'Events', url: '#selectedWorks' },
    { name: 'Projects', url: '#' },
    { name: 'Team', url: '#' },
    { name: 'About', url: '#' },
    { name: 'Contact', url: '#' },
  ];
</script>
