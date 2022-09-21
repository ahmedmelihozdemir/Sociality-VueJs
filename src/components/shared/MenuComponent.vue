<template>
    <div v-if="showMenu == true">
        <v-navigation-drawer
            v-model="drawer"
            permanent
            width="200px"
            class="menu"
            
        >
            <v-divider></v-divider>
            <v-list dense class="menu-list px-2 py-2" >
                <v-list-item
                    v-for="item in items"
                    :key="item.text"
                    link
                    class="menu-list-item py-2"
                    @click="alert(item.text)"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title >{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
    name: "MenuComponent",
    components: {},
})
export default class MenuComponent extends Vue {
    @Prop() showMenu!: boolean;
    @Prop() showMenuContent!: boolean;

    selectedItem = 1;
    items = [
        { text: "Notifications", icon: "mdi-bell" },
        { text: "Publish", icon: "mdi-publish" },
        { text: "Context", icon: "mdi-brightness-5" },
        { text: "Feed", icon: "mdi-brightness-7" },
    ];
    drawer = true;

    alert(e: any) {
        alert(e);
    }


}
</script>

<style lang="scss" scoped>
.menu {
    position: absolute;
    top: 0;
    left: 200px;
    text-align: center;
    height: 100%;
    overflow: auto;
    background-color: white;
    opacity: 0.7;
    box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.2);

    .menu-list {
        .menu-list-item {
            &:hover {
                padding: 10px;
                border-radius: 10px;
                background-color: rgba(235, 26, 26, 0.228);
            }
        }
    }
}
</style>
