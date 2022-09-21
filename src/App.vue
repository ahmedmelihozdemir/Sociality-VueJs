<template>
    <v-app>
        <LayoutComponent></LayoutComponent>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LayoutComponent from "@/components/layout/LayoutComponent.vue";

@Component({
    components: {
        LayoutComponent,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app{
    background-color: wheat;
}
</style>
