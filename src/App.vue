<template>
  <div id="app">
    <button id="create" @click="create">Create</button>
    <button id="removeNodeId" @click="removeNode">RemoveNodes</button>
    <button id="clear" @click="clear">Clear</button>
    <button @click="log">Show Vue instances</button>
    <div id="drawflow"></div>
  </div>
</template>

<script>
/*eslint-disable */
// import Drawflow from 'drawflow'
import Drawflow from './drawflow' // Fixed code
import styleDrawflow from 'drawflow/dist/drawflow.min.css'
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      exportValue: null,
      nodeIds: []
    }
  },
  mounted() {
    const id = document.getElementById("drawflow");
    Vue.prototype.$df = new Drawflow(id, Vue, this);
    
    this.$df.registerNode('HelloWorld', HelloWorld, {select_type: "2"}, {});
    this.$df.start();
  },
  methods: {
    exportdf() {
      this.exportValue = this.$df.export();
      console.log(this.exportValue);
    },
    importdf() {
      this.$df.import(this.exportValue);
    },
    create() {
      for (let index = 0; index < 1000; index++) {
        const nodeId = this.$df.addNode('HelloWorld', 0, 1, 150, 300, 'HelloWorld', {select_type: "1"}, 'HelloWorld', 'vue');
        this.nodeIds.push(nodeId)
      }
    },
    clear() {
      this.$df.clear()
    },
    removeNode() {
      this.nodeIds.forEach(nodeId => {
        this.$df.removeNodeId(`node-${nodeId}`)
      })
      this.nodeIds = []
    },
    log() {
      console.log(window.__VUE_HOT_MAP__)
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#drawflow {
  width: 100%; 
  height: 800px;
  border: 1px solid red;
}
</style>