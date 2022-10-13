<template>
    <v-main>
        <v-card
            class="mx-auto my-5"
            max-width="500"
            outlined
            v-for="(i, inf, idx) in facebookData"
            :key="inf"
        >
            <v-card-title> {{ i[idx].published_at }} </v-card-title>
            <v-img
                v-for="(a, adx) in i"
                :key="adx"
                :src="a.entry.image[0]"
                @error="errorImage"
                height="300px"
            >
                {{ a.published_at }}
                <v-card-subtitle> {{ i[idx].entry.message }} </v-card-subtitle>
            </v-img>

            <v-card-subtitle> {{ i[idx].entry.image }} </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange lighten-2" text> Explore </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                    <v-icon>{{
                        show ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised
                        more than he could deliver. You won't have time for
                        sleeping, soldier, not with all the bed making you'll be
                        doing. Then we'll go with that data file! Hey, you add a
                        one and two zeros to that or we walk! You're going to do
                        his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import datas from "@/data.json";

@Component({
    components: {},
})
export default class FacebookView extends Vue {
    show = false;
    facebookData = datas.posts_by_date;

    errorImage(event: any) {
        event.target.src = "nopostimage.png";
    }
}
</script>

<style scoped lang="scss"></style>
