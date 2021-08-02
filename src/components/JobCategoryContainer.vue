<template>
  <v-row v-show="selectedJobs.length">
<!--    <v-col cols="12">
      <div class="text-h5 font-weight-light mb-3">{{ jobCategory.name }}</div>
    </v-col>-->
    <v-col cols="12" sm="6" lg="4" v-for="job in selectedJobs" :key="job.id">
      <job-container :job="job"></job-container>
    </v-col>
  </v-row>
</template>

<script>
import JobContainer from '../components/JobContainer'

export default {
  name: "JobCategoryContainer",
  components: { JobContainer },
  computed: {
    selectedJobs() {
      return this.jobCategory.jobs.filter((job) => this.$store.state.rwConfig.selectedJobs.includes(job.id));
    }
  },
  props: {
    jobCategory: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>