<template>
  <v-app>
    <v-main>
      <v-container>
        <job-select-container></job-select-container>
        <job-completion-container></job-completion-container>
        <v-row>
          <job-container v-for="job in jobs" :key="job.id" :job="job"></job-container>      
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import JobSelectContainer from "@/components/JobSelectContainer";
import JobCompletionContainer from "@/components/JobCompletionContainer";
import JobContainer from "@/components/JobContainer";

export default {
  name: "App",
  components: { JobContainer, JobCompletionContainer, JobSelectContainer },
  beforeCreate() {
    if (localStorage.rwConfig) {
      this.$store.dispatch('setConfig', JSON.parse(localStorage.rwConfig));
    } else {
      localStorage.rwConfig = JSON.stringify(this.$store.state.rwConfig);
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;      
    },
    jobCategories() {
      return this.$store.state.jobCategories;
    }
  }
};
</script>
