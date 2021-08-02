<template>
  <v-row>
    <v-col>
      <v-card>
        <v-progress-linear :value="totalProgress" height="20">
          <template v-slot:default="{ value }">
            <span class="caption white--text font-weight-medium">{{ Math.ceil(value) }}%</span>
          </template>          
        </v-progress-linear>
      </v-card> 
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "JobCompletionContainer",
  computed: {
    totalProgress() {
      const rwConfig = this.$store.state.rwConfig;
      const selectedJobs = rwConfig.selectedJobs;
      if (!selectedJobs.length) {
        return 0;
      }
      
      let totalProgress = 0;
      selectedJobs.forEach((jobId) => {
        const index = rwConfig.progress.findIndex((obj) => obj.id === jobId);
        if (index < 0) {
          totalProgress += 0;
        } else {
          totalProgress += rwConfig.progress[index].stage;
        }
      })
      return (totalProgress / (selectedJobs.length * 6)) * 100;
    }
  },  
}
</script>

<style scoped>

</style>