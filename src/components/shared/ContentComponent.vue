<template>
    <div class="content-container">
        <!-- <v-card class="content">
            <v-spacer></v-spacer>
            <v-container fluid>
                <v-row class="content-row" dense>
                    <v-col
                        v-for="card in cards"
                        :key="card.title"
                        :cols="card.flex"
                    >
                        <v-img
                            :src="card.src"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                            <v-card-title v-text="card.title"></v-card-title>
                        </v-img>
                        <v-card-actions>
                            <v-spacer>{{ getData.channel }}</v-spacer>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card> -->

        <v-card class="content">
            <v-spacer></v-spacer>
            <v-container fluid>
                <v-row class="content-row" dense>
                    <v-col
                        v-for="(i, idx) in getData[20210617]"
                        :key="idx"
                        cols="12"
                    >
                        <v-img
                            src="https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                            <v-card-title v-text="i"></v-card-title>
                        </v-img>
                        <v-card-actions>
                            <v-spacer>{{ getData.channel }}</v-spacer>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            <v-btn class="btn-icon" icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-divider class="my-2"></v-divider>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <div>{{ getData[20210617][0].entry.image }}</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import datas from "@/data.json";

@Component({
    name: "ContentComponent",
    components: {},
})
export default class ContentComponent extends Vue {
    cards = [
        {
            title: "Pre-fab homes",
            src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
            flex: 12,
        },
        {
            title: "Favorite road trips",
            src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
            flex: 12,
        },
        {
            title: "Best airlines",
            src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
            flex: 12,
        },
    ];

    getData = datas.posts_by_date;

    mounted() {
        console.log(this.getData);
        console.log(this.getData[20210617][1].entry.image);
    }
}
</script>

<style lang="scss" scoped>
.content-container {
    /* position: absolute; */
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content {
        background-color: transparent;
        display: flex;
        width: 100%;
        height: 100%;

        .content-row {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }
    }
}

.btn-icon {
    &:hover {
        background-color: rgba(235, 26, 26, 0.228);
    }
}
</style>
