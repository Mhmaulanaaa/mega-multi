<script setup lang="ts">
import { Building2, Wrench, Ship, Earth } from "lucide-vue-next";
import PertumbuhanVolume from "../chart/PertumbuhanVolume.vue";
import DistribusiVolume from "../chart/DistribusiVolume.vue";
const stats = [
  {
    icon: Building2,
    value: "52%",
    label: "OEM",
  },
  {
    icon: Wrench,
    value: "30%",
    label: "Aftermarket",
  },
  {
    icon: Ship,
    value: "18%",
    label: "Ekspor",
  },
  {
    icon: Earth,
    value: "14+",
    label: "Negara Tujuan Ekspor",
  },
];
const partners = [
  "HINO",
  "ISUZU",
  "MITSUBISHI",
  "TOYOTA",
  "DAIHATSU",
  "UD TRUCKS",
  "SCANIA",
  "VOLVO",
  "MERCEDES",
  "MAN",
  "TATA",
  "DONGFENG",
];

const countries = [
  "Indonesia",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Singapore",
  "Myanmar",
  "Cambodia",
  "Australia",
  "UAE",
  "Saudi Arabia",
  "Bangladesh",
  "Sri Lanka",
  "Pakistan",
];
</script>

<template>
  <main class="bg-[#0B0C10] text-white">
    <!-- ================= HERO ================= -->
    <section class="relative mx-auto mb-24 max-w-[1440px] px-6 pt-40 lg:px-12">
      <div class="max-w-3xl">
        <!-- Eyebrow -->
        <p
          class="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-[#F05A22] md:text-sm"
        >
          <span class="h-px w-10 bg-[#F05A22]"></span>
          PANGSA PASAR &amp; DISTRIBUSI
        </p>

        <!-- Title -->
        <h2
          class="text-4xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-6xl xl:text-7xl"
        >
          JANGKAUAN GLOBAL,
          <br class="hidden md:block" />
          FONDASI LOKAL
        </h2>

        <!-- Description -->
        <p class="mt-7 max-w-2xl text-base leading-8 text-[#9CA3AF] md:text-lg">
          Produk kami melayani segmen
          <span class="text-white">Original Equipment Manufacturer (OEM)</span>,
          aftermarket, dan ekspor ke lebih dari
          <span class="font-semibold text-white">14 negara</span>.
        </p>
      </div>
    </section>
    <!-- ================= Stats ================= -->
    <section class="mx-auto mb-16 max-w-[1440px] px-6 lg:px-12">
      <div
        class="grid grid-cols-2 overflow-hidden border border-[#272A30] md:grid-cols-4"
      >
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="group border-[#272A30] bg-[#0B0C10] p-6 transition-all duration-300 hover:bg-[#15171C] md:p-8"
          :class="[
            index < 2 ? 'border-b md:border-b-0' : '',
            index !== stats.length - 1 ? 'border-r' : '',
          ]"
        >
          <!-- Icon -->
          <component
            :is="item.icon"
            class="mb-5 h-7 w-7 text-[#F05A22] transition-transform duration-300 group-hover:scale-110"
          />

          <!-- Number -->
          <h3 class="text-3xl font-black tracking-tight text-white md:text-5xl">
            {{ item.value }}
          </h3>

          <!-- Label -->
          <p
            class="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9CA3AF] md:text-xs"
          >
            {{ item.label }}
          </p>
        </div>
      </div>
    </section>
    <!-- Chart -->
    <section class="mx-auto max-w-[1440px] px-6 lg:px-12 mb-24">
      <div class="grid lg:grid-cols-2 gap-4">
        <DistribusiVolume />

        <PertumbuhanVolume />
      </div>
    </section>
    <!-- ================= Partners ================= -->

    <section class="mx-auto mb-20 max-w-[1440px] px-6 lg:px-12">
      <p
        class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#F05A22]"
      >
        <span class="h-px w-6 bg-[#F05A22]" />
        Dipercaya Oleh
      </p>

      <div
        class="grid grid-cols-2 gap-px border border-[#272A30] bg-[#272A30] sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6"
      >
        <div
          v-for="partner in partners"
          :key="partner"
          class="group relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#0B0C10] transition-all duration-300 hover:bg-[#15171C]"
        >
          <!-- Hover Line -->
          <div
            class="absolute bottom-0 left-0 h-1 w-0 bg-[#F05A22] transition-all duration-500 group-hover:w-full"
          />

          <span
            class="text-center text-base font-semibold uppercase tracking-tight text-white/40 transition-all duration-300 group-hover:scale-105 group-hover:text-[#F05A22] md:text-xl"
          >
            {{ partner }}
          </span>
        </div>
      </div>
    </section>

    <!-- ================= Export Countries ================= -->

    <section class="mx-auto mb-24 max-w-[1440px] px-6 lg:px-12">
      <div class="border border-[#272A30] bg-[#15171C]/40 p-8 md:p-12">
        <p
          class="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#F05A22]"
        >
          <span class="h-px w-6 bg-[#F05A22]" />
          Negara Tujuan Ekspor
        </p>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="country in countries"
            :key="country"
            class="cursor-pointer border border-[#272A30] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-[#F05A22] hover:bg-[#F05A22]/5 hover:text-[#F05A22]"
          >
            {{ country }}
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
