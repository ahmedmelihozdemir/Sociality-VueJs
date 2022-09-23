<template>
    <div class="header">
        <v-app-bar app color="#47CEB6" dark>
            <div class="logo d-flex align-center">
                <v-img
                    alt="Sociality Logo"
                    class="shrink mr-2"
                    contain
                    src="@/assets/sociality-og-image.png"
                    transition="scale-transition"
                    width="40"
                    @click.stop="drawer = !drawer"
                />
                <v-img
                    alt="Sociality Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="@/assets/Sociality_Logo_MainV_positive.png"
                    width="100"
                />
            </div>
            <v-spacer></v-spacer>
            <v-btn
                href="https://github.com/ahmedmelihozdemir"
                target="_blank"
                text
            >
                <span class="mr-2">GITHUB</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "HeaderComponent",
})
export default class HeaderComponent extends Vue {
    drawer = false;
    watch() {
        this.drawer = false;
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
}
.logo {
    &:hover {
        cursor: pointer;
    }
}
</style>
