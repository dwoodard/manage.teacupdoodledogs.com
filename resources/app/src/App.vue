<template>
  <div class="">
    <div
      class="px-4 flex justify-between items-center shadow-md"
      style="height: 72px"
    >
      <div class="flex items-center">
        <Logo class="w-14" />
        <div id="nav">
          <router-link to="/about">
            About
          </router-link>
        </div>
      </div>
      <NavMenu />
    </div>

    <div class="p-4">
      <router-view />
    </div>

    <div id="modals" />
  </div>
</template>

<script>
import Logo from './components/Logo';
import NavMenu from './components/NavMenu';

export default {
  components: { NavMenu, Logo },
};
</script>
<style>
html,
body {
    margin: 0;
}
#app {
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #ff2020;
}
</style>
