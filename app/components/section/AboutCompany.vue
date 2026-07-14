<template>
  <section class="bg-[#101010] py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid gap-14 lg:grid-cols-2">
        <!-- Left -->

        <div>
          <p class="text-xs uppercase tracking-[5px] text-[#F15A24]">
            Tentang Perusahaan
          </p>

          <h2 class="font-heading mt-4 text-6xl leading-none uppercase text-white">
            MANUFAKTUR LEAF SPRING TERDEPAN DI INDONESIA
          </h2>

          <p class="mt-8 leading-8 text-gray-400">
            Sejak 1985, kami memproduksi pegas daun berkualitas tinggi untuk kendaraan
            niaga berat dengan fasilitas modern dan pengendalian kualitas berstandar
            internasional.
          </p>

          <button
            class="mt-8 border-b border-[#F15A24] pb-2 text-sm uppercase tracking-[3px] text-[#F15A24]"
          >
            Profil →
          </button>
        </div>

        <!-- Right -->

        <div class="grid gap-5 sm:grid-cols-2">
          <div
            v-for="card in cards"
            :key="card.title"
            class="border border-[#2B2B2B] p-8 hover:border-[#F15A24] transition"
          >
            <div class="text-[#F15A24] text-xl mb-4">●</div>

            <h3 class="font-heading text-3xl uppercase text-white">
              {{ card.title }}
            </h3>

            <p class="mt-4 text-gray-400 leading-7">
              {{ card.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Presisi",
    desc: "Teknologi modern menghasilkan pegas dengan presisi tinggi.",
  },
  {
    title: "Daya Tahan",
    desc: "Material premium dengan umur pakai yang panjang.",
  },
  {
    title: "Skala",
    desc: "Kapasitas produksi besar untuk memenuhi kebutuhan industri.",
  },
  {
    title: "ISO 16949",
    desc: "Sistem manajemen mutu otomotif bersertifikasi internasional.",
  },
];
</script>
