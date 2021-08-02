<template>
  <v-app>
    <v-app-bar app>
      <v-container>
        <v-row>
          <v-img
              class="hidden-sm-and-down ml-6 mr-2"
              src="@/assets/qi/063909_hr1.png"
              max-height="32"
              max-width="32"
              contain></v-img>
          <v-app-bar-title class="ml-1">Bozjan Resistance Weapons</v-app-bar-title>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-img src="@/assets/qi/101069_hr1.png" max-height="250"></v-img>
        <job-select-container></job-select-container>
        <job-completion-container></job-completion-container>
        <v-row v-show="this.$store.state.rwConfig.selectedJobs.length">
          <v-col>
            <v-btn-toggle v-model="toggleSort">
              <v-btn small @click="setSortOrder('classSort', 0)"><span class="hidden-sm-and-down">Sort By</span>Job Category</v-btn>
              <v-btn small @click="setSortOrder('bookSort', 1)"><span class="hidden-sm-and-down">Sort By</span>Achievement Order</v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row v-show="!this.$store.state.rwConfig.selectedJobs.length">
          <v-col>
            <div class="text-center text-sm-caption">Select a Job to proceed</div>
          </v-col>
        </v-row>
        <v-row>
          <job-container v-for="job in jobs" :key="job.id" :job="job"></job-container>      
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="mt-4">
      <v-col class="text-center">
        <div class="caption">FINAL FANTASY XIV © 2010 - {{ new Date().getFullYear() }} | SQUARE ENIX CO., LTD. All Rights Reserved.</div>
        <div class="caption">Created by <a href="https://eu.finalfantasyxiv.com/lodestone/character/1836393/" class="text-decoration-none" target="_blank">Djessica Taimi</a> of Phoenix</div>
      </v-col>
    </v-footer>
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
      let jobs = this.$store.state.jobs;
      jobs = jobs.sort((a, b) => { return a[this.sortOrder] - b[this.sortOrder]; });
      return jobs;
    },
    jobCategories() {
      return this.$store.state.jobCategories;
    }
  },
  data() {
    return {
      sortOrder: this.$store.state.rwConfig.sortOrder.field,
      toggleSort: this.$store.state.rwConfig.sortOrder.btnIndex
    }
  },
  methods: {
    setSortOrder(field, btnIndex) {
      this.sortOrder = field;
      this.$store.dispatch('setSortOrder', {field, btnIndex});
    }
  }
};
</script>
