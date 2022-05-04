<template>
  <div>
    <b-form-input v-model="search" placeholder="Search Here"></b-form-input>
  </div>
</template>

<script>
export default {
  name: "Search_1",
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search() {
      const route = {
        name: "post",
      };
      if (this.search !== "") {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

<style></style>
