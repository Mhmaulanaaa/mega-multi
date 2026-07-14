<template>
  <section class="bg-[#0B0B0B] border-y border-[#202020]">
    <div class="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4">
      <div
        v-for="item in stats"
        :key="item.label"
        class="border-r border-[#202020] last:border-r-0 px-8 py-10"
      >
        <h2 class="font-heading text-5xl text-white">
          {{ item.value }}
        </h2>

        <p class="mt-2 text-xs uppercase tracking-[3px] text-gray-500">
          {{ item.label }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    value: "40+",
    label: "Tahun Berpengalaman",
  },
  {
    value: "1.200.000+",
    label: "Unit / Tahun",
  },
  {
    value: "25+",
    label: "Mitra OEM",
  },
  {
    value: "14",
    label: "Negara Tujuan Ekspor",
  },
];
</script>
