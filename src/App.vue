<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <router-link to="/">
          <img alt="logo" src="./assets/logo.png" class="elogo"
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
    url="https://news.vuejs.org/issues/180"
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
      logo: "https://scontent.xx.fbcdn.net/v/t1.0-9/93714048_1991092197689263_3256416913605001216_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeFr3hON8XVSTN5sjqs2CCcWdgGiC8spCTZ2AaILyykJNjZOdyQKYJlane9MN7iFv112_wVSKgn-gv-Vz3lF0Kp9&_nc_ohc=QvwENdJMraYAX9qQjzq&_nc_ht=scontent.xx&oh=f2cfe3638d56bbac6009590a53bb7559&oe=5F3F2F33"
    };
  },
  metaInfo() {
    return {
      meta: [
        // Twitter Card
        { name: "twitter:card", content: "eDyaryo" },
        { name: "twitter:title", content: "Vue Social Cards Example" },
        {
          name: "twitter:description",
          content:
            "Your news portal online. Visiti Edrayo website for more news alert coming to you.."
        },
        // image must be an absolute path
        { name: "twitter:image", content: this.logo },

        // Facebook OpenGraph
        { property: "og:title", content: "eDyaryo- News Porta" },
        { property: "og:site_name", content: "eDyaryo" },
        { property: "og:type", content: "https://edyaryo.netlify.app" },
        { property: "og:image", content: this.logo },
        {
          property: "og:description",
          content:
            "Your news portal online. Visiti eDrayo website for more news alert coming to you."
        }
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
