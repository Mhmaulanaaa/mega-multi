<script setup lang="ts">
import heroImage from "~/assets/images/herosection.jpg";
</script>

<template>
  <section class="relative h-screen overflow-hidden">
    <!-- Background -->
    <div
      class="absolute inset-0 hero-bg"
      :style="{ backgroundImage: `url(${heroImage})` }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Bottom Gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10"
    ></div>

    <!-- Grid -->
    <div class="absolute inset-0 hero-grid"></div>

    <!-- Content -->
    <div class="relative z-20 mx-auto flex h-full max-w-7xl items-center px-8 lg:px-12">
      <div class="mt-28 max-w-3xl">
        <!-- Small Label -->
        <div
          class="mb-5 flex items-center gap-4 text-xs uppercase tracking-[6px] text-[#F15A24]"
        >
          <div class="h-px w-16 bg-[#F15A24]"></div>

          Presisi Dalam Setiap Gerakan
        </div>

        <!-- Heading -->
        <h1 class="font-heading uppercase leading-[0.85] text-white">
          <span class="block text-[72px] md:text-[110px] xl:text-[145px]">
            BAJA YANG
          </span>

          <span class="block text-[72px] md:text-[110px] xl:text-[145px] text-[#F15A24]">
            MENOPANG
          </span>

          <span class="block text-[72px] md:text-[110px] xl:text-[145px]">
            INDUSTRI.
          </span>
        </h1>

        <p class="mt-8 max-w-lg leading-8 text-gray-300">
          PT. Mega Multi Pegas memproduksi leaf spring kelas berat untuk kendaraan
          komersial, niaga, dan industri di seluruh Indonesia dan Asia Tenggara.
        </p>

        <div class="mt-10 flex gap-5">
          <button
            class="bg-[#F15A24] px-8 py-4 text-xs font-semibold uppercase tracking-[2px] transition hover:bg-orange-600"
          >
            Lihat Produk →
          </button>

          <button
            class="border border-white/20 px-8 py-4 text-xs font-semibold uppercase tracking-[2px] backdrop-blur hover:bg-white hover:text-black transition"
          >
            Tentang Kami ↗
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Fade -->
    <div
      class="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-[#111111] to-transparent"
    ></div>
  </section>
</template>

<style scoped>
.hero-bg {
  background-size: cover;
  background-position: center;
  animation: zoomHero 18s ease-in-out infinite alternate;
}

.hero-grid {
  background-image: linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);

  background-size: 48px 48px;
}

.font-heading {
  font-family: "Bebas Neue", sans-serif;
}

@keyframes zoomHero {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.08);
  }
}
</style>
