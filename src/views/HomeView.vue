<template>
  <div>
    <MainComponent></MainComponent>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MainComponent from "@/components/shared/MainComponent.vue";

@Component({
    components: {
        MainComponent,
    }
})
export default class HomeView extends Vue {
    
}
</script>
