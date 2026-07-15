<template>
  <main class="bg-[#0B0C10] text-white">
    <!-- ================= HERO ================= -->

    <section class="relative mx-auto mb-24 max-w-[1440px] px-6 pt-40 lg:px-12">
      <p
        class="mb-6 font-heading text-xs font-bold uppercase tracking-[0.3em] text-[#F05A22]"
      >
        — Profil Perusahaan
      </p>

      <h1
        class="text-[clamp(3rem,10vw,8.5rem)] font-black uppercase leading-[0.85] tracking-tight text-white"
      >
        <span class="block"> MENEMPA </span>

        <span class="block text-[#F05A22]"> MASA DEPAN </span>

        <span class="block"> OTOMOTIF. </span>
      </h1>

      <p class="mt-10 max-w-3xl text-base leading-relaxed text-[#9CA3AF] md:text-lg">
        Berdiri pada tahun 1985 di Bekasi, Indonesia, PT. Mega Multi Pegas tumbuh menjadi
        salah satu produsen leaf spring terbesar di Asia Tenggara. Komitmen kami pada
        presisi, ketahanan, dan inovasi telah membentuk perjalanan empat dekade.
      </p>
    </section>

    <!-- ================= GALLERY ================= -->

    <section class="mx-auto mb-24 max-w-[1440px] px-6 lg:px-12">
      <div class="grid gap-4 lg:grid-cols-3">
        <!-- Kiri -->
        <div class="lg:col-span-2">
          <div class="h-full overflow-hidden border border-[#272A30]">
            <img
              :src="factoryImage"
              alt="Factory"
              class="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
            />
          </div>
        </div>

        <!-- Kanan -->
        <div class="flex flex-col gap-4">
          <div class="aspect-[16/9] overflow-hidden border border-[#272A30]">
            <img
              :src="steelImage"
              alt="Steel"
              class="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
            />
          </div>

          <div class="aspect-[16/9] overflow-hidden border border-[#272A30]">
            <img
              :src="steelImage"
              alt="Production"
              class="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ================= VISION MISSION ================= -->

    <section class="mx-auto mb-24 max-w-[1440px] px-6 lg:px-12">
      <div class="grid gap-px border border-[#272A30] bg-[#272A30] md:grid-cols-2">
        <!-- Vision -->

        <div
          class="group bg-[#0B0C10] p-10 transition-colors duration-300 hover:bg-[#111318] md:p-14"
        >
          <Compass class="mb-6 h-8 w-8 text-[#F05A22]" />

          <h3 class="mb-4 font-heading text-3xl uppercase tracking-tight">VISI</h3>

          <p class="text-base leading-relaxed text-[#9CA3AF] md:text-lg">
            Menjadi produsen leaf spring otomotif paling dipercaya di kawasan Asia Pasifik
            melalui rekayasa kelas dunia.
          </p>
        </div>

        <!-- Mission -->

        <div
          class="group bg-[#15171C] p-10 transition-colors duration-300 hover:bg-[#1A1D23] md:p-14"
        >
          <Target class="mb-6 h-8 w-8 text-[#F05A22]" />

          <h3 class="mb-4 font-heading text-3xl uppercase tracking-tight">MISI</h3>

          <p class="text-base leading-relaxed text-[#9CA3AF] md:text-lg">
            Memproduksi komponen suspensi yang aman, tahan lama, dan presisi tinggi
            sembari memberdayakan komunitas industri lokal.
          </p>
        </div>
      </div>
    </section>

    <!-- ================= VALUES ================= -->
    <section class="mx-auto mb-24 max-w-[1440px] px-6 lg:px-12">
      <!-- Heading -->

      <div class="max-w-3xl">
        <p
          class="mb-4 font-heading text-xs font-bold uppercase tracking-[0.3em] text-[#F05A22]"
        >
          —
        </p>

        <h2
          class="font-heading text-4xl uppercase leading-[0.9] tracking-tight text-white md:text-6xl"
        >
          NILAI INTI
        </h2>
      </div>

      <!-- Cards -->

      <div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div
          v-for="item in values"
          :key="item.title"
          class="group border border-[#272A30] bg-[#0B0C10] p-8 transition-all duration-300 hover:border-[#F05A22] hover:bg-[#111318]"
        >
          <component
            :is="item.icon"
            class="mb-6 h-8 w-8 text-[#F05A22] transition-transform duration-300 group-hover:scale-110"
          />

          <h3
            class="font-heading text-xl uppercase tracking-tight text-white md:text-2xl"
          >
            {{ item.title }}
          </h3>
        </div>
      </div>
    </section>

    <!-- ================= TIMELINE ================= -->
    <section class="mx-auto mb-24 max-w-[1440px] px-6 lg:px-12">
      <!-- Heading -->

      <div class="max-w-3xl">
        <p
          class="mb-4 font-heading text-xs font-bold uppercase tracking-[0.3em] text-[#F05A22]"
        >
          —
        </p>

        <h2
          class="font-heading text-4xl uppercase leading-[0.9] tracking-tight text-white md:text-6xl"
        >
          PERJALANAN KAMI
        </h2>
      </div>

      <!-- Timeline -->

      <div class="relative mt-12">
        <!-- Vertical Line -->

        <div class="absolute bottom-0 left-4 top-0 w-px bg-[#272A30] md:left-1/2" />

        <div class="space-y-12">
          <div
            v-for="(item, index) in timelines"
            :key="item.year"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
            :class="[
              'relative flex flex-col items-start gap-6 md:flex-row',
              index % 2 !== 0 && 'md:flex-row-reverse',
            ]"
          >
            <!-- Timeline Dot -->

            <div
              class="absolute left-4 mt-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#F05A22] shadow-[0_0_12px_rgba(240,90,34,0.7)] animate-pulse md:left-1/2"
            />

            <!-- Content -->

            <div class="ml-12 md:ml-0 md:w-1/2 md:px-12">
              <h3
                class="font-heading text-5xl leading-none text-[#F05A22] transition-all duration-300 hover:scale-105 md:text-7xl"
              >
                {{ item.year }}
              </h3>

              <p class="mt-3 text-base leading-relaxed text-white/90 md:text-lg">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CONTACT ================= -->

    <section class="py-24 md:py-32">
      <div class="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <!-- Left -->
          <div>
            <!-- Heading -->
            <div class="max-w-3xl">
              <p
                class="mb-4 font-heading text-xs font-bold uppercase tracking-[0.3em] text-[#F05A22] md:text-sm"
              >
                — KAPABILITAS PABRIK
              </p>

              <h2
                class="font-display text-4xl uppercase leading-[0.9] tracking-tight text-white md:text-6xl"
              >
                KAPABILITAS PABRIK
              </h2>

              <p class="mt-6 text-base leading-relaxed text-[#9CA3AF] md:text-lg">
                Fasilitas modern kami dilengkapi tungku tempa induksi, lini quenching
                otomatis, mesin shot peening, serta laboratorium pengujian material yang
                lengkap untuk memastikan kualitas setiap produk.
              </p>
            </div>

            <!-- Capability List -->
            <div class="mt-10 grid grid-cols-2 gap-3">
              <div
                v-for="item in capabilities"
                :key="item.title"
                class="flex items-center gap-3 border border-[#272A30] bg-[#15171C]/40 p-4 transition-colors hover:border-[#F05A22]"
              >
                <component :is="item.icon" class="h-5 w-5 shrink-0 text-[#F05A22]" />

                <span class="font-heading text-xs uppercase tracking-widest text-white">
                  {{ item.title }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right Image -->
          <div
            class="overflow-hidden border border-[#272A30] aspect-[4/5] md:aspect-[4/3] group"
          >
            <img
              :src="capabilityImage"
              alt="Factory Capability"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import factoryImage from "~/assets/images/produk1.jpg";
import steelImage from "~/assets/images/produk2.jpg";
import capabilityImage from "~/assets/images/produk2.jpg";

import {
  Heart,
  Cpu,
  Flame,
  ShieldCheck,
  Wrench,
  FlaskConical,
  Compass,
  Target,
} from "lucide-vue-next";

const values = [
  {
    title: "Integritas",
    icon: Heart,
  },
  {
    title: "Presisi",
    icon: Cpu,
  },
  {
    title: "Inovasi",
    icon: Flame,
  },
  {
    title: "Keberlanjutan",
    icon: ShieldCheck,
  },
];

const timelines = [
  {
    year: "1985",
    description: "Didirikan sebagai bengkel pegas keluarga di Bekasi.",
  },
  {
    year: "1996",
    description: "Ekspansi pertama dengan lini produksi semi-otomatis.",
  },
  {
    year: "2005",
    description: "Sertifikasi ISO 9001 & kontrak OEM pertama.",
  },
  {
    year: "2013",
    description: "Sertifikasi IATF 16949 dan ekspor perdana ke Asia Tenggara.",
  },
  {
    year: "2019",
    description: "Ekspansi pabrik 12 hektar dengan teknologi shot peening.",
  },
  {
    year: "2024",
    description: "Mencapai 14 negara tujuan ekspor & 1,2 juta unit per tahun.",
  },
];

const capabilities = [
  {
    title: "Induction Forging",
    icon: Flame,
  },
  {
    title: "Auto Quenching",
    icon: Cpu,
  },
  {
    title: "Shot Peening",
    icon: Wrench,
  },
  {
    title: "Material Lab",
    icon: FlaskConical,
  },
];
</script>

<style scoped>
.timeline-line {
  transform-origin: top;
  animation: growLine 1.4s ease forwards;
}

@keyframes growLine {
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
}
</style>
