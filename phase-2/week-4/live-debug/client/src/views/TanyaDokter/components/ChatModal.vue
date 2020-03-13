<template>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Patient Data</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="send()">
                        <input v-model="name" class="mx-2" type="text" placeholder="your name" required>
                        <input v-model="phone" class="mx-2" type="text" placeholder="+62 phone number" required>
                        <input type="submit" class="btn btn-primary mt-2" style="float:right;" value="Save">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ChatModal',
  data () {
    return {
      name: '',
      phone: ''
    }
  },
  methods: {
    send () {
      const payload = {
        name: this.name,
        phone: this.phone
      }
      this.$store.commit('UPDATE_USER_DATA', payload)
      this.name = ''
      this.phone = ''
      $('#exampleModalCenter').modal('hide')
    }
  }
}
</script>

<style>

</style>
