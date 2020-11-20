export default {
    baseURL: 'https://pixabay.com/api/',
    apiKey: '17512246-8cb81e257606609dfb7634e3b',
    perPage: 12,

    getImages(query = '', page = 1) {
        return fetch(
            `${this.baseURL}?q=${query}&page=${page}&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`,
        )
            .then(response => response.json())
            .then(data => data.hits);
    },
    getImagesById(id) {
        return fetch(`${this.baseURL}?key=${this.apiKey}&id=${id}`)
            .then(response => response.json())
            .then(data => data.hits[0]);
    },
};
