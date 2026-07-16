<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Menu, X, ChevronRight } from "lucide-vue-next";

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
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      isScrolled
        ? 'border-b border-[#272A30] bg-[#0B0C10]/90 backdrop-blur-xl'
        : 'bg-transparent',
    ]"
  >
    <div
      class="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="group flex items-center gap-3">
        <div
          class="font-heading flex h-10 w-10 items-center justify-center bg-[#F15A24] font-heading text-xl text-white transition-colors group-hover:bg-[#C43015]"
        >
          M
        </div>

        <div class="hidden sm:flex flex-col leading-none">
          <span class="font-heading text-base tracking-wider text-white">
            MEGA MULTI PEGAS
          </span>

          <span class="mt-0.5 text-[9px] tracking-[0.3em] text-[#9CA3AF]">
            EST. 1985 • PT.
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden items-center gap-10 lg:flex">
        <NuxtLink
          v-for="menu in menus"
          :key="menu.to"
          :to="menu.to"
          class="relative pb-2 text-xs uppercase tracking-[3px] transition"
          :class="
            route.path === menu.to
              ? ' text-[#F15A24]'
              : ' text-white hover:text-[#F15A24]'
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
      <div class="flex items-center gap-3">
        <button
          class="group hidden items-center gap-2 border border-white/10 px-3 py-2 transition-colors hover:border-[#F15A24] sm:flex"
        >
          <span class="text-xs tracking-widest text-[#F15A24]"> ID </span>

          <span class="text-white/20">/</span>

          <span class="text-xs tracking-widest text-white/40"> EN </span>
        </button>

        <button
          class="hidden items-center gap-2 bg-[#F15A24] px-5 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-[#C43015] md:inline-flex"
        >
          Minta Penawaran

          <ChevronRight class="h-4 w-4" />
        </button>

        <button class="p-2 text-white lg:hidden" @click="mobileMenu = !mobileMenu">
          <Menu v-if="!mobileMenu" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
      </div>
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
        class="border-t border-[#272A30] bg-[#0B0C10]/95 backdrop-blur-xl lg:hidden"
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
                ? 'font-heading text-[#F15A24]'
                : 'font-heading text-white hover:text-[#F15A24]'
            "
          >
            {{ menu.name }}
          </NuxtLink>

          <button
            class="font-heading mt-4 w-full bg-[#F15A24] py-3 font-semibold uppercase"
          >
            Minta Penawaran
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>
<style scoped>
.font-heading {
  font-family: "Bebas Neue", sans-serif;
  font-size: 16px;
  font-weight: 400;
}
</style>
