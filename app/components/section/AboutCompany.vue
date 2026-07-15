<template>
  <section class="relative overflow-hidden bg-[#101010] py-24 md:py-32">
    <!-- Background Grid -->
    <div class="absolute inset-0 hero-grid opacity-40"></div>

    <div
      class="relative mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-12 lg:px-12"
    >
      <!-- Left -->
      <div class="lg:col-span-5">
        <div class="max-w-3xl">
          <p
            class="font-heading mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#F15A24] md:text-sm"
          >
            — TENTANG PERUSAHAAN
          </p>

          <h2
            class="font-heading text-4xl uppercase leading-[0.9] tracking-tight text-white md:text-6xl"
          >
            MANUFAKTUR LEAF SPRING TERDEPAN DI INDONESIA
          </h2>
        </div>

        <p class="mt-6 text-base leading-relaxed text-[#9CA3AF] md:text-lg">
          Sejak 1985, kami menempa pegas daun berkualitas tinggi untuk truk, bus, dan
          kendaraan niaga berat. Dengan fasilitas modern dan standar kualitas
          internasasional, kami menghadirkan produk yang kuat, presisi, dan terpercaya.
        </p>

        <button
          class="mt-8 inline-flex items-center gap-2 border-b border-[#F15A24] pb-1 font-heading text-xs uppercase tracking-[0.25em] text-[#F15A24] transition-colors hover:text-white"
        >
          Profil
          <ArrowUpRight class="h-4 w-4" />
        </button>
      </div>

      <!-- Right -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
        <div
          v-for="card in cards"
          :key="card.title"
          class="group border border-[#272A30] bg-[#15171C]/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#F15A24] hover:shadow-[0_20px_40px_rgba(241,90,36,0.15)] md:p-8"
        >
          <component :is="card.icon" class="mb-6 h-6 w-6 text-[#F15A24]" />

          <h3 class="font-heading mb-2 text-2xl uppercase tracking-tight text-white">
            {{ card.title }}
          </h3>

          <p class="text-sm leading-relaxed text-[#9CA3AF]">
            {{ card.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight, Cog, Hammer, Factory, Award } from "lucide-vue-next";

const cards = [
  {
    title: "PRESISI",
    desc: "Toleransi geometri ±0,3 mm pada setiap unit produksi.",
    icon: Cog,
  },
  {
    title: "DAYA TAHAN",
    desc: "Uji fatigue 100.000+ siklus untuk performa di medan ekstrem.",
    icon: Hammer,
  },
  {
    title: "SKALA",
    desc: "Kapasitas produksi besar untuk memenuhi kebutuhan industri.",
    icon: Factory,
  },
  {
    title: "TS 16949",
    desc: "Certified Quality Management System.",
    icon: Award,
  },
];
</script>
