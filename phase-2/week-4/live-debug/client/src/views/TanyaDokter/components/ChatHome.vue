<template>
    <div class="chat-home">
        <h6 class="mt-5" style="font-weigth:bold; color:#53565a;">Chat dengan dokter</h6>
        <p style="font-size:12px; color:gray;">Tanya jawab langsung dengan dokter umum dan spesialis terpercaya </p>
        <div id="chatCarousel" class="carousel slide mt-4" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../../assets/chat1.png" class="w-10" alt="iklan">
                </div>
                <div class="carousel-item">
                    <img src="../../../assets/chat2.png" class="w-10" alt="iklan">
                </div>
            </div>
            <a class="carousel-control-prev" href="#chatCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#chatCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ChatHome'
}
</script>

<style scoped>
.chat-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40%;
}
#chatCarousel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
}
@media (min-width: 850px) and (max-width: 1193px) {
    .chat-home {
        height: 20%;
    }
}
</style>
