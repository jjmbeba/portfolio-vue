<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  }
}
</script>

<template>
  <li class="link-card w-full sm:w-auto">
    <a :href="href" class="block">
      <h2 class="text-lg sm:text-xl">
        {{ title }}
        <span>&rarr;</span>
      </h2>
      <p class="text-sm sm:text-base">
        {{ body }}
      </p>
    </a>
  </li>
</template>

<style scoped>
.link-card {
  list-style: none;
  display: flex;
  padding: 1px;
  background-color: #23262d;
  background-image: none;
  background-size: 400%;
  border-radius: 7px;
  background-position: 100%;
  transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  max-width: 100%;
}

.link-card > a {
  width: 100%;
  text-decoration: none;
  line-height: 1.4;
  padding: calc(1.5rem - 1px);
  border-radius: 8px;
  color: white;
  background-color: #23262d;
  opacity: 0.8;
  display: block;
  width: 100%;
}

h2 {
  margin: 0;
  font-size: 1.25rem;
  transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

p {
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.link-card:is(:hover, :focus-within) {
  background-position: 0;
  background-image: var(--accent-gradient);
}

.link-card:is(:hover, :focus-within) h2 {
  color: rgb(var(--accent-light));
}

@media (min-width: 640px) {
  .link-card {
    max-width: none;
  }
}
</style>

