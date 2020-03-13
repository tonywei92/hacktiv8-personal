<template>
  <div
    id="carouselExampleControls"
    class="carousel slide mt-4"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://d1bpj0tv6vfxyp.cloudfront.net/slider/20200214092035.523409965339.png"
          class="d-block w-100"
          alt="iklan"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://d1bpj0tv6vfxyp.cloudfront.net/slider/20200217105507.743-446459417.jpg"
          class="d-block w-100"
          alt="iklan"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://d1bpj0tv6vfxyp.cloudfront.net/slider/20200207065747.006-1913811632.jpg"
          class="d-block w-100"
          alt="iklan"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ArticlesCarousel'
}
</script>

<style></style>
