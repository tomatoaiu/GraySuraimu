<template>
  <main>
    <div class="row justify-content-md-center pb-3">
      <b-card-group>
        <b-card 
          v-for="({title, src, health, attack, defence, active}, index) of enemyList"
          :key="index"
          :title="title"
          :img-src="src"
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
          v-for="({title, src, health, attack, defence, active}, index) of allyList"
          :key="index"
          :title="title"
          :img-src="src"
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
  data() {
    return {
      allyList: [],
      enemyList: []
    }
  },
  computed: {
    ...mapGetters({
      allies: 'ally/allies',
      enemies: 'enemy/enemies'
    })
  },
  mounted(){
    this.addAlly()
    this.addAlly()
    this.addAlly()
    this.setAlly()

    this.addEnemy()
    this.addEnemy()
    this.addEnemy()
    this.setEnemy()
  },
  methods: {
    ...mapActions({
      addAlly: 'ally/addCharacter',
      addEnemy: 'enemy/addCharacter',
    }),
    setAlly() {
      for (const {name, img, health, attack, defence} of this.allies) {
        this.allyList.push({
          title: name,
          src: img,
          health,
          attack,
          defence,
          active: false
        })
      }
    },
    setEnemy() {
      for (const {name, img, health, attack, defence} of this.enemies) {
        this.enemyList.push({
          title: name,
          src: img,
          health,
          attack,
          defence,
          active: false
        })
      }
    },
    overedEnemy(index) {
      this.enemyList[index].active = true
    },
    outedEnemy(index) {
      this.enemyList[index].active = false
    },
    selectedAlly(index) {
      for (const ally of this.allyList) {
        ally.active = false
      }
      this.allyList[index].active = true
    },
    selectedEnemy(index) {
      const ally = (this.allyList.filter((ally) => ally.active)).pop()
      ally.active = false
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
