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
    <div
      class="relative z-20 mx-auto flex h-full w-full max-w-7xl items-center px-8 lg:px-12"
    >
      <div class="mt-28 w-full">
        <!-- Small Label -->
        <div
          class="font-heading mb-5 flex items-center gap-4 text-md uppercase tracking-[6px] text-[#F15A24] animate-fade-up"
        >
          <div class="h-px w-16 bg-[#F15A24]"></div>
          Presisi Dalam Setiap Gerakan
        </div>

        <!-- Heading -->
        <h1 class="font-heading uppercase leading-[0.85] text-white">
          <span
            class="block text-[72px] md:text-[110px] xl:text-[200px] animate-fade-up"
            style="animation-delay: 0.2s"
          >
            BAJA YANG
          </span>

          <span
            class="block text-[72px] md:text-[110px] xl:text-[200px] text-[#F15A24] animate-fade-up"
            style="animation-delay: 0.4s"
          >
            MENOPANG
          </span>

          <span
            class="block text-[72px] md:text-[110px] xl:text-[200px] animate-fade-up"
            style="animation-delay: 0.6s"
          >
            INDUSTRI.
          </span>
        </h1>

        <!-- Deskripsi + Button -->
        <div
          class="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between animate-fade-up delay-500"
        >
          <p
            class="max-w-xl leading-10 text-gray-300 animate-fade-up"
            style="animation-delay: 0.8s"
          >
            PT. Mega Multi Pegas memproduksi leaf spring kelas berat untuk kendaraan
            komersial, niaga, dan industri di seluruh Indonesia dan Asia Tenggara.
          </p>

          <div class="flex shrink-0 gap-5 animate-fade-up" style="animation-delay: 1s">
            <button
              class="bg-[#F15A24] px-8 py-4 text-xs font-semibold uppercase tracking-[2px] transition hover:bg-orange-600"
            >
              Lihat Produk →
            </button>

            <button
              class="border border-white/20 px-8 py-4 text-xs font-semibold uppercase tracking-[2px] backdrop-blur transition hover:bg-white hover:text-black"
            >
              Tentang Kami ↗
            </button>
          </div>
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

.animate-fade-up {
  opacity: 0;
  transform: translateY(50px);
  animation: fadeUp 1s ease forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-700 {
  animation-delay: 0.7s;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
