
    import { createApp, ref } from "vue";

    createApp({
        setup(){
            const appTitle = ref('My Vue App');
            const clicks = ref(0);

            return {
                appTitle,
                clicks
            }
        }
    }).mount('#app');