    function register_service_worker() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("./service-worker.js")
                .then(reg => console.log("Service Worker registered:", reg))
                .catch(err => console.log("SW registration failed:", err));
        }
    }

    function setAppHeight() {
        var appbar_height = document.getElementById("appbar").offsetHeight;
        document.documentElement.style.setProperty('--appbar-height', `${appbar_height}px`);
           var bottombar_height = document.getElementById("bottombar").offsetHeight;
        document.documentElement.style.setProperty('--bottombar-height', `${bottombar_height}px`);
        console.log(appbar_height);
              console.log("frefe");
}