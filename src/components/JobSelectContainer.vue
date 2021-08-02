<template>
  <v-expansion-panels class="my-5" v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-header>Select the Jobs to track your Resistance Weapon progress</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-divider dark></v-divider>
          <v-radio-group
              row
              dense
              hide-details
              v-for="(jobCategory, index) in jobs"
              :key="jobCategory.id"
              class="py-0 my-0">
            <v-checkbox
                dense
                hide-details
                color="green"
                v-model="selectedCategories[index]"
                @change="onCategoryCheckboxChange($event, jobCategory.id)">
              <template v-slot:label>
                <strong>{{jobCategory.name}}</strong>
              </template>
            </v-checkbox>
            <v-checkbox
                dense
                hide-details
                v-model="selected"
                v-for="job in jobCategory.jobs"
                :key="job.id"
                :label="job.name"
                :value="job.id"
                @change="onCheckboxChange($event, index, jobCategory.id)"
            ></v-checkbox>
          </v-radio-group>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "JobSelectContainer",
  computed: {
    jobs() {
      return this.$store.state.jobCategories;
    }
  },
  beforeMount() {
    this.selected = this.$store.state.rwConfig.selectedJobs;
    const categories = this.$store.state.jobCategories.map((category, index) => {
      return {
        index,
        id: category.id
      }
    });
    categories.forEach((category) => {
      this.selectedCategories[category.index] = this.allInCategorySelected(category.id);
    })
    this.panel = this.$store.state.rwConfig.selectedJobs.length
  },
  data() {
    return {
      selectedCategories: [],
      selected: [],
      panel: 0
    }
  },
  methods: {
    allInCategorySelected(id) {
      const jobIds = this.$store.getters.getCategoryById(id).jobs.map((job) => job.id);
      const allSelected = this.selected.filter((id) => jobIds.includes(id));
      return jobIds.length === allSelected.length;
    },
    onCheckboxChange(value, index, categoryId) {
      this.selectedCategories[index] = this.allInCategorySelected(categoryId)
      this.$store.dispatch('setSelectedJobs', value);
    },
    onCategoryCheckboxChange(selected, id) {
      const jobIds = this.$store.getters.getCategoryById(id).jobs.map((job) => job.id);
      if (selected) {
        const notSelectedIds = jobIds.filter((id) => !this.selected.includes(id));
        this.selected = this.selected.concat(notSelectedIds)
      } else {
        const selectedIds = jobIds.filter((id) => this.selected.includes(id));
        this.selected = this.selected.filter((id) => !selectedIds.includes(id));
      }
      this.$store.dispatch('setSelectedJobs', this.selected);
    }
  },
}
</script>

<style>
  .v-label {
    padding-right: 15px;
  }
</style>