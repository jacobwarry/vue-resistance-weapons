<template>
  <v-app>
    <v-main>
      <v-container>
        <job-select-container></job-select-container>
        <job-category-container
            v-for="jobCategory in jobCategories"
            :key="jobCategory.id"
            :job-category="jobCategory"
        >          
        </job-category-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import JobCategoryContainer from "@/components/JobCategoryContainer";
import JobSelectContainer from "@/components/JobSelectContainer";
export default {
  name: "App",
  components: { JobSelectContainer, JobCategoryContainer },
  beforeCreate() {
    if (localStorage.rwConfig) {
      this.$store.dispatch('setConfig', JSON.parse(localStorage.rwConfig));
    } else {
      localStorage.rwConfig = JSON.stringify(this.$store.state.rwConfig);
    }
  },
  computed: {
    jobCategories() {
      return this.$store.state.jobCategories;
    }
  },
  data: () => ({ }),
};
</script>
