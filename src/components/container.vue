<template>
  <main>
    <div class="row justify-content-md-center">
      <div>
        <b-img src="https://lorempixel.com/666/300/" fluid alt="Responsive image" />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div>
        <b-card-group>
          <b-card 
            v-for="({title, src, health, attack, defence}, index) of characters"
            :key="index"
            :title="title"
            :img-src="src"
            img-alt="Img"
            img-top>
            <p class="card-text">
              {{ text }}<br />
              HP : {{health}}<br />
              ATK : {{attack}}<br />
              DEF : {{defence}}
            </p>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </main>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('ally')

export default {
  name: 'container',
  data() {
    return {
      characters: []
    }
  },
  computed: {
    ...mapGetters(['allies'])
  },
  mounted(){
    this.addCharacter()
    this.addCharacter()
    this.addCharacter()
    this.setAlly();
  },
  methods: {
    ...mapActions(['addCharacter']),
    setAlly(){
      for (const {name, img, health, attack, defence} of this.allies) {
        this.characters.push({
          title: name,
          src: img,
          health,
          attack,
          defence
        })
      }
    }
  }
}
</script>
