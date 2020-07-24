<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <router-link to="/">
          <img alt="logo" src="./assets/logo.png" class="elogo">
          <img alt="logo" src="./assets/edyaryo.png" class="elogo"
        /></router-link>
      </div>
      <div class="links">
        <button class="dropdown" @click="dropdown = !dropdown">
          <vue-fontawesome
            icon="share-alt "
            size="1"
            color="lightgray"
          ></vue-fontawesome>
        </button>
        <router-link to="/">
          <vue-fontawesome
            icon="search"
            size="1"
            color="lightgray"
          ></vue-fontawesome
        ></router-link>
        <button class="dropdown">
          <vue-fontawesome
            icon="refresh"
            size="1"
            color="lightgray"
          ></vue-fontawesome>
        </button>
        <div class="share-links" v-show="dropdown">
          <div class="share-icons">
            <div class="link">
              <ShareNetwork
                network="facebook"
    url="https://edyaryo.netlify.app"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite"
      >
                <img
                  alt="logo"
                  src="./assets/facebook.png"
                  class="share-icon"
                />
                FACEBOOK
              </ShareNetwork>
            </div>
            <div class="link">
              <ShareNetwork
                network="twitter"
                image="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                url="https://edyaryo.netlify.app"
                title="eDyaro - Your online news Portal, Visit for more information."
              >
                <img alt="logo" src="./assets/twitter.png" class="share-icon" />
                TWITTER
              </ShareNetwork>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdown: false,
      logo: "https://edyaryo.netlify.app/img/error.d2b5e94c.jpg"
    };
  },
  metaInfo() {
    return {
     title: "Epiloge - Build your network in your field of interest",
            metaTags: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                { property: 'og:site_name', content: 'Epiloge'},
                {property: 'og:type', content: 'https://edyaryo.netlify.app'},    
                 {property: 'og:image', content: this.logo},    
                {name: 'robots', content: 'index,follow'} 
            ]
    };
  }
};
</script>
<style lang="scss">
@mixin container {
  width: 100%;
}
@mixin row {
  width: 50%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  &.router-link-exact-active {
    color: #42b983;
  }
}
body {
  margin: 0;
}

#nav {
  display: flex;
  background: #2e4053;
  color: #fff;
  padding: 9px;
  position: fixed;
  z-index: 1;
  @include container;

  .logo,
  .links {
    width: 46%;
  }
  .logo {
    text-align: left;

    img.elogo {
      width: 101px;
      top: 3px;
      height: 31px;
      position: relative;
    }
  }
  .links {
    text-align: right;
    padding: 8px;
  }
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    padding: 0% 3%;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .dropdown {
    border: none;
    outline: none;
    outline-style: none;
    cursor: pointer;
    background: none;
  }
}
.share-links {
  background: #d7dbdd;
  height: auto;
  position: absolute;
  width: 15%;
  margin: 0% 22%;
  .share-icons {
    text-align: left;
    color: black;
    width: 100%;

    .link {
      padding: 12px;
      text-align: center;
      cursor: pointer;

      &:hover {
        background: #a6acaf;
      }

      .share-icon {
        width: 20px;
        position: relative;
        height: 20px;
        top: 5px;
      }
    }
  }
}
</style>
