<template>
  <v-col cols="12" sm="6" lg="4" xl="3" v-show="isSelected">
    <v-card>
      <v-card-title>
        <v-img max-width="40" :src="job.icon"></v-img>
        <span class="text-h6 font-weight-light px-2">{{ job.name }}</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card flat>
        <v-card-text>
          <v-list-item class="px-0">
            <v-list-item-avatar>
              <v-img v-if="currentQuest" src="@/assets/qi/071221_hr1.png"></v-img>
              <v-img v-else src="@/assets/qi/071025_hr1.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content v-if="currentQuest" class="subtitle-1">{{ currentQuest.name }}</v-list-item-content>
            <v-list-item-content v-else class="subtitle-1">All done!</v-list-item-content>
          </v-list-item>
          <v-chip-group v-if="currentQuest">
            <v-chip label outlined v-for="item in currentQuest.items" :key="item.id" >
              <v-img :src="item.icon" max-width="20"></v-img> <span class="ml-2">x {{item.quantity}}</span>
            </v-chip>
          </v-chip-group>
          <v-chip-group v-else>
            <v-chip label outlined>
              <span>&nbsp;</span>
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
      <v-progress-linear :value="(currentStage / 6) * 100" color="green" height="2">
      </v-progress-linear>
      <v-divider></v-divider>
      <v-card-text class="px-0 weapon-card">
        <v-list class="py-0">
          <v-list-item
              class="px-0 weapon-item"
              :class="currentStage > index ? 'enabled' : 'disabled'"
              v-for="(weapon, index) in job.weapons"
              :key="index"
              @click="setStage(index + 1)"
          >
            <v-list-item-avatar>
              <v-img :src="weapon.icon"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <span class="caption">{{ weapon.name }}</span>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon :color="currentStage > index ? 'green' : 'grey'">mdi-check</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>   
  </v-col>

</template>

<script>
export default {
  name: 'JobContainer',
  props: {
    job: {
      type: Object
    }
  },
  mounted() {
    const jobProgressIndex = this.$store.state.rwConfig.progress.findIndex((obj) => obj.id === this.job.id);
    this.currentStage = jobProgressIndex > -1 ? this.$store.state.rwConfig.progress[jobProgressIndex].stage : 0;
  },
  computed: {
    currentQuest() {
      return this.$store.getters.getQuestByStage(this.currentStage);
    },
    isSelected() {
      return this.$store.state.rwConfig.selectedJobs.includes(this.job.id);
    }
  },
  data: () => ({
    currentStage: 0
  }),
  methods: {
    setStage(stage) {
      this.currentStage = stage === this.currentStage ? stage -1 : stage;
      this.$store.dispatch('setJobProgress', { id: this.job.id, stage: this.currentStage });
    }
  }
}
</script>

<style lang="scss">
.weapon-item {
  &.enabled {
    opacity: 1
  }
  
  &.disabled {
    opacity: 0.5 !important;
    
    &:hover {
      opacity: 1 !important;
    }
  }
}
.weapon-card {
  .v-list-item__avatar:first-child,
  .v-list-item__action:last-of-type:not(:only-child),
  .v-list-item__avatar:last-of-type:not(:only-child),
  .v-list-item__icon:last-of-type:not(:only-child){
    margin: 0 16px;
  }
}
</style>