import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rwConfig: {
      selectedJobs: [],
      progress: [],
      sortOrder: {
        field: 'classSort',
        btnIndex: 0
      }
    },
    jobs: [
      {
        id: 19,
        classSort: 1,
        bookSort: 1,
        icon: require("@/assets/paladin.png"),
        name: "Paladin",
        weapons: [
          {
            icon: require("@/assets/rw/030620_hr1.png"),
            name: "Honorbound",
          },
          {
            icon: require("@/assets/rw/030620_hr1.png"),
            name: "Augmented Honorbound",
          },
          {
            icon: require("@/assets/rw/030620_hr1.png"),
            name: "Honorbound Recollection",
          },
          {
            icon: require("@/assets/rw/030629_hr1.png"),
            name: "Law's Order Bastard Sword",
          },
          {
            icon: require("@/assets/rw/030629_hr1.png"),
            name: "Augmented Law's Order Bastard Sword",
          },
          {
            icon: require("@/assets/rw/030633_hr1.png"),
            name: "Blade's Honor",
          },
        ],
      },
      {
        id: 21,
        classSort: 2,
        bookSort: 3,
        icon: require("@/assets/warrior.png"),
        name: "Warrior",
        weapons: [
          {
            icon: require("@/assets/rw/031593_hr1.png"),
            name: "Skullrender",
          },
          {
            icon: require("@/assets/rw/031593_hr1.png"),
            name: "Augmented Skullrender",
          },
          {
            icon: require("@/assets/rw/031593_hr1.png"),
            name: "Skullrender Recollection",
          },
          {
            icon: require("@/assets/rw/031204_hr1.png"),
            name: "Law's Order Labrys",
          },
          {
            icon: require("@/assets/rw/031204_hr1.png"),
            name: "Augmented Law's Labrys",
          },
          {
            icon: require("@/assets/rw/031208_hr1.png"),
            name: "Blade's Valor",
          },
        ],
      },
      {
        id: 32,
        classSort: 3,
        bookSort: 11,
        icon: require("@/assets/darkknight.png"),
        name: "Dark Knight",
        weapons:[
          {
            icon: require("@/assets/rw/034352_hr1.png"),
            name: "Woeborn",
          },
          {
            icon: require("@/assets/rw/034352_hr1.png"),
            name: "Augmented Woeborn",
          },
          {
            icon: require("@/assets/rw/034352_hr1.png"),
            name: "Woeborn Recollection",
          },
          {
            icon: require("@/assets/rw/034358_hr1.png"),
            name: "Law's Order Zweihander",
          },
          {
            icon: require("@/assets/rw/034358_hr1.png"),
            name: "Augmented Law's Order Zweihander",
          },
          {
            icon: require("@/assets/rw/034362_hr1.png"),
            name: "Blade's Justice",
          },
        ],
      },
      {
        id: 37,
        classSort: 4,
        bookSort: 16,
        icon: require("@/assets/gunbreaker.png"),
        name: "Gunbreaker",
        weapons: [
          {
            icon: require("@/assets/rw/036041_hr1.png"),
            name: "Crownsblade",
          },
          {
            icon: require("@/assets/rw/036041_hr1.png"),
            name: "Augmented Crownsblade",
          },
          {
            icon: require("@/assets/rw/036041_hr1.png"),
            name: "Crownsblade Recollection",
          },
          {
            icon: require("@/assets/rw/036050_hr1.png"),
            name: "Law's Order Manatrigger",
          },
          {
            icon: require("@/assets/rw/036050_hr1.png"),
            name: "Augmented Law's Order Manatrigger",
          },
          {
            icon: require("@/assets/rw/036054_hr1.png"),
            name: "Blade's Resolve",
          },
        ],
      },
      {
        id: 24,
        classSort: 5,
        bookSort: 7,
        icon: require("@/assets/whitemage.png"),
        name: "White Mage",
        weapons: [
          {
            icon: require("@/assets/rw/032769_hr1.png"),
            name: "Ingrimm",
          },
          {
            icon: require("@/assets/rw/032769_hr1.png"),
            name: "Augmented Ingrimm",
          },
          {
            icon: require("@/assets/rw/032769_hr1.png"),
            name: "Ingrimm Recollection",
          },
          {
            icon: require("@/assets/rw/032777_hr1.png"),
            name: "Law's Order Cane",
          },
          {
            icon: require("@/assets/rw/032777_hr1.png"),
            name: "Augmented Law's Order Cane",
          },
          {
            icon: require("@/assets/rw/032781_hr1.png"),
            name: "Blade's Mercy",
          },
        ],
      },
      {
        id: 28,
        classSort: 6,
        bookSort: 10,
        icon: require("@/assets/scholar.png"),
        name: "Scholar",
        weapons: [
          {
            icon: require("@/assets/rw/033321_hr1.png"),
            name: "Akademos",
          },
          {
            icon: require("@/assets/rw/033321_hr1.png"),
            name: "Augmented Akademos",
          },
          {
            icon: require("@/assets/rw/033321_hr1.png"),
            name: "Akademos Recollection",
          },
          {
            icon: require("@/assets/rw/033214_hr1.png"),
            name: "Law's Order Codex",
          },
          {
            icon: require("@/assets/rw/033214_hr1.png"),
            name: "Augmented Law's Order Codex",
          },
          {
            icon: require("@/assets/rw/033221_hr1.png"),
            name: "Blade's Wisdom",
          },
        ],
      },
      {
        id: 33,
        classSort: 7,
        bookSort: 13,
        icon: require("@/assets/astrologian.png"),
        name: "Astrologian",
        weapons: [
          {
            icon: require("@/assets/rw/034945_hr1.png"),
            name: "Solstice",
          },
          {
            icon: require("@/assets/rw/034945_hr1.png"),
            name: "Augmented Solstice",
          },
          {
            icon: require("@/assets/rw/034945_hr1.png"),
            name: "Solstice Recollection",
          },
          {
            icon: require("@/assets/rw/034952_hr1.png"),
            name: "Law's Order Astrometer",
          },
          {
            icon: require("@/assets/rw/034952_hr1.png"),
            name: "Augmented Law's Order Astrometer",
          },
          {
            icon: require("@/assets/rw/034956_hr1.png"),
            name: "Blade's Providence",
          },
        ],
      },
      {
        id: 20,
        classSort: 8,
        bookSort: 2,
        icon: require("@/assets/monk.png"),
        name: "Monk",
        weapons: [
          {
            icon: require("@/assets/rw/031186_hr1.png"),
            name: "Samsara",
          },
          {
            icon: require("@/assets/rw/031186_hr1.png"),
            name: "Augmented Samsara",
          },
          {
            icon: require("@/assets/rw/031186_hr1.png"),
            name: "Samsara Recollection",
          },
          {
            icon: require("@/assets/rw/031194_hr1.png"),
            name: "Law's Order Knuckles",
          },
          {
            icon: require("@/assets/rw/031194_hr1.png"),
            name: "Augmented Law's Order Knuckles",
          },
          {
            icon: require("@/assets/rw/031198_hr1.png"),
            name: "Blade's Serenity",
          },
        ],
      },
      {
        id: 22,
        classSort: 9,
        bookSort: 4,
        icon: require("@/assets/dragoon.png"),
        name: "Dragoon",
        weapons: [
          {
            icon: require("@/assets/rw/031995_hr1.png"),
            name: "Dreizack",
          },
          {
            icon: require("@/assets/rw/031995_hr1.png"),
            name: "Augmented Dreizack",
          },
          {
            icon: require("@/assets/rw/031995_hr1.png"),
            name: "Dreizack Recollection",
          },
          {
            icon: require("@/assets/rw/031606_hr1.png"),
            name: "Law's Order Spear",
          },
          {
            icon: require("@/assets/rw/031606_hr1.png"),
            name: "Augmented Law's Order Spear",
          },
          {
            icon: require("@/assets/rw/031610_hr1.png"),
            name: "Blade's Glory",
          },
        ],
      },
      {
        id: 30,
        classSort: 10,
        bookSort: 6,
        icon: require("@/assets/ninja.png"),
        name: "Ninja",
        weapons: [
          {
            icon: require("@/assets/rw/033970_hr1.png"),
            name: "Honeshirazu",
          },
          {
            icon: require("@/assets/rw/033970_hr1.png"),
            name: "Augmented Honeshirazu",
          },
          {
            icon: require("@/assets/rw/033970_hr1.png"),
            name: "Honeshirazu Recollection",
          },
          {
            icon: require("@/assets/rw/033980_hr1.png"),
            name: "Law's Order Knives",
          },
          {
            icon: require("@/assets/rw/033980_hr1.png"),
            name: "Augmented Law's Order Knives",
          },
          {
            icon: require("@/assets/rw/033984_hr1.png"),
            name: "Blade's Subtlety",
          },
        ],
      },
      {
        id: 34,
        classSort: 11,
        bookSort: 14,
        icon: require("@/assets/samurai.png"),
        name: "Samurai",
        weapons: [
          {
            icon: require("@/assets/rw/036502_hr1.png"),
            name: "Hoshikiri",
          },
          {
            icon: require("@/assets/rw/036502_hr1.png"),
            name: "Augmented Hoshikiri",
          },
          {
            icon: require("@/assets/rw/036502_hr1.png"),
            name: "Hoshikiri Recollection",
          },
          {
            icon: require("@/assets/rw/036509_hr1.png"),
            name: "Law's Order Samurai Blade",
          },
          {
            icon: require("@/assets/rw/036509_hr1.png"),
            name: "Augmented Law's Order Samurai Blade",
          },
          {
            icon: require("@/assets/rw/036513_hr1.png"),
            name: "Blade's Fealty",
          },
        ],
      },
      {
        id: 23,
        classSort: 12,
        bookSort: 5,
        icon: require("@/assets/bard.png"),
        name: "Bard",
        weapons: [
          {
            icon: require("@/assets/rw/032386_hr1.png"),
            name: "Brilliance",
          },
          {
            icon: require("@/assets/rw/032386_hr1.png"),
            name: "Augmented Brilliance",
          },
          {
            icon: require("@/assets/rw/032386_hr1.png"),
            name: "Brilliance Recollection",
          },
          {
            icon: require("@/assets/rw/032393_hr1.png"),
            name: "Law's Order Composite Bow",
          },
          {
            icon: require("@/assets/rw/032393_hr1.png"),
            name: "Augmented Law's Order Composite Bow",
          },
          {
            icon: require("@/assets/rw/032397_hr1.png"),
            name: "Blade's Muse",
          },
        ],
      },
      {
        id: 31,
        classSort: 13,
        bookSort: 12,
        icon: require("@/assets/machinist.png"),
        name: "Machinist",
        weapons: [
          {
            icon: require("@/assets/rw/034468_hr1.png"),
            name: "Lawman",
          },
          {
            icon: require("@/assets/rw/034468_hr1.png"),
            name: "Augmented Lawman",
          },
          {
            icon: require("@/assets/rw/034468_hr1.png"),
            name: "Lawman Recollection",
          },
          {
            icon: require("@/assets/rw/034404_hr1.png"),
            name: "Law's Order Revolver",
          },
          {
            icon: require("@/assets/rw/034404_hr1.png"),
            name: "Augmented Law's Order Revolver",
          },
          {
            icon: require("@/assets/rw/034408_hr1.png"),
            name: "Blade's Ingenuity",
          },
        ],
      },
      {
        id: 38,
        classSort: 14,
        bookSort: 17,
        icon: require("@/assets/dancer.png"),
        name: "Dancer",
        weapons: [
          {
            icon: require("@/assets/rw/036244_hr1.png"),
            name: "Enchufla",
          },
          {
            icon: require("@/assets/rw/036244_hr1.png"),
            name: "Augmented Enchufla",
          },
          {
            icon: require("@/assets/rw/036244_hr1.png"),
            name: "Enchufla Recollection",
          },
          {
            icon: require("@/assets/rw/036249_hr1.png"),
            name: "Law's Order Chakrams",
          },
          {
            icon: require("@/assets/rw/036249_hr1.png"),
            name: "Augmented Law's Order Chakrams",
          },
          {
            icon: require("@/assets/rw/036253_hr1.png"),
            name: "Blade's Euphoria",
          },
        ],
      },
      {
        id: 25,
        classSort: 15,
        bookSort: 8,
        icon: require("@/assets/blackmage.png"),
        name: "Black Mage",
        weapons: [
          {
            icon: require("@/assets/rw/033140_hr1.png"),
            name: "Soulscourge",
          },
          {
            icon: require("@/assets/rw/033140_hr1.png"),
            name: "Augmented Soulscourge",
          },
          {
            icon: require("@/assets/rw/033140_hr1.png"),
            name: "Soulscourge Recollection",
          },
          {
            icon: require("@/assets/rw/033148_hr1.png"),
            name: "Law's Order Rod",
          },
          {
            icon: require("@/assets/rw/033148_hr1.png"),
            name: "Augmented Law's Order Rod",
          },
          {
            icon: require("@/assets/rw/033152_hr1.png"),
            name: "Blade's Fury",
          },
        ],
      },
      {
        id: 27,
        classSort: 16,
        bookSort: 9,
        icon: require("@/assets/summoner.png"),
        name: "Summoner",
        weapons: [
          {
            icon: require("@/assets/rw/033322_hr1.png"),
            name: "Espiritus",
          },
          {
            icon: require("@/assets/rw/033322_hr1.png"),
            name: "Augmented Espiritus",
          },
          {
            icon: require("@/assets/rw/033322_hr1.png"),
            name: "Espiritus Recollection",
          },
          {
            icon: require("@/assets/rw/033213_hr1.png"),
            name: "Law's Order Index",
          },
          {
            icon: require("@/assets/rw/033213_hr1.png"),
            name: "Augmented Law's Order Index",
          },
          {
            icon: require("@/assets/rw/033222_hr1.png"),
            name: "Blade's Acumen",
          },
        ],
      },
      {
        id: 35,
        classSort: 17,
        bookSort: 15,
        icon: require("@/assets/redmage.png"),
        name: "Red Mage",
        weapons: [
          {
            icon: require("@/assets/rw/036801_hr1.png"),
            name: "Talekeeper",
          },
          {
            icon: require("@/assets/rw/036801_hr1.png"),
            name: "Augmented Talekeeper",
          },
          {
            icon: require("@/assets/rw/036801_hr1.png"),
            name: "Talekeeper Recollection",
          },
          {
            icon: require("@/assets/rw/036808_hr1.png"),
            name: "Law's Order Rapier",
          },
          {
            icon: require("@/assets/rw/036808_hr1.png"),
            name: "Augmented Law's Order Rapier",
          },
          {
            icon: require("@/assets/rw/036812_hr1.png"),
            name: "Blade's Temperance",
          },
        ],
      },
    ],
    jobCategories: [
      {
        id: 1,
        name: "Tanks",
        jobs: [
          {
            id: 19,
            name: "Paladin",
          },
          {
            id: 21,
            name: "Warrior",
          },
          {
            id: 32,
            name: "Dark Knight",
          },
          {
            id: 37,
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
            name: "White Mage",
          },
          {
            id: 28,
            name: "Scholar",
          },
          {
            id: 33,
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
            name: "Monk",
          },
          {
            id: 22,
            name: "Dragoon",
          },
          {
            id: 30,
            name: "Ninja",
          },
          {
            id: 34,
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
            name: "Bard",
          },
          {
            id: 31,
            name: "Machinist",
          },
          {
            id: 38,
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
            name: "Black Mage",
          },
          {
            id: 27,
            name: "Summoner",
          },
          {
            id: 35,
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
        nextId: 69506,
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
        nextId: 69507,
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
        nextId: 69574,
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
        nextId: 69576,
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
        nextId: 69637,
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
        nextId: null
      },
    ],
  },
  getters: {
    getQuestById: (state) => (id) => {
      return state.quests.find((quest) => quest.id === id);
    },
    getQuestByStage: (state) => (index) => {
      return state.quests[index];
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
    },
    SET_JOB_PROGRESS(state, args) {
      const jobProgressIndex = state.rwConfig.progress.findIndex((obj) => obj.id === args.id);
      if (jobProgressIndex > -1) {
        state.rwConfig.progress.splice(jobProgressIndex, 1);
      }
      state.rwConfig.progress.push(args);
      localStorage.rwConfig = JSON.stringify(state.rwConfig);
    },
    SET_SORT_ORDER(state, args) {
      state.rwConfig.sortOrder = args;
      localStorage.rwConfig = JSON.stringify(state.rwConfig);
    }
  },
  actions: {
    setConfig({ commit }, args) {
      commit('SET_RW_CONFIG', args);
    },
    setSelectedJobs({ commit }, args) {
      commit('SET_SELECTED_JOBS', args);
    },
    setJobProgress({ commit }, args) {
      commit('SET_JOB_PROGRESS', args);
    },
    setSortOrder({ commit }, args){
      commit('SET_SORT_ORDER', args);
    }
  },
  modules: {},
});
