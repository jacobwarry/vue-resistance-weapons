<template>
  <v-row>
    <v-col cols="12" v-show="this.$store.state.rwConfig.selectedJobs.length">
      <v-progress-linear :value="totalProgress" height="20" rounded>
        <template v-slot:default="{ value }">
          <span class="white--text font-weight-medium caption">{{totalProgressText}} {{ Math.ceil(value) }}%</span>
        </template>          
      </v-progress-linear>
    </v-col>
    <v-col cols="12" v-show="totalItems.length">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Total items required for Resistance Weapons based on current steps</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider dark></v-divider>
            <v-list-item v-for="item in totalItems" :key="item.id" class="px-0">
              <v-list-item-avatar>
                <v-img :src="item.icon"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>{{item.quantity}} x {{item.name}}</v-list-item-content>
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "JobCompletionContainer",
  computed: {
    totalProgressText() {
      return `Total Resistance Weapon Completion By Selected Job${(this.$store.state.rwConfig.selectedJobs.length > 1 ? 's' : '')}:`;
    },
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
    },
    totalItems() {
      const rwConfig = this.$store.state.rwConfig;
      const selectedJobs = rwConfig.selectedJobs;
      if (!selectedJobs.length) {
        return [];
      }
      
      const visibleJobs = rwConfig.progress.filter((obj) => selectedJobs.includes(obj.id) && obj.stage <= 5);
      let itemsArray = []
      
      visibleJobs.forEach((job) => {
        let stageIndex = job.stage;
        while(stageIndex < 6) {
          const jobItemsProgress = this.$store.state.quests[stageIndex].items;
          jobItemsProgress.forEach((item) => {
            const itemIndex = itemsArray.findIndex((obj) => obj.id === item.id);
            if (itemIndex > -1) {
              itemsArray[itemIndex].quantity += item.quantity;
            } else {
              itemsArray.push({...item});
            }
          })          
          stageIndex++
        }
      })
      
      itemsArray = itemsArray.sort((a, b) => { return a.id - b.id });
      
      return itemsArray;
    }
  },  
}
</script>