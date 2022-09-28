<template>
  <div>
    <LoadingComponent></LoadingComponent>
    <MainComponent></MainComponent>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MainComponent from "@/components/shared/MainComponent.vue";
import LoadingComponent from "@/components/layout/LoadingComponent.vue";

@Component({
    components: {
        MainComponent,
        LoadingComponent,
    }
})
export default class HomeView extends Vue {
    
}
</script>
