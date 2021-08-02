import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rwConfig: {
      selectedJobs: []
    },
    jobCategories: [
      {
        id: 1,
        name: "Tanks",
        jobs: [
          {
            id: 19,
            icon: require("@/assets/paladin.png"),
            name: "Paladin",
            weapons: [
              {
                id: 30228,
                icon: require("@/assets/rw/030620_hr1.png"),
                name: "Honorbound",
                questId: 69381,
              },
              {
                id: 30767,
                icon: require("@/assets/rw/030620_hr1.png"),
                name: "Augmented Honorbound",
                questId: 69506,
              },
              {
                id: 30785,
                icon: require("@/assets/rw/030620_hr1.png"),
                name: "Honorbound Recollection",
                questId: 69507,
              },
              {
                id: 32651,
                icon: require("@/assets/rw/030629_hr1.png"),
                name: "Law's Order Bastard Sword",
                questId: 69574,
              },
              {
                id: 32669,
                icon: require("@/assets/rw/030629_hr1.png"),
                name: "Augmented Law's Order Bastard Sword",
                questId: 69576,
              },
              {
                id: 33462,
                icon: require("@/assets/rw/030633_hr1.png"),
                name: "Blade's Honor",
                questId: 69637,
              },
            ],
          },
          {
            id: 21,
            icon: require("@/assets/warrior.png"),
            name: "Warrior",
            weapons: [
              {
                id: 30230,
                icon: require("@/assets/rw/031593_hr1.png"),
                name: "Skullrender",
                questId: 69381,
              },
              {
                id: 30769,
                icon: require("@/assets/rw/031593_hr1.png"),
                name: "Augmented Skullrender",
                questId: 69506,
              },
              {
                id: 30787,
                icon: require("@/assets/rw/031593_hr1.png"),
                name: "Skullrender Recollection",
                questId: 69507,
              },
              {
                id: 32653,
                icon: require("@/assets/rw/031204_hr1.png"),
                name: "Law's Order Labrys",
                questId: 69574,
              },
              {
                id: 32671,
                icon: require("@/assets/rw/031204_hr1.png"),
                name: "Augmented Law's Labrys",
                questId: 69576,
              },
              {
                id: 33464,
                icon: require("@/assets/rw/031208_hr1.png"),
                name: "Blade's Valor",
                questId: 69637,
              },
            ],
          },
          {
            id: 32,
            icon: require("@/assets/darkknight.png"),
            name: "Dark Knight",
            weapons: [
              {
                id: 30234,
                icon: require("@/assets/rw/034352_hr1.png"),
                name: "Woeborn",
                questId: 69381,
              },
              {
                id: 30773,
                icon: require("@/assets/rw/034352_hr1.png"),
                name: "Augmented Woeborn",
                questId: 69506,
              },
              {
                id: 30791,
                icon: require("@/assets/rw/034352_hr1.png"),
                name: "Woeborn Recollection",
                questId: 69507,
              },
              {
                id: 32657,
                icon: require("@/assets/rw/034358_hr1.png"),
                name: "Law's Order Zweihander",
                questId: 69574,
              },
              {
                id: 32675,
                icon: require("@/assets/rw/034358_hr1.png"),
                name: "Augmented Law's Zweihander",
                questId: 69576,
              },
              {
                id: 33464,
                icon: require("@/assets/rw/034362_hr1.png"),
                name: "Blade's Justice",
                questId: 69637,
              },
            ],
          },
          {
            id: 37,
            icon: require("@/assets/gunbreaker.png"),
            name: "Gunbreaker",
          },
        ],
      },
      {
        id: 2,
        name: "Healers",
        jobs: [
          {
            id: 24,
            icon: require("@/assets/whitemage.png"),
            name: "White Mage",
          },
          {
            id: 28,
            icon: require("@/assets/scholar.png"),
            name: "Scholar",
          },
          {
            id: 33,
            icon: require("@/assets/astrologian.png"),
            name: "Astrologian",
          },
        ],
      },
      {
        id: 3,
        name: "Melee",
        jobs: [
          {
            id: 20,
            icon: require("@/assets/monk.png"),
            name: "Monk",
          },
          {
            id: 22,
            icon: require("@/assets/dragoon.png"),
            name: "Dragoon",
          },
          {
            id: 30,
            icon: require("@/assets/ninja.png"),
            name: "Ninja",
          },
          {
            id: 34,
            icon: require("@/assets/samurai.png"),
            name: "Samurai",
          },
        ],
      },
      {
        id: 4,
        name: "Physical Ranged",
        jobs: [
          {
            id: 23,
            icon: require("@/assets/bard.png"),
            name: "Bard",
          },
          {
            id: 31,
            icon: require("@/assets/machinist.png"),
            name: "Machinist",
          },
          {
            id: 38,
            icon: require("@/assets/dancer.png"),
            name: "Dancer",
          },
        ],
      },
      {
        id: 5,
        name: "Magical Ranged",
        jobs: [
          {
            id: 25,
            icon: require("@/assets/blackmage.png"),
            name: "Black Mage",
          },
          {
            id: 27,
            icon: require("@/assets/summoner.png"),
            name: "Summoner",
          },
          {
            id: 35,
            icon: require("@/assets/redmage.png"),
            name: "Red Mage",
          },
        ],
      },
    ],
    quests: [
      {
        id: 69381,
        name: "Resistance Is (Not) Futile",
        items: [
          {
            id: 30273,
            name: "Thavnairian Scalepowder",
            icon: require("@/assets/qi/022650_hr1.png"),
            quantity: 4,
          },
        ],
      },
      {
        id: 69506,
        name: "For Want of a Memory",
        items: [
          {
            id: 31573,
            name: "Tortured Memory of the Dying",
            icon: require("@/assets/qi/020038_hr1.png"),
            quantity: 20,
          },
          {
            id: 31574,
            name: "Sorrowful Memory of the Dying",
            icon: require("@/assets/qi/020039_hr1.png"),
            quantity: 20,
          },
          {
            id: 31575,
            name: "Harrowing Memory of the Dying",
            icon: require("@/assets/qi/020040_hr1.png"),
            quantity: 20,
          },
        ],
      },
      {
        id: 69507,
        name: "The Will to Resist",
        items: [
          {
            id: 31576,
            name: "Bitter Memory of the Dying",
            icon: require("@/assets/qi/020041_hr1.png"),
            quantity: 6,
          },
        ],
      },
      {
        id: 69574,
        name: "Change of Arms",
        items: [
          {
            id: 32956,
            name: "Loathsome Memory of the Dying",
            icon: require("@/assets/qi/020020_hr1.png"),
            quantity: 15,
          },
        ],
      },
      {
        id: 69576,
        name: "A New Path of Resistance",
        items: [
          {
            id: 32959,
            name: "Timeworn Artifact",
            icon: require("@/assets/qi/026597_hr1.png"),
            quantity: 15,
          },
        ],
      },
      {
        id: 69637,
        name: "Irresistible",
        items: [
          {
            id: 33767,
            name: "Raw Emotion",
            icon: require("@/assets/qi/020027_hr1.png"),
            quantity: 15,
          },
        ],
      },
    ],
  },
  getters: {
    getQuestById: (state) => (id) => {
      return state.quests.find((quest) => quest.id === id);
    },
    getCategoryById: (state) => (id) => {
      return state.jobCategories.find((category) => category.id === id);
    },
    getCategoryByJobId: (state) => (id) => {
      return state.jobCategories.find((category) => category.jobs.includes((job) => job.id === id));
    }
  },
  mutations: {
    SET_RW_CONFIG(state, args) {
      state.rwConfig = args;
    },
    SET_SELECTED_JOBS(state, args) {
      state.rwConfig.selectedJobs = args;
      localStorage.rwConfig = JSON.stringify(state.rwConfig);
    }
  },
  actions: {
    setConfig({ commit }, args) {
      commit('SET_RW_CONFIG', args);
    },
    setSelectedJobs({ commit }, args) {
      commit('SET_SELECTED_JOBS', args);
    }
  },
  modules: {},
});
