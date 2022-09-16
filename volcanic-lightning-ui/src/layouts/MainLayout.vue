<template>
  <q-layout view="hHh Lpr lff">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat @click="toggleLeftDrawer" round dense icon="menu" />
          <q-toolbar-title>Volcanic Lightning</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :mini="!drawer || miniState"
        show-if-above
        :width="200"
        :breakpoint="500"
        mini-to-overlay
        bordered
      >
        <q-scroll-area class="fit">
          <q-list>
            <q-item
              v-for="item in drawerItems"
              clickable
              v-ripple
              :key="`drawer-item-${item.name}`"
              :active="item.active()"
              @click="item.handleClick()"
              class="q-mb-md"
            >
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                {{ item.name }}
              </q-item-section>
              <q-tooltip
                v-if="miniState"
                anchor="center right"
                self="center left"
              >
                {{ item.name }}
              </q-tooltip>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';
import useLightningStore from '../stores/lightning-store';

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const drawer = ref(false);
    const miniState = ref(false);

    const { currentPanel, PanelType } = toRefs(useLightningStore());

    const drawerItems = ref([
      {
        name: 'Map',
        icon: 'map',
        active: () => currentPanel.value === PanelType.value.MAP,
        handleClick: () => currentPanel.value = PanelType.value.MAP,
      },
      {
        name: 'Dashboard',
        icon: 'dashboard',
        active: () => currentPanel.value === PanelType.value.DASHBOARD,
        handleClick: () => currentPanel.value = PanelType.value.DASHBOARD,
      },
      {
        name: 'Table',
        icon: 'table_chart',
        active: () => currentPanel.value === PanelType.value.TABLE,
        handleClick: () => currentPanel.value = PanelType.value.TABLE,
      }
    ]);

    return {
      drawer,
      miniState,
      drawerItems,
      toggleLeftDrawer () {
        miniState.value = !miniState.value
      },
    }
  }
});
</script>
