import { defineStore } from 'pinia';
import { ref } from 'vue';
import { GeoJSON } from '@global-volcanic-lightning/types';

const useLightningStore = defineStore('lightning', () => {
    const lightning = ref<GeoJSON>();
    const setLightning = (res: GeoJSON) => lightning.value = res;

    enum PanelType {
        MAP = 'map',
        DASHBOARD = 'dashboard',
        TABLE = 'table'
    }

    const currentPanel = ref<PanelType>(PanelType.MAP);

    return {
        lightning,
        setLightning,
        currentPanel,
        PanelType
    };
});

export default useLightningStore;