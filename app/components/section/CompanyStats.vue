<template>
  <section class="border-y border-[#202020] bg-[#0B0B0B]">
    <div class="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(item, index) in stats"
        :key="item.label"
        class="border-r border-[#202020] px-8 py-10 last:border-r-0"
      >
        <h2 class="font-heading text-5xl text-white">
          {{ formatValue(animatedValues[index], item.suffix) }}
        </h2>

        <p class="mt-2 text-xs uppercase tracking-[3px] text-gray-500">
          {{ item.label }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: 40,
    suffix: "+",
    label: "Tahun Berpengalaman",
  },
  {
    value: 1200000,
    suffix: "+",
    label: "Unit / Tahun",
  },
  {
    value: 25,
    suffix: "+",
    label: "Mitra OEM",
  },
  {
    value: 14,
    suffix: "",
    label: "Negara Tujuan Ekspor",
  },
];

const animatedValues = ref(stats.map(() => 0));

function animateValue(index: number, end: number, duration = 2500) {
  const start = performance.now();

  function update(now: number) {
    const progress = Math.min((now - start) / duration, 1);

    // Ease Out
    const ease = 1 - Math.pow(1 - progress, 3);

    animatedValues.value[index] = Math.floor(end * ease);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      animatedValues.value[index] = end;
    }
  }

  requestAnimationFrame(update);
}

function formatValue(value: number | undefined, suffix: string) {
  return (value ?? 0).toLocaleString("id-ID") + suffix;
}

onMounted(() => {
  stats.forEach((item, index) => {
    animateValue(index, item.value);
  });
});
</script>
