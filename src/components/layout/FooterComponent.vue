<template>
    <div class="footer">
        <v-footer color="brown lighten-1" padless>
            <v-row justify="center" no-gutters>
                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    text
                    rounded
                    class="my-2"
                >
                    {{ link }}
                </v-btn>
                <v-col
                    class="brown lighten-2 py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }}/{{
                        new Date().getMonth()
                    }}/{{ new Date().getDate() }} —
                    <strong class="wheat--text">Melih Özdemir</strong>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "FooterComponent",
})
export default class FooterComponent extends Vue {
    links = ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];
}
</script>

<style lang="scss" scoped>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
}
</style>
