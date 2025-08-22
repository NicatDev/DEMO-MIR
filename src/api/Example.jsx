import Axios from "@/config/Axios/index.jsx"

const baseUrl = import.meta.env.VITE_BASE_URL;

const Index = {
    get: (data) => Axios.get('example', { params: data }).then(res => res),
    create: (data) => Axios.post('example', data).then(res => res),
}

export default Index;

