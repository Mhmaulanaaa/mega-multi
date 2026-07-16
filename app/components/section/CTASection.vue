<template>
  <section class="relative overflow-hidden py-24">
    <!-- Background Grid -->
    <div class="absolute inset-0 hero-grid opacity-40"></div>

    <div class="relative mx-auto max-w-[1440px] px-6 lg:px-12">
      <div
        class="flex flex-col gap-8 border border-[#272A30] bg-gradient-to-br from-[#15171C] to-[#0B0C10] p-10 md:p-16 lg:flex-row lg:items-center lg:justify-between"
      >
        <!-- Left -->
        <div>
          <p
            class="font-heading mb-4 text-md uppercase tracking-[6px] text-[#F15A24] md:text-sm"
          >
            — MINTA PENAWARAN
          </p>

          <h2
            class="font-heading max-w-2xl text-3xl uppercase leading-tight tracking-tight text-white md:text-5xl"
          >
            READY TO ENGINEER THE NEXT-GENERATION SUSPENSION?
          </h2>
        </div>

        <!-- Right -->
        <button
          class="inline-flex items-center gap-2 whitespace-nowrap bg-[#F15A24] px-8 py-5 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#C43015] hover:shadow-[0_15px_35px_rgba(241,90,36,0.35)]"
        >
          Hubungi Kami
          <ArrowRight class="h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
</script>
<style scoped>
.font-heading {
  font-family: "Bebas Neue", sans-serif;
}
</style>
