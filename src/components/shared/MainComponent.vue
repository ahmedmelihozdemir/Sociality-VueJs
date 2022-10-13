<template>
    <v-container class="mc-container">
        <v-row no-gutters>
            <v-col cols="12" md="3">
                <SidebarComponent
                    @changedShowMenu="showMenu = $event"
                    :showMenu="showMenu"
                ></SidebarComponent>
            </v-col>
            <v-col cols="12" md="3">
                <MenuComponent
                    :showMenu="showMenu"
                    :showMenuContent="showMenuContent"
                ></MenuComponent>
            </v-col>
            <v-col cols="12" md="4">
                <ContentComponent></ContentComponent>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import SidebarComponent from "@/components/shared/SidebarComponent.vue";
import MenuComponent from "@/components/shared/MenuComponent.vue";
import ContentComponent from "@/components/shared/ContentComponent.vue";


@Component({
    name: "MainComponent",
    components: {
        SidebarComponent,
        MenuComponent,
        ContentComponent,
    },
})
export default class MainComponent extends Vue {
    showMenu = false;
    showMenuContent = false;
    mini = true;
}
</script>

<style lang="scss" scoped>
.mc-container {
    margin: 10px;
}
</style>
