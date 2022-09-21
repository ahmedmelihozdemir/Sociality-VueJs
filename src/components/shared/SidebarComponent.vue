<template>
    <div class="sidebar-container">
        <div>
            ---------------------------------------
            {{ showMenu }}
        </div>
        <v-card class="sidebar">
            <v-navigation-drawer
                v-model="drawer"
                :mini-variant.sync="mini"
                permanent
                width="200"
            >
                <v-list-item class="px-2 py-2">
                    <v-list-item-avatar @click.stop="mini = !mini">
                        <v-img
                            src="https://randomuser.me/api/portraits/women/31.jpg"
                        ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-title>John Leider</v-list-item-title>
                    <v-btn icon @click.stop="mini = !mini">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </v-list-item>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        @click="changeShowMenu(item.title)"
                        
                        class="sidebar-list-item py-2"
                    >
                        <v-list-item-icon class="sidebar-list-item-icon">
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content class="sidebar-list-item-content">
                            <v-list-item-title
                                >
                                <router-link :to="item.title" class="list-item-link">{{ item.title }}</router-link>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

@Component({
    name: "SidebarComponent",
})
export default class SidebarComponent extends Vue {
    @Prop() showMenu!: boolean;
    /* @Prop() mini!: boolean; */
    drawer = true;
    mini = true;
    items = [
        { title: "facebook", icon: "mdi-facebook" },
        { title: "instagram", icon: "mdi-instagram" },
        { title: "twitter", icon: "mdi-twitter" },
    ];
    /* mini = true; */

    changeShowMenu(e: any) {
        this.$emit("changedShowMenu", (this.showMenu = !this.showMenu));
        /* if (this.showMenu == true) {
            alert(e);
        } */
    }
    changeShowMenuHover() {
        this.$emit("changedShowMenuHover", (this.showMenu = true));
    }
    changeShowMenuLeave() {
        this.$emit("changedShowMenuLeave", (this.showMenu = false));
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    height: 100%;
    overflow: auto;
    box-shadow: 10px 0 5px -2px rgba(0, 0, 0, 0.2);
    opacity: 0.9;

    .sidebar-list-item {
        &:hover {
            padding: 10px;
            border-radius: 10px;
            background-color: rgba(235, 26, 26, 0.228);
        }
        .sidebar-list-item-content {
            &:hover {
                transform: scale(1.1);
            }
            .list-item-link{
                text-decoration: none;
                text-transform: uppercase;
                font-weight: bold;
                &:hover {
                    transform: scale(2.5);
                    color: lightcoral;
                }
            }
        }
    }
}
</style>
