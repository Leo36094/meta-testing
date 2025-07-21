<script setup>
import { onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
onMounted(() => {
  // add image & desc meta
  const metas = {
    description: "JS 產生的 meta description",
    image:
      "https://web.df.garena.com/03_news/news_banner/TWannouncement/20250314_MobileAnnouncement/1920TW.jpg",
    "og:image": "JS 產生的 meta image",
    "og:description": "JS 產生的 meta description",
    "og:title": "JS 產生的 meta title",
    "og:url": window.location.href,
  };

  document.querySelectorAll("meta").forEach((meta) => {
    // append meta
    if (metas[meta.name]) {
      meta.content = metas[meta.name];
    }
  });
  // metas.forEach(({ name, content }) => {
  //   const metaEl = document.createElement("meta");
  //   metaEl.name = name;
  //   metaEl.content = content;
  //   document.head.appendChild(metaEl);
  // });
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
