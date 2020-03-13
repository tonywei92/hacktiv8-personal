<template>
  <div class="left-side">
    <h3 style="font-size:22px; color:#4a4a4a;">
      Merasa tidak sehat? Biarkan kami membantu kamu..
    </h3>
    <div class="card-menu">
      <div class="card tanya-dokter">
        <div class="card-image">
          <img src="../../../assets/tanyadokter.png" alt="tanya-dokter" />
        </div>
        <div class="card-title">
          <h4>Tanya Dokter</h4>
        </div>
        <div class="card-description">
          <p>Chat dengan Dokter Umum dan Spesialis</p>
        </div>
      </div>
      <div class="card rumah-sakit">
        <div class="card-image">
          <img src="../../../assets/rumahsakit.png" alt="rumah-sakit" />
        </div>
        <div class="card-title">
          <h4>Rumah Sakit</h4>
        </div>
        <div class="card-description">
          <p>Kunjungan ke Rumah Sakit jadi Lebih Mudah</p>
        </div>
      </div>
      <div class="card tanya-penyakit">
        <div class="card-image">
          <img src="../../../assets/selidiki.png" alt="selidiki-penyakit" />
        </div>
        <div class="card-title">
          <h4>Selidiki Penyakit</h4>
        </div>
        <div class="card-description">
          <p>Lebih Baik Mencegah daripada Mengobati</p>
        </div>
      </div>
    </div>

    <ArticlesCarousel />
  </div>
</template>

<script>
import ArticlesCarousel from './ArticlesCarousel'
export default {
  name: 'LeftMen',
  components: {
    ArticlesCarousel
  }
}
</script>
<style></style>

<style></style>
