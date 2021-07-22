export default class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    async users() {
        return await fetch(this.url)
            .then(response => response.json())
    }

    async user(id) {
        return await fetch(this.url+'/'+id)
            .then(response => response.json())
    }
}





