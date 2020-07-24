<template>
  <div class="menu">
    <button class="toggle" @click="sideBar = !sideBar" v-if="sideBar === false">
      <vue-fontawesome
        icon="angle-left"
        size="1"
        color="black"
      ></vue-fontawesome>
    </button>
    <div class="side-bar" v-if="sideBar" id="slide ">
      <div class="icons" @click="sideBar = !sideBar">
        <vue-fontawesome
          icon="angle-left"
          size="1"
          color="black"
        ></vue-fontawesome>
      </div>

      <router-link to="/"
        ><div class="icons">
          <vue-fontawesome
            icon="globe"
            size="1"
            color="#2ECC71"
          ></vue-fontawesome>
          <div class="globe">
            <vue-fontawesome
              icon="globe"
              size="1"
              color="#FFF"
            ></vue-fontawesome>
            WORLD
          </div>
        </div></router-link
      >

      <router-link to="/trending">
        <div class="icons">
          <vue-fontawesome
            icon="hand-o-up"
            size="1"
            color="#2980B9"
          ></vue-fontawesome>
          <div class="hand-o-up">
            <vue-fontawesome
              icon="hand-o-up"
              size="1"
              color="#FFF"
            ></vue-fontawesome>
            TOP STORIES
          </div>
        </div>
      </router-link>

      <router-link to="/health"
        ><div class="icons">
          <vue-fontawesome
            icon="medkit"
            size="1"
            color="#F5B041"
            padding="11px"
          ></vue-fontawesome>
          <div class="medkit">
            <vue-fontawesome
              icon="medkit"
              size="1"
              color="#FFF"
            ></vue-fontawesome>
            HEALTH
          </div>
        </div></router-link
      >
      <router-link to="/entertainment"
        ><div class="icons">
          <vue-fontawesome
            icon="music"
            size="1"
            color="#34495E"
            padding="11px"
          ></vue-fontawesome>
          <div class="music">
            <vue-fontawesome
              icon="music"
              size="1"
              color="#FFF"
            ></vue-fontawesome>
            ENTERTAINMENT
          </div>
        </div></router-link
      >

      <router-link to="/technology"
        ><div class="icons">
          <vue-fontawesome
            icon="desktop"
            size="1"
            color="#A569BD"
            padding="11px"
          ></vue-fontawesome>
          <div class="desktop">
            <vue-fontawesome
              icon="desktop"
              size="1"
              color="#FFF"
            ></vue-fontawesome>
            TECHNOLOGIES
          </div>
        </div></router-link
      >

      <router-link to="/business">
        <div class="icons">
          <vue-fontawesome
            icon="briefcase"
            size="1"
            color="#5DADE2"
            padding="11px"
          ></vue-fontawesome>
          <div class="briefcase">
            <vue-fontawesome
              icon="briefcase"
              size="1"
              color="#FFF"
            ></vue-fontawesome>
            BUSINESS
          </div>
        </div></router-link
      >
      <router-link to="/sports">
        <div class="icons">
          <vue-fontawesome
            icon="futbol-o"
            size="1"
            color="#E74C3C"
            padding="11px"
          ></vue-fontawesome>
          <div class="futbol-o">
            <vue-fontawesome
              icon="futbol-o"
              size="1"
              color="#FFF"
            ></vue-fontawesome>
            SPORTS
          </div>
        </div></router-link
      >
      <router-link to="/autos">
        <div class="icons">
          <vue-fontawesome
            icon="car"
            size="1"
            color="#797d7f"
            padding="11px"
          ></vue-fontawesome>
          <div class="car">
            <vue-fontawesome icon="car" size="1" color="#FFF"></vue-fontawesome>
            AUTOS
          </div>
        </div></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sideBar: false
    };
  }
};
</script>
<style lang="scss" scoped>
$animationDuration: 0.5s; // specify animation duration. Default value: 1s
@import "vue2-animate/src/sass/vue2-animate.scss";
$width: 100%;
a {
  text-decoration: none;
}
@mixin btn {
  border: none;
  outline: none;
  outline-style: none;
  cursor: pointer;
}
@mixin hover {
  position: absolute;
  width: 155px;
  font-size: 12px;
  padding: 0px;
  color: #fff;
  font-weight: 700;
  visibility: hidden;
  transition: 0.2s;
  opacity: 0;
}
.side-bar {
  position: fixed;
  background: #f4f6fe;
  width: 45px;
  height: 100%;
  display: block;
  top: 52px;
  border-right: 1px solid #bdc3c7;
  animation-name: slide;
  animation-duration: 1s;
  animation-fill-mode: reverse;

  @keyframes slide {
    from {
      left: -45px;
    }
    to {
      left: 0px;
    }
  }

  .icons {
    border: 1px solid #bdc3c7;
    cursor: pointer;
    display: flex;
    transition: 0.2s;

    &:hover {
      background-color: #aeb6bf;
      transition: 0.2s;
    }

    &:hover .globe {
      opacity: 1;
      visibility: visible;
    }
    &:hover .hand-o-up {
      opacity: 1;
      visibility: visible;
    }
    &:hover .medkit {
      opacity: 1;
      visibility: visible;
    }
    &:hover .music {
      opacity: 1;
      visibility: visible;
    }
    &:hover .desktop {
      opacity: 1;
      visibility: visible;
    }
    &:hover .briefcase {
      opacity: 1;
      visibility: visible;
    }
    &:hover .futbol-o {
      opacity: 1;
      visibility: visible;
    }
    &:hover .car {
      opacity: 1;
      visibility: visible;
    }
  }
  .fa {
    padding: 11px;
  }
  .globe {
    background: #2ecc71;
    @include hover;
  }
  .hand-o-up {
    background: #2980b9;
    @include hover;
  }
  .medkit {
    @include hover;
    background-color: #f5b041;
  }
  .music {
    @include hover;
    background-color: #34495e;
  }
  .desktop {
    @include hover;
    background-color: #a569bd;
  }
  .briefcase {
    @include hover;
    background-color: #5dade2;
  }
  .futbol-o {
    @include hover;
    background-color: #e74c3c;
  }
  .car {
    @include hover;
    background-color: #797d7f;
  }
}
.toggle {
  outline: none;
  outline-style: none;
  padding: 14px 7px;
  border-left: none;
  top: 58px;
  position: fixed;
  border: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #aeb6bf;
    color: #fff;
    transition: 0.2s;
  }
}
</style>
