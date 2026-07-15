<template>
  <section class="border-y border-[#272A30] bg-[#15171C] py-24 md:py-32">
    <div class="mx-auto max-w-[1440px] px-6 lg:px-12">
      <!-- Heading -->
      <div class="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl">
          <p
            class="font-heading mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#F15A24] md:text-sm"
          >
            — KATALOG PRODUK
          </p>

          <h2
            class="font-heading text-4xl uppercase leading-[0.9] tracking-tight text-white md:text-6xl"
          >
            DIBANGUN UNTUK BEBAN BERAT
          </h2>
        </div>

        <button
          class="inline-flex items-center gap-2 self-start border border-[#272A30] px-5 py-3 font-heading text-xs uppercase tracking-widest text-white transition-colors hover:border-[#F15A24] hover:text-[#F15A24]"
        >
          Eksplorasi Semua Produk
          <ArrowRight class="h-4 w-4" />
        </button>
      </div>

      <!-- Products -->
      <div class="grid gap-4 md:grid-cols-3">
        <div
          v-for="product in products"
          :key="product.title"
          class="group relative overflow-hidden border border-[#272A30] transition-colors hover:border-[#F15A24]"
        >
          <!-- Image -->
          <div class="aspect-[4/5] overflow-hidden bg-[#0B0C10]">
            <img
              :src="product.image"
              :alt="product.title"
              class="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>

          <!-- Badge -->
          <div
            class="absolute left-4 top-4 bg-[#F15A24] px-2 py-1 font-heading text-[10px] tracking-[0.2em] text-white"
          >
            {{ product.code }}
          </div>

          <!-- Content -->
          <div class="bg-[#0B0C10] p-6">
            <h3 class="font-heading text-2xl uppercase tracking-tight text-white">
              {{ product.title }}
            </h3>

            <div
              class="mt-3 flex items-center gap-2 font-heading text-xs uppercase tracking-widest text-[#F15A24] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span>View Specs</span>
              <ArrowUpRight class="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from "lucide-vue-next";

import productImage1 from "~/assets/images/produk1.jpg";
import productImage2 from "~/assets/images/produk2.jpg";
import productImage3 from "~/assets/images/produk3.jpg";

const products = [
  {
    code: "MLS-04",
    title: "Multi Leaf Spring",
    image: productImage1,
  },
  {
    code: "PRB-02",
    title: "Parabolic Spring",
    image: productImage2,
  },
  {
    code: "HD-06",
    title: "Heavy Duty Spring",
    image: productImage3,
  },
];
</script>
