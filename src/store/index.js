import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    getQuestbyId: (state) => (id) => {
      return state.quests.find((q) => q.id === id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
