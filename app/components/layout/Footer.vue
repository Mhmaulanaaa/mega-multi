<template>
  <footer class="bg-[#0B0B0B] border-t border-white/10">
    <div class="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div class="grid gap-12 lg:grid-cols-4">
        <!-- Logo -->
        <div>
          <div class="flex items-center gap-3">
            <div
              class="flex h-12 w-12 items-center justify-center bg-[#F15A24] text-xl font-black"
            >
              M
            </div>

            <div>
              <h2 class="font-bold uppercase">Mega Multi Pegas</h2>

              <p class="text-xs uppercase tracking-[3px] text-gray-500">EST.1985</p>
            </div>
          </div>

          <p class="mt-6 leading-8 text-gray-400">
            Memproduksi leaf spring kelas berat untuk kendaraan niaga dan industri dengan
            kualitas terbaik.
          </p>
        </div>

        <!-- Menu -->
        <div>
          <h3 class="mb-6 font-bold uppercase">Perusahaan</h3>

          <ul class="space-y-3 text-gray-400">
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Produk</a></li>
            <li><a href="#">Pangsa Pasar</a></li>
            <li><a href="#">Karir</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-6 font-bold uppercase">Kontak</h3>

          <ul class="space-y-3 text-gray-400">
            <li>Jakarta, Indonesia</li>
            <li>info@megamultipegas.com</li>
            <li>+62 21 12345678</li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="mb-6 font-bold uppercase">Newsletter</h3>

          <input
            placeholder="Email Anda"
            class="w-full border border-white/10 bg-transparent px-4 py-3 outline-none focus:border-[#F15A24]"
          />

          <button
            class="mt-4 w-full bg-[#F15A24] py-3 font-semibold uppercase transition hover:bg-orange-600"
          >
            Berlangganan
          </button>
        </div>
      </div>

      <div class="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
        © {{ new Date().getFullYear() }} PT. Mega Multi Pegas. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
