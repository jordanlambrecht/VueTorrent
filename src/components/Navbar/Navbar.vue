<script setup lang="ts">
import { useDashboardStore, useNavbarStore, useVueTorrentStore } from '@/stores'
import { useScreenSafeArea } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import BottomActions from './SideWidgets/BottomActions.vue'
import CurrentSpeed from './SideWidgets/CurrentSpeed.vue'
import FilterSelect from './SideWidgets/FilterSelect.vue'
import FreeSpace from './SideWidgets/FreeSpace.vue'
import SpeedGraph from './SideWidgets/SpeedGraph.vue'
import TransferStats from './SideWidgets/TransferStats.vue'
import ActiveFilters from './TopWidgets/ActiveFilters.vue'
import TopContainer from './TopWidgets/TopContainer.vue'

const { top, bottom, left, right } = useScreenSafeArea()

const router = useRouter()
const dashboardStore = useDashboardStore()
const { isDrawerOpen } = storeToRefs(useNavbarStore())
const { isDrawerRight, showCurrentSpeed, showSpeedGraph, showAlltimeStat, showSessionStat, showFreeSpace } = storeToRefs(useVueTorrentStore())

const topPadding = computed(() => `padding-top: ${top.value}`)
const bottomPadding = computed(() => `padding-bottom: ${bottom.value}`)
const leftPadding = computed(() => `padding-left: ${left.value}`)
const rightPadding = computed(() => `padding-right: ${right.value}`)
const sidePadding = computed(() => isDrawerRight.value ? rightPadding : leftPadding)

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

const goHome = () => {
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <v-navigation-drawer v-model="isDrawerOpen" :style="`${topPadding};${sidePadding};${bottomPadding}`" :location="isDrawerRight ? 'right' : 'left'" color="navbar" disable-route-watcher>
    <v-list class="clean-px px-2 pt-0">
      <v-list-item v-if="showCurrentSpeed">
        <CurrentSpeed />
      </v-list-item>

      <v-list-item v-if="showSpeedGraph">
        <SpeedGraph />
      </v-list-item>

      <v-list-item v-if="showAlltimeStat">
        <TransferStats :session="false" />
      </v-list-item>

      <v-list-item v-if="showSessionStat">
        <TransferStats :session="true" />
      </v-list-item>

      <v-list-item v-if="showFreeSpace">
        <FreeSpace />
      </v-list-item>

      <v-list-item>
        <FilterSelect />
      </v-list-item>

      <v-list-item density="compact">
        <div class="d-flex justify-center text-accent text-select">
          {{ dashboardStore.torrentCountString }}
        </div>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <BottomActions />
    </template>
  </v-navigation-drawer>

  <v-app-bar :style="`${topPadding};${leftPadding};${rightPadding}`">
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <v-app-bar-title class="title">
      <div class="title-wrapper cursor-pointer" @click="goHome">
        <span v-if="$vuetify.display.smAndUp" class="text-accent">Vue</span>
        <span v-if="$vuetify.display.smAndUp">Torrent</span>
      </div>

      <ActiveFilters />
    </v-app-bar-title>

    <TopContainer />
  </v-app-bar>
</template>

<style scoped lang="scss">
.clean-px > * {
  padding-inline-start: 0 !important;
  padding-inline-end: 0 !important;
}
.title {
  margin-inline-start: calc(16px - 0.4em);
}
.title-wrapper {
  display: inline-flex;
  width: min-content;
  padding: 0.4em;
}
</style>
