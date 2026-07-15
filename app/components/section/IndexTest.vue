<template>
  <div data-testid="contact-page" class="bg-[#0B0C10] pt-32 pb-24">
    <section class="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
      <p
        class="font-heading text-xs md:text-sm uppercase tracking-[0.3em] text-[#F05A22] mb-6"
      >
        — HUBUNGI KAMI
      </p>
      <h1
        class="font-display text-[clamp(3rem,10vw,9rem)] uppercase tracking-tighter leading-[0.85] text-white"
      >
        <span class="block">MARI</span
        ><span class="block text-[#F05A22]">BERDISKUSI.</span>
      </h1>
      <p class="mt-8 max-w-2xl text-base md:text-lg text-[#9CA3AF] leading-relaxed">
        Tim sales &amp; engineering kami siap mendampingi proyek Anda. Hubungi kantor
        pusat atau kunjungi pabrik kami di Bekasi.
      </p>
    </section>
    <section
      data-testid="contact-info"
      class="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16"
    >
      <div
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#272A30] border border-[#272A30]"
      >
        <div class="bg-[#0B0C10] p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin w-6 h-6 text-[#F05A22] mb-5"
            aria-hidden="true"
          >
            <path
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            ></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p class="font-heading text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-3">
            KANTOR PUSAT
          </p>
          <p class="text-white text-base leading-relaxed whitespace-pre-line">
            Jl. Raya Industri Bekasi No. 88 Kawasan Industri MM2100 Bekasi, Jawa Barat
            17520 Indonesia
          </p>
        </div>
        <div class="bg-[#15171C] p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-phone w-6 h-6 text-[#F05A22] mb-5"
            aria-hidden="true"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            ></path>
          </svg>
          <p class="font-heading text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-3">
            TELEPON
          </p>
          <a
            href="tel:+62218998123"
            data-testid="contact-phone-1"
            class="block font-display text-2xl md:text-3xl uppercase tracking-tight text-white hover:text-[#F05A22] transition-colors"
            >+62 21 8998 1234</a
          ><a
            href="tel:+62218998123"
            data-testid="contact-phone-2"
            class="block mt-2 text-sm text-white/70 hover:text-[#F05A22] transition-colors"
            >+62 812 3456 7890 (WA)</a
          >
        </div>
        <div class="bg-[#0B0C10] p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail w-6 h-6 text-[#F05A22] mb-5"
            aria-hidden="true"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>
          <p class="font-heading text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-3">
            EMAIL
          </p>
          <a
            href="mailto:info@megamultipegas.co.id"
            data-testid="contact-email-info"
            class="block text-white hover:text-[#F05A22] transition-colors text-base"
            >info@megamultipegas.co.id</a
          ><a
            href="mailto:sales@megamultipegas.co.id"
            data-testid="contact-email-sales"
            class="block mt-2 text-sm text-white/70 hover:text-[#F05A22] transition-colors"
            >sales@megamultipegas.co.id</a
          ><a
            href="mailto:export@megamultipegas.co.id"
            data-testid="contact-email-export"
            class="block mt-1 text-sm text-white/70 hover:text-[#F05A22] transition-colors"
            >export@megamultipegas.co.id</a
          >
        </div>
        <div class="bg-[#15171C] p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-clock w-6 h-6 text-[#F05A22] mb-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <p class="font-heading text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mb-3">
            JAM OPERASIONAL
          </p>
          <p class="text-white text-base leading-relaxed whitespace-pre-line">
            Sen - Jum: 08:00 - 17:00 WIB Sabtu: 08:00 - 13:00 WIB
          </p>
        </div>
      </div>
    </section>
    <section data-testid="departments" class="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
      <div class="grid md:grid-cols-2 gap-4">
        <div
          data-testid="department-0"
          class="border border-[#272A30] hover:border-[#F05A22] p-8 md:p-10 transition-colors group"
        >
          <p class="font-heading text-xs uppercase tracking-[0.3em] text-[#F05A22] mb-4">
            — SALES &amp; EKSPOR
          </p>
          <div class="space-y-3">
            <a
              href="tel:+62 21 8998 1235"
              class="flex items-center gap-3 text-white hover:text-[#F05A22] transition-colors"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone w-4 h-4 text-[#F05A22]"
                aria-hidden="true"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path></svg
              ><span class="font-heading text-base tracking-wide"
                >+62 21 8998 1235</span
              ></a
            ><a
              href="mailto:sales@megamultipegas.co.id"
              class="flex items-center gap-3 text-white hover:text-[#F05A22] transition-colors"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail w-4 h-4 text-[#F05A22]"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect></svg
              ><span class="font-body text-sm">sales@megamultipegas.co.id</span></a
            >
          </div>
          <a
            href="mailto:sales@megamultipegas.co.id"
            class="mt-6 inline-flex items-center gap-2 font-heading text-xs uppercase tracking-widest text-white/70 hover:text-[#F05A22] transition-colors"
            >Kirim Email
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right w-3.5 h-3.5"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path></svg
          ></a>
        </div>
        <div
          data-testid="department-1"
          class="border border-[#272A30] hover:border-[#F05A22] p-8 md:p-10 transition-colors group"
        >
          <p class="font-heading text-xs uppercase tracking-[0.3em] text-[#F05A22] mb-4">
            — ENGINEERING
          </p>
          <div class="space-y-3">
            <a
              href="tel:+62 21 8998 1236"
              class="flex items-center gap-3 text-white hover:text-[#F05A22] transition-colors"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone w-4 h-4 text-[#F05A22]"
                aria-hidden="true"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path></svg
              ><span class="font-heading text-base tracking-wide"
                >+62 21 8998 1236</span
              ></a
            ><a
              href="mailto:engineering@megamultipegas.co.id"
              class="flex items-center gap-3 text-white hover:text-[#F05A22] transition-colors"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail w-4 h-4 text-[#F05A22]"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect></svg
              ><span class="font-body text-sm">engineering@megamultipegas.co.id</span></a
            >
          </div>
          <a
            href="mailto:engineering@megamultipegas.co.id"
            class="mt-6 inline-flex items-center gap-2 font-heading text-xs uppercase tracking-widest text-white/70 hover:text-[#F05A22] transition-colors"
            >Kirim Email
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right w-3.5 h-3.5"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path></svg
          ></a>
        </div>
      </div>
    </section>
    <section data-testid="map-section" class="max-w-[1440px] mx-auto px-6 lg:px-12">
      <p class="font-heading text-xs uppercase tracking-[0.3em] text-[#F05A22] mb-6">
        — LOKASI PABRIK
      </p>
      <div class="border border-[#272A30] map-grayscale aspect-[16/9] md:aspect-[21/9]">
        <iframe
          title="Factory Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8716135462164!2d107.13!3d-6.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTcnMDkuNiJTIDEwN8KwMDcnNTAuNCJF!5e0!3m2!1sen!2sid!4v1700000000000"
          width="100%"
          height="100%"
          style="border: 0px"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>
