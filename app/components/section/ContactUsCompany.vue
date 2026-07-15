<script setup lang="ts">
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-vue-next";

const contacts = [
  {
    icon: MapPin,
    title: "KANTOR PUSAT",
    bg: "bg-[#0B0C10]",
    content: [
      "Jl. Raya Industri Bekasi No. 88",
      "Kawasan Industri MM2100",
      "Bekasi, Jawa Barat 17520",
      "Indonesia",
    ],
  },
  {
    icon: Phone,
    title: "TELEPON",
    bg: "bg-[#15171C]",
    links: [
      {
        label: "+62 21 8998 1234",
        href: "tel:+622189981234",
        primary: true,
      },
      {
        label: "+62 812 3456 7890 (WA)",
        href: "tel:+6281234567890",
      },
    ],
  },
  {
    icon: Mail,
    title: "EMAIL",
    bg: "bg-[#0B0C10]",
    links: [
      {
        label: "info@megamultipegas.co.id",
        href: "mailto:info@megamultipegas.co.id",
        primary: true,
      },
      {
        label: "sales@megamultipegas.co.id",
        href: "mailto:sales@megamultipegas.co.id",
      },
      {
        label: "export@megamultipegas.co.id",
        href: "mailto:export@megamultipegas.co.id",
      },
    ],
  },
  {
    icon: Clock,
    title: "JAM OPERASIONAL",
    bg: "bg-[#15171C]",
    content: ["Sen - Jum : 08.00 - 17.00 WIB", "Sabtu : 08.00 - 13.00 WIB"],
  },
];
const departments = [
  {
    title: "Sales & Ekspor",
    phone: "+62 21 8998 1235",
    phoneHref: "tel:+622189981235",
    email: "sales@megamultipegas.co.id",
    emailHref: "mailto:sales@megamultipegas.co.id",
  },
  {
    title: "Engineering",
    phone: "+62 21 8998 1236",
    phoneHref: "tel:+622189981236",
    email: "engineering@megamultipegas.co.id",
    emailHref: "mailto:engineering@megamultipegas.co.id",
  },
];
</script>

<template>
  <!-- ================= Heading ================= -->
  <main class="bg-[#0B0C10] text-white">
    <section class="relative mx-auto mb-24 max-w-[1440px] px-6 pt-40 lg:px-12">
      <p
        class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#F05A22]"
      >
        <span class="h-px w-6 bg-[#F05A22]" />
        HUBUNGI KAMI
      </p>

      <h1
        class="text-[clamp(3rem,10vw,8.5rem)] font-black uppercase leading-[0.85] tracking-tight text-white"
      >
        <span class="block">MARI</span>
        <span class="block text-[#F05A22]">BERDISKUSI.</span>
      </h1>

      <p class="mt-8 max-w-2xl text-base leading-8 text-[#9CA3AF] md:text-lg">
        Tim sales & engineering kami siap mendampingi proyek Anda. Hubungi kantor pusat
        atau kunjungi pabrik kami di Bekasi.
      </p>
    </section>

    <!-- ================= Contact Cards ================= -->

    <section class="mx-auto mb-24 max-w-[1440px] px-6 lg:px-12">
      <div
        class="grid gap-px border border-[#272A30] bg-[#272A30] md:grid-cols-2 xl:grid-cols-4"
      >
        <div
          v-for="item in contacts"
          :key="item.title"
          :class="[item.bg, 'group p-8 transition-all duration-300 hover:bg-[#1A1D22]']"
        >
          <component
            :is="item.icon"
            class="mb-6 h-7 w-7 text-[#F05A22] transition-transform duration-300 group-hover:scale-110"
          />

          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#9CA3AF]">
            {{ item.title }}
          </p>

          <!-- Text -->
          <template v-if="item.content">
            <p class="space-y-1 text-base leading-8 text-white">
              <span v-for="line in item.content" :key="line" class="block">
                {{ line }}
              </span>
            </p>
          </template>

          <!-- Links -->
          <template v-else>
            <a
              v-for="link in item.links"
              :key="link.label"
              :href="link.href"
              :class="[
                'block transition-colors duration-300 hover:text-[#F05A22]',
                link.primary
                  ? 'text-2xl font-semibold text-white'
                  : 'mt-2 text-sm text-white/70',
              ]"
            >
              {{ link.label }}
            </a>
          </template>
        </div>
      </div>
    </section>
    <!-- ================= Departments ================= -->

    <section class="mx-auto mb-16 max-w-[1440px] px-6 lg:px-12">
      <div class="grid gap-4 md:grid-cols-2">
        <div
          v-for="dept in departments"
          :key="dept.title"
          class="group border border-[#272A30] bg-[#0B0C10] p-8 transition-all duration-300 hover:border-[#F05A22] md:p-10"
        >
          <p
            class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#F05A22]"
          >
            <span class="h-px w-6 bg-[#F05A22]" />
            {{ dept.title }}
          </p>

          <div class="space-y-4">
            <a
              :href="dept.phoneHref"
              class="flex items-center gap-3 text-white transition-colors hover:text-[#F05A22]"
            >
              <Phone class="h-4 w-4 text-[#F05A22]" />

              <span class="text-base font-medium tracking-wide">
                {{ dept.phone }}
              </span>
            </a>

            <a
              :href="dept.emailHref"
              class="flex items-center gap-3 text-white transition-colors hover:text-[#F05A22]"
            >
              <Mail class="h-4 w-4 text-[#F05A22]" />

              <span class="text-sm">
                {{ dept.email }}
              </span>
            </a>
          </div>

          <a
            :href="dept.emailHref"
            class="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:text-[#F05A22]"
          >
            Kirim Email

            <ArrowRight
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>

    <!-- ================= Factory Location ================= -->

    <section class="mx-auto mb-24 max-w-[1440px] px-6 lg:px-12">
      <p
        class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#F05A22]"
      >
        <span class="h-px w-6 bg-[#F05A22]" />
        Lokasi Pabrik
      </p>

      <div
        class="overflow-hidden border border-[#272A30] grayscale transition duration-500 hover:grayscale-0 aspect-[16/9] md:aspect-[21/9]"
      >
        <iframe
          title="Factory Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8716135462164!2d107.13!3d-6.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTcnMDkuNiJTIDEwN8KwMDcnNTAuNCJF!5e0!3m2!1sen!2sid!4v1700000000000"
          class="h-full w-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  </main>
</template>
