<template>
  <section class="bg-[#161616] py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-12 flex items-end justify-between">
        <div>
          <p class="text-xs uppercase tracking-[5px] text-[#F15A24]">Katalog Produk</p>

          <h2 class="font-heading mt-3 text-6xl uppercase leading-none text-white">
            Dibangun Untuk Beban Berat
          </h2>
        </div>

        <button class="hidden border border-[#2B2B2B] px-6 py-3 uppercase lg:block">
          Eksplorasi →
        </button>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <div
          v-for="product in products"
          :key="product.title"
          class="group cursor-pointer overflow-hidden border border-[#2B2B2B]"
        >
          <div class="overflow-hidden">
            <img
              :src="product.image"
              class="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div class="p-6">
            <span class="mb-3 inline-block bg-[#F15A24] px-2 py-1 text-[10px] uppercase">
              Baru
            </span>

            <h3 class="font-heading text-3xl uppercase text-white">
              {{ product.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import productImage1 from "~/assets/images/produk1.jpg";
import productImage2 from "~/assets/images/produk2.jpg";
import productImage3 from "~/assets/images/produk3.jpg";
const products = [
  {
    title: "Multi Leaf Spring",
    image: productImage1,
  },
  {
    title: "Parabolic Spring",
    image: productImage2,
  },
  {
    title: "Heavy Duty Spring",
    image: productImage3,
  },
];
</script>
