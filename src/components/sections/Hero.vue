<template>
  <section class="mb-[-100svh] py-0">
    <div
      id="hero"
      class="sticky top-0 flex min-h-svh w-full pt-24 sm:pt-32"
    >
      <div class="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-80">
        <!-- Floating Orb 1 -->
        <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#0ea5e9]/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <!-- Floating Orb 2 -->
        <div class="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-flax-smoke-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
        <!-- Floating Orb 3 -->
        <div class="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#0ea5e9]/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
      </div>

      <div class="relative flex w-full h-full flex-col items-center justify-start md:justify-center z-10 text-center gap-8 px-4 md:pb-[40vh]">
        
        <div class="flex flex-col items-center gap-2 mt-[15vh] md:mt-8 w-full z-20">
          <div class="flex w-full relative items-center justify-center">
            <h1 class="text-[clamp(4rem,10vw,10rem)] font-black uppercase leading-none flex flex-wrap justify-center gap-x-4 sm:gap-x-8 text-center w-full max-w-[90%] mx-auto">
              <div v-for="(word, wIdx) in ['ACM', 'NIT', 'SURAT']" :key="wIdx" class="flex overflow-hidden">
                <span v-for="(char, cIdx) in word" :key="char + cIdx" class="hero-title-char translate-y-[120%] will-change-transform block text-flax-smoke-900 drop-shadow-sm">
                  {{ char }}
                </span>
              </div>
            </h1>
          </div>

          <p class="sr-only">
            The official student chapter of ACM at NIT Surat. Fostering a culture of computing, technology, and innovation.
          </p>
          <p
            v-html="whoAmI"
            id="whoAmI"
            class="who-am-i flex flex-wrap justify-center gap-x-[0.25em] heading-4 font-fancy max-w-[50ch] overflow-clip leading-[1.15] font-medium text-balance text-center text-flax-smoke-800 mx-auto w-full px-4"
          ></p>
        </div>

    
          
          
      </div>

      <div
        id="profile-container"
        class="absolute bottom-0 left-0 w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] overflow-hidden"
      >
        <div class="overlay bg-flax-smoke-50 absolute inset-0 z-2"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
        <img
          id="profile-img"
          src="/group.png"
          alt="ACM NIT SURAT Group"
          class="size-full object-cover object-top brightness-110 hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { textSplitterIntoChar } from '@/functions';

  const whoAmI = ref(
    'The official student chapter of ACM at NIT Surat. Fostering a culture of computing, technology, and innovation.',
  );

  onBeforeMount(() => {
    whoAmI.value = textSplitterIntoChar(whoAmI.value);
  });
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 15s infinite alternate ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
