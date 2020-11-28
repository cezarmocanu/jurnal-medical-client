const HOST = 'http://localhost:8080';

const Endpoints = {
    article: {
        get: async () => {
                const response = await fetch(`${HOST}/article`);
                const json = await response.json();
                return json;
        }
    }
}
export {
    Endpoints
}