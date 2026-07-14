<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Menu, X } from "lucide-vue-next";

const route = useRoute();

const mobileMenu = ref(false);
const isScrolled = ref(false);

const menus = [
  {
    name: "Beranda",
    to: "/",
  },
  {
    name: "Profil",
    to: "/profil",
  },
  {
    name: "Produk",
    to: "/produk",
  },
  {
    name: "Pangsa Pasar",
    to: "/pangsa-pasar",
  },
  {
    name: "Hubungi Kami",
    to: "/hubungi-kami",
  },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
        : 'bg-transparent',
    ]"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <div
          class="flex h-11 w-11 items-center justify-center bg-[#F15A24] font-black text-xl text-white"
        >
          M
        </div>

        <div>
          <h1 class="font-bold uppercase tracking-wide">Mega Multi Pegas</h1>

          <p class="text-xs uppercase tracking-[3px] text-gray-400">EST. 1985 • PT.</p>
        </div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden items-center gap-10 lg:flex">
        <NuxtLink
          v-for="menu in menus"
          :key="menu.to"
          :to="menu.to"
          class="relative pb-2 text-sm font-medium uppercase tracking-[3px] transition"
          :class="
            route.path === menu.to ? 'text-[#F15A24]' : 'text-white hover:text-[#F15A24]'
          "
        >
          {{ menu.name }}

          <span
            class="absolute bottom-0 left-0 h-[2px] transition-all duration-300"
            :class="
              route.path === menu.to
                ? 'w-full bg-[#F15A24]'
                : 'w-0 bg-[#F15A24] group-hover:w-full'
            "
          />
        </NuxtLink>
      </nav>

      <!-- Right -->
      <div class="hidden items-center gap-4 lg:flex">
        <button
          class="border border-white/20 px-4 py-2 text-xs uppercase transition hover:bg-white hover:text-black"
        >
          ID
        </button>

        <button
          class="bg-[#F15A24] px-6 py-3 text-sm font-semibold uppercase transition hover:bg-orange-600"
        >
          Minta Penawaran →
        </button>
      </div>

      <!-- Mobile Button -->
      <button class="text-white lg:hidden" @click="mobileMenu = !mobileMenu">
        <Menu v-if="!mobileMenu" :size="28" />
        <X v-else :size="28" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="-translate-y-5 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-5 opacity-0"
    >
      <div
        v-if="mobileMenu"
        class="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
      >
        <div class="space-y-5 p-6">
          <NuxtLink
            v-for="menu in menus"
            :key="menu.to"
            :to="menu.to"
            @click="mobileMenu = false"
            class="block border-b border-white/5 pb-3 uppercase tracking-[3px] transition"
            :class="
              route.path === menu.to
                ? 'text-[#F15A24]'
                : 'text-white hover:text-[#F15A24]'
            "
          >
            {{ menu.name }}
          </NuxtLink>

          <button class="mt-4 w-full bg-[#F15A24] py-3 font-semibold uppercase">
            Minta Penawaran
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>
