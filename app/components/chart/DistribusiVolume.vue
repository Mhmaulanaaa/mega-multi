<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip);

const chartData = {
  labels: ["OEM", "Aftermarket", "Ekspor"],
  datasets: [
    {
      data: [52, 30, 18],
      backgroundColor: ["#F85A1A", "#CF3411", "#596273"],
      borderColor: "#111217",
      borderWidth: 6,
      hoverOffset: 6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "55%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#111217",
      borderColor: "#272A30",
      borderWidth: 1,
      titleColor: "#fff",
      bodyColor: "#fff",
    },
  },
};
</script>

<template>
  <div class="border border-[#272A30] bg-[#111217] p-8 xl:p-10">
    <p
      class="font-heading mb-8 flex items-center gap-3 text-[11px] text-lg uppercase tracking-[0.35em] text-[#F05A22]"
    >
      <span class="h-px w-5 bg-[#F05A22]" />
      Distribusi Volume 2024
    </p>

    <div class="h-[320px]">
      <Doughnut :data="chartData" :options="options" />
    </div>

    <div class="mt-8 grid grid-cols-3 gap-6 text-[12px] uppercase tracking-[0.2em]">
      <div class="flex items-center gap-2">
        <span class="h-3 w-3 bg-[#F85A1A]" />
        <span class="text-gray-300 font-heading">OEM 52%</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="h-3 w-3 bg-[#CF3411]" />
        <span class="text-gray-300 font-heading">Aftermarket 30%</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="h-3 w-3 bg-[#596273]" />
        <span class="text-gray-300 font-heading">Ekspor 18%</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.font-heading {
  font-family: "Bebas Neue", sans-serif;
}
</style>
