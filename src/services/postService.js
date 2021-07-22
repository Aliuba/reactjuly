export default class PostService{
    url='https://jsonplaceholder.typicode.com/posts'

    async posts(){
    return await fetch(this.url)
        .then(response => response.json())

    }
    async post(id){
    return await fetch(this.url+"/"+id)
        .then(response => response.json())

    }
}
