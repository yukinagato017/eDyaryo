<template>
  <div class="news-panel">
    <div class="errored" v-if="error">
      <img alt="preloader gif" src="../assets/error.jpg" class="error" />
      <p>Sorry error occured Please try again</p>
    </div>
    
    <div class="feed" v-else>
      <div v-if="loading">
        <img
          alt="preloader gif"
          src="../assets/loading.gif"
          class="preloader"
        />
      </div>
      <div class="card" v-for="(newsfeeds, i) in newsfeed" :key="i">
        <img alt="photo" class="images" :src="newsfeeds.img" />
        <div class="dates">
          <span class="calendar">
            <vue-fontawesome
              icon="calendar"
              size="1"
              color="#AEB6BF"
              font-size="15px"
            ></vue-fontawesome>
            {{ newsfeeds.date }}</span
          >
          <span class="share">
            <vue-fontawesome
              icon="share"
              size="1"
              color="#AEB6BF"
            ></vue-fontawesome>
            Share</span
          >
        </div>
        <div class="title">
          <h2>{{ newsfeeds.title }}</h2>
          <p>{{ newsfeeds.content }}</p>
          <p>
            <vue-fontawesome
              icon="link"
              size="1"
              color="#AEB6BF"
            ></vue-fontawesome>
            {{ newsfeeds.source_name }}
          </p>
        </div>
      </div>
    </div>

    <SidePanel />
  </div>
</template>

<script>
// @ is an alias to /src
import SidePanel from "@/components/SidePanel.vue";
export default {
  name: "Home",
  components: {
    SidePanel
  },
  data() {
    return {
      newsfeed: [],
      loading: true,
      error: true,
      show: true,
      q:''
    };
  },
  mounted() {
    var self = this;
    const axios = require("axios");

    axios({
      method: "GET",
      url: "https://newscafapi.p.rapidapi.com/apirapid/news/world/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "newscafapi.p.rapidapi.com",
        "x-rapidapi-key": "185811fe6fmshf3af0d470a902c9p197565jsnf438a6381cc9",
        useQueryString: true
      },
      params: {
        q: "news"
      }
    })
      .then(response => {
        self.newsfeed = response.data;
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
  }
};
</script>
<style lang="scss" scoped>
$animationDuration: 0.5s; // specify animation duration. Default value: 1s 
@import "vue2-animate/src/sass/vue2-animate.scss";
.news-panel {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50px;
  display: flex;
  flex-flow: wrap;

  .feed {
    position: absolute;
    width: 91%;
    margin: 2% 6%;
    display: flex;
    flex-flow: wrap;
    .card {
      height: auto;
      max-width: 340px;
      background: #f2f3f4;
      margin: auto;

      .images {
        width: 100%;
        height: 248px;
        transition: 1s;
        &:hover {
          opacity: 0.5;
          transition: 1s;
          cursor: pointer;
        }
      }
      .title {
        padding: 0px 25px;
        text-align: left;
        font-size: 0.7rem;
      }
    }
  }
  span {
    position: relative;
    font-size: 11px;
    color: #bdc3c7;
    margin: 15px 10px;
  }
  .dates {
    display: flex;
    margin: 0px 18px;
  }
  .preloader {
    position: absolute;
    z-index: 1;
    margin: 10% 40%;
    overflow: hidden;
  }
  .errored {
    text-align: center;
    .error {
      width: 35%;
      height: 80%;
      position: relative;
    }
  }
}
</style>
