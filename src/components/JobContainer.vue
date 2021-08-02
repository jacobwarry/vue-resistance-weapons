<template>
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
            <v-img src="@/assets/qi/071221_hr1.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content class="subtitle-1">{{ currentQuest.name }}</v-list-item-content>
        </v-list-item>
        <v-chip-group>
          <v-chip light label outlined v-for="item in currentQuest.items" :key="item.id" >
            <v-img :src="item.icon" max-width="20"></v-img> <span class="ml-2">x {{item.quantity}}</span>
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
    <v-divider></v-divider>
    <v-card-text>
      <v-list class="py-0">
        <v-list-item
            class="px-0"
            :class="currentStage >= index ? 'enabled' : 'disabled'"
            v-for="(weapon, index) in job.weapons"
            :key="weapon.id"
        >
          <v-list-item-avatar>
            <v-img :src="weapon.icon"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <span class="caption">{{ weapon.name }}</span>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn small icon @click="setStage(index, weapon.questId)">
              <v-icon :color="currentStage >= index ? 'green' : 'grey'">mdi-check</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'JobContainer',
  props: {
    job: {
      type: Object
    }
  },
  computed: {
    currentQuest() {
      return this.$store.getters.getQuestById(this.currentQuestId);
    }
  },
  data: () => ({
    currentStage: 0,
    currentQuestId: 69381
  }),
  methods: {
    setStage(stage, questId) {
      this.currentStage = stage;
      this.currentQuestId = questId;
    }
  }
}
</script>

<style lang="scss" scoped>
.enabled {
  
}

.disabled {
  opacity: 0.5 !important;
}
</style>