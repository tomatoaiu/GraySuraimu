<template>
  <main>
    <div class="row justify-content-md-center pb-3">
      <b-card-group>
        <b-card 
          v-for="({name, img, health, attack, defence, active}, index) of enemies"
          :key="index"
          :title="name"
          :img-src="img"
          :img-alt="title"
          @click="selectedEnemy(index)"
          @mouseover="overedEnemy(index)"
          @mouseleave="outedEnemy(index)"
          :class="{'active-enemy': active}"
          img-bottom>
          <p class="card-text">
            {{ text }}<br />
            HP : {{health}}<br />
            ATK : {{attack}}<br />
            DEF : {{defence}}
          </p>
        </b-card>
      </b-card-group>
    </div>
    <div class="row justify-content-md-center">
      <b-card-group>
        <b-card 
          v-for="({name, img, health, attack, defence, active}, index) of allies"
          :key="index"
          :title="name"
          :img-src="img"
          @click="selectedAlly(index)"
          :class="{'active-ally': active}"
          :img-alt="title"
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
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'container',
  computed: {
    ...mapGetters({
      activeIndex: 'ally/activeIndex',
      allies: 'ally/allies',
      enemies: 'enemy/enemies'
    })
  },
  mounted(){
    this.addAlly()
    this.addAlly()
    this.addAlly()

    this.addEnemy()
    this.addEnemy()
    this.addEnemy()
  },
  methods: {
    ...mapActions({
      addAlly: 'ally/addCharacter',
      addEnemy: 'enemy/addCharacter',
      setActiveToAlly: 'ally/setActive',
      setActiveToEnemy: 'enemy/setActive',
      setHealth: 'enemy/setHealth'
    }),
    overedEnemy(index) {
      this.setActiveToEnemy({index, active: true})
    },
    outedEnemy(index) {
      this.setActiveToEnemy({index, active: false})
    },
    selectedAlly(index) {
      for (let i = 0; i < this.allies.length; i++) {
        this.setActiveToAlly({index: i, active: false})
      }
      this.setActiveToAlly({index, active: true})
    },
    selectedEnemy(index) {
      this.setActiveToEnemy({index, active: false})
      this.setActiveToAlly({index: this.activeIndex, active: false})
    }
  }
}
</script>

<style scoped>
.active-enemy {
  box-shadow: 0 0 1em 0.5em rgba(255,100,150,0.7);
  z-index: 100;
}

.active-ally {
  box-shadow: 0 0 1em 0.5em rgba(150,200,255,0.7);
  z-index: 100;
}
</style>
