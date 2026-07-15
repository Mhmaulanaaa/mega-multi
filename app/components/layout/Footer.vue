<template>
  <footer class="relative border-t border-[#272A30] bg-[#0B0C10]">
    <div class="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-4">
        <!-- Company -->
        <div>
          <div class="mb-4 flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center bg-[#F15A24] font-heading text-xl text-white"
            >
              M
            </div>

            <span class="font-heading text-base tracking-wider text-white">
              MEGA MULTI PEGAS
            </span>
          </div>

          <p class="mb-6 text-sm leading-relaxed text-[#9CA3AF]">
            Presisi. Kekuatan. Warisan.
          </p>

          <div class="flex gap-3">
            <a
              href="#"
              class="flex h-9 w-9 items-center justify-center border border-[#272A30] text-white/70 transition-colors hover:border-[#F15A24] hover:text-[#F15A24]"
            >
              <Linkedin class="h-4 w-4" />
            </a>

            <a
              href="#"
              class="flex h-9 w-9 items-center justify-center border border-[#272A30] text-white/70 transition-colors hover:border-[#F15A24] hover:text-[#F15A24]"
            >
              <Facebook class="h-4 w-4" />
            </a>

            <a
              href="#"
              class="flex h-9 w-9 items-center justify-center border border-[#272A30] text-white/70 transition-colors hover:border-[#F15A24] hover:text-[#F15A24]"
            >
              <Instagram class="h-4 w-4" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="mb-4 font-heading text-xs uppercase tracking-[0.3em] text-[#F15A24]">
            TAUTAN CEPAT
          </h4>

          <ul class="space-y-3 text-sm text-white/80">
            <li><a href="#" class="hover:text-[#F15A24]">Beranda</a></li>
            <li><a href="#" class="hover:text-[#F15A24]">Profil</a></li>
            <li><a href="#" class="hover:text-[#F15A24]">Produk</a></li>
            <li><a href="#" class="hover:text-[#F15A24]">Pangsa Pasar</a></li>
            <li><a href="#" class="hover:text-[#F15A24]">Hubungi Kami</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="mb-4 font-heading text-xs uppercase tracking-[0.3em] text-[#F15A24]">
            KONTAK
          </h4>

          <ul class="space-y-4 text-sm text-white/80">
            <li class="flex gap-3">
              <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-[#F15A24]" />
              <span> Kawasan Industri MM2100, Bekasi 17520, Indonesia </span>
            </li>

            <li class="flex gap-3">
              <Phone class="mt-0.5 h-4 w-4 shrink-0 text-[#F15A24]" />
              <span>+62 21 8998 1234</span>
            </li>

            <li class="flex gap-3">
              <Mail class="mt-0.5 h-4 w-4 shrink-0 text-[#F15A24]" />
              <span>info@megamultipegas.co.id</span>
            </li>
          </ul>
        </div>

        <!-- Certification -->
        <div>
          <h4 class="mb-4 font-heading text-xs uppercase tracking-[0.3em] text-[#F15A24]">
            SERTIFIKASI
          </h4>

          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="cert in certifications"
              :key="cert"
              class="border border-[#272A30] px-3 py-2 text-center font-heading text-[11px] tracking-widest text-white/70"
            >
              {{ cert }}
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#272A30] pt-6 md:flex-row"
      >
        <p class="text-xs text-white/50">
          © {{ year }} PT. Mega Multi Pegas. Seluruh hak cipta dilindungi.
        </p>

        <p class="font-heading text-[10px] uppercase tracking-[0.3em] text-white/30">
          FORGED IN BEKASI · INDONESIA
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Linkedin, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-vue-next";

const year = new Date().getFullYear();

const certifications = ["IATF 16949", "ISO 9001", "ISO 14001", "OHSAS 18001"];
</script>
