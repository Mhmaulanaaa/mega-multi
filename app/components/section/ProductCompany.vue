<script setup lang="ts">
import { ChevronRight, ArrowRight } from "lucide-vue-next";
import produk1 from "~/assets/images/produk1.jpg";
import produk2 from "~/assets/images/produk2.jpg";
import produk3 from "~/assets/images/produk3.jpg";
import produk4 from "~/assets/images/produk4.jpg";
import produk5 from "~/assets/images/produk5.jpg";
import produk6 from "~/assets/images/produk6.jpg";

interface Spec {
  label: string;
  value: string;
}
const specs: Spec[] = [
  {
    label: "Material Baja",
    value: "SUP-9 / SUP-11A (JIS G 4801)",
  },
  {
    label: "Kekerasan",
    value: "388 - 461 HV",
  },
  {
    label: "Tensile Strength",
    value: "1.250 - 1.450 N/mm²",
  },
  {
    label: "Yield Strength",
    value: "1.150 N/mm² (min)",
  },
  {
    label: "Toleransi Geometri",
    value: "± 0.3 mm",
  },
  {
    label: "Standar Sertifikasi",
    value: "IATF 16949, ISO 14001",
  },
  {
    label: "Surface Treatment",
    value: "Shot peened, painted / coated",
  },
  {
    label: "Uji Fatigue",
    value: "≥ 100,000 cycles",
  },
];
const products = [
  {
    code: "MLS-04",
    title: "Multi Leaf Spring",
    description: "Pegas daun bertingkat klasik untuk truk niaga sedang & berat.",
    image: produk1,
    specs: ["Beban: 4-12 ton", "Material: SUP-9", "Aplikasi: Truk Tronton, Dump Truck"],
  },
  {
    code: "PAR-02",
    title: "Parabolic Spring",
    description:
      "Lebih ringan dengan distribusi beban merata dan kenyamanan lebih tinggi.",
    image: produk2,
    specs: ["Beban: 2-8 ton", "Material: SUP-11A", "Aplikasi: Bus, Pickup, Light Truck"],
  },
  {
    code: "TRL-09",
    title: "Trailer Spring",
    description: "Dirancang untuk trailer heavy-duty dengan daya tahan maksimum.",
    image: produk3,
    specs: ["Beban: 10-20 ton", "Material: SUP-9", "Aplikasi: Trailer, Semi Trailer"],
  },
  {
    code: "AGR-05",
    title: "Agriculture Spring",
    description: "Pegas daun khusus kendaraan dan mesin pertanian berkapasitas besar.",
    image: produk4,
    specs: ["Beban: 3-10 ton", "Material: SUP-11A", "Aplikasi: Tractor, Harvester"],
  },
  {
    code: "BUS-08",
    title: "Bus Suspension",
    description: "Memberikan kestabilan dan kenyamanan optimal pada kendaraan penumpang.",
    image: produk5,
    specs: ["Beban: 6-14 ton", "Material: SUP-9", "Aplikasi: Bus Kota, Bus Pariwisata"],
  },
  {
    code: "CUS-10",
    title: "Custom Leaf Spring",
    description: "Diproduksi sesuai spesifikasi OEM maupun kebutuhan aftermarket.",
    image: produk6,
    specs: ["Custom Design", "Material: SUP-9 / SUP-11A", "OEM & Aftermarket"],
  },
];
</script>
<template>
  <main class="bg-[#0B0C10] text-white">
    <!-- ================= HERO ================= -->
    <section class="relative mx-auto mb-24 max-w-[1440px] px-6 pt-40 lg:px-12">
      <div class="max-w-3xl">
        <p
          class="font-heading mb-5 flex items-center gap-3 text-md uppercase tracking-[0.35em] text-[#F05A22] md:text-md"
        >
          <span class="h-px w-10 bg-[#F05A22]"></span>
          JAJARAN PRODUK
        </p>

        <h2
          class="font-heading text-4xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-6xl xl:text-8xl"
        >
          LEAF SPRING UNTUK SETIAP MEDAN
        </h2>

        <p class="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          Setiap produk dirancang menggunakan baja SUP-9 / SUP-11A premium dengan proses
          heat-treatment terkontrol komputer.
        </p>
      </div>
    </section>
    <!-- ================= Product ================= -->
    <section class="mx-auto max-w-[1440px] px-6 lg:px-12 pb-24">
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="(product, index) in products"
          :key="index"
          class="group relative overflow-hidden border border-[#272A30] bg-[#15171C]/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#F05A22]"
        >
          <!-- Image -->
          <div class="relative aspect-[4/3] overflow-hidden bg-[#0B0C10]">
            <img
              :src="product.image"
              :alt="product.title"
              class="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />

            <div
              class="absolute left-5 top-5 bg-[#F05A22] px-3 py-1 text-[11px] font-bold tracking-[0.25em] text-white uppercase"
            >
              {{ product.code }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-7">
            <h3 class="font-heading mb-3 text-3xl uppercase tracking-tight text-white">
              {{ product.title }}
            </h3>

            <p class="mb-6 text-sm leading-7 text-gray-400">
              {{ product.description }}
            </p>

            <ul class="space-y-3 border-t border-[#272A30] pt-5">
              <li
                v-for="(spec, i) in product.specs"
                :key="i"
                class="flex items-start gap-2 text-xs uppercase tracking-[0.15em] text-white/80"
              >
                <ChevronRight class="mt-0.5 h-4 w-4 shrink-0 text-[#F05A22]" />

                <span>{{ spec }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
    <!-- Product Specs -->
    <section class="mx-auto mt-24 max-w-[1440px] px-6 lg:px-12">
      <!-- Heading -->
      <div class="max-w-3xl">
        <p
          class="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-[#F05A22] md:text-sm"
        >
          <span class="h-px w-10 bg-[#F05A22]" />
          <span class="h-px w-10 bg-[#F05A22]" />
        </p>

        <h2
          class="font-heading text-4xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-6xl xl:text-7xl"
        >
          SPESIFIKASI TEKNIS UMUM
        </h2>
      </div>

      <!-- Table -->
      <div class="mt-10 overflow-hidden border border-[#272A30] bg-[#0B0C10]">
        <table class="w-full border-collapse">
          <tbody>
            <tr
              v-for="(spec, index) in specs"
              :key="index"
              :class="[
                'border-b border-[#272A30] last:border-b-0 transition-colors duration-300 hover:bg-[#1D2026]',
                index % 2 === 0 ? 'bg-[#0B0C10]' : 'bg-[#15171C]',
              ]"
            >
              <td
                class="font-heading w-[34%] px-6 py-5 align-top text-md uppercase tracking-[0.2em] text-[#F05A22] md:text-sm"
              >
                {{ spec.label }}
              </td>

              <td class="px-6 py-5 text-sm leading-7 text-white md:text-base">
                {{ spec.value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- CTA -->
    <section class="mx-auto mt-24 max-w-[1440px] px-6 lg:px-12">
      <div
        class="group relative overflow-hidden border border-[#272A30] bg-[#15171C] px-8 py-10 transition-all duration-500 md:px-14 md:py-14"
      >
        <!-- Background Accent -->
        <div class="absolute inset-y-0 left-0 w-1 bg-[#F05A22]" />

        <div
          class="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <!-- Content -->
          <div class="max-w-2xl">
            <p
              class="font-heading mb-4 flex items-center gap-3 text-md uppercase tracking-[0.35em] text-[#F05A22]"
            >
              <span class="h-px w-10 bg-[#F05A22]" />
              CUSTOM OEM
            </p>

            <h3
              class="font-heading text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl xl:text-5xl"
            >
              Need a tailored leaf spring solution?
            </h3>
          </div>

          <!-- Button -->
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center gap-3 self-start whitespace-nowrap bg-[#F05A22] px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#C43015] hover:px-10"
          >
            <span>Minta Penawaran</span>

            <ArrowRight
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.font-heading {
  font-family: "Bebas Neue", sans-serif;
}
</style>
