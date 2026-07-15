<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const chartData = {
  labels: ["2019", "2020", "2021", "2022", "2023", "2024"],

  datasets: [
    {
      label: "OEM",
      data: [18000, 15000, 21000, 24000, 27000, 31000],
      backgroundColor: "#F85A1A",
      stack: "total",
    },
    {
      label: "Aftermarket",
      data: [9000, 8000, 11000, 12500, 14000, 15500],
      backgroundColor: "#CF3411",
      stack: "total",
    },
    {
      label: "Ekspor",
      data: [3000, 2500, 4000, 5500, 7000, 9000],
      backgroundColor: "#596273",
      stack: "total",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      backgroundColor: "#111217",
      borderColor: "#272A30",
      borderWidth: 1,
    },
  },

  scales: {
    x: {
      stacked: true,

      grid: {
        display: false,
      },

      ticks: {
        color: "#A1A1AA",
      },

      border: {
        color: "#555",
      },
    },

    y: {
      stacked: true,

      min: 0,
      max: 60000,

      ticks: {
        color: "#A1A1AA",
        stepSize: 15000,
      },

      grid: {
        color: "#2A2D35",
      },

      border: {
        color: "#666",
      },
    },
  },
};
</script>

<template>
  <div class="border border-[#272A30] bg-[#111217] p-8 xl:p-10">
    <p
      class="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#F05A22]"
    >
      <span class="h-px w-5 bg-[#F05A22]" />
      Pertumbuhan Volume (Ton)
    </p>

    <div class="h-[320px]">
      <Bar :data="chartData" :options="options" />
    </div>

    <div class="mt-8 flex justify-center gap-6 text-[12px] uppercase tracking-[0.2em]">
      <div class="flex items-center gap-2">
        <span class="h-3 w-3 bg-[#CF3411]" />
        <span class="text-gray-400">Aftermarket</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="h-3 w-3 bg-[#596273]" />
        <span class="text-gray-400">Ekspor</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="h-3 w-3 bg-[#F85A1A]" />
        <span class="text-gray-400">OEM</span>
      </div>
    </div>
  </div>
</template>
