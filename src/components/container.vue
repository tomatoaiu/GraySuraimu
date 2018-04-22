<template>
  <main>
    <div class="row justify-content-md-center">
      <div>
        <b-img src="https://lorempixel.com/666/300/" fluid alt="Responsive image" />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div>
        <b-card-group deck>
          <b-card 
            v-for="({title, src, text}, index) of characters"
            :key="index"
            :title="title"
            :img-src="src"
            img-alt="Img"
            img-top>
            <p class="card-text">
                {{ text }}
            </p>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'container',
  data() {
    return {
      characters: [
        {
          title : 'usu',
          src: 'https://lorempixel.com/200/200/',
          text: "text text text"
        },
        {
          title : 'sharu',
          src: 'https://lorempixel.com/200/200/',
          text: "text text text"
        },
        {
          title : 'hachi',
          src: 'https://lorempixel.com/200/200/',
          text: "text text text"
        }
      ]
    }
  }
}
</script>
