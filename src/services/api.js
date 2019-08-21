import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://localhost:3333'
    //baseURL: 'http://localhost:3333' // (android) adb reverse tcp:3333 tcp:3333
    //baseURL: 'http://X.X.X.X:3333'  // (android) Pela Wifi ou usb
    baseURL: 'http://10.0.3.2:3333' //(android) Genymotion
    //baseURL: 'http://10.0.2.2:3333' //(android)  Emulador android studio
});

export default api;