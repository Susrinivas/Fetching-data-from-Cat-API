 let catApi = 'https://api.thecatapi.com/v1/images/search';
 
 fetch(catApi, {
    headers: {'x-api-key': '7548d9e5-22d8-4014-970b-adf578a572a9',
                'Content-Type': 'application/json'
}
})
 .then(resp => {
     return resp.json();
 }).then(result => {
     console.log(result);
     let image = result[0].url;
     getData(image);
 }).catch(error => {
     console.log(error);
 })

 function getData(image){
     let object = document.createElement('object');
     object.data = image;
     object.className = 'obj'
     let div1 = document.getElementsByClassName('cat')[0];
     div1.append(object)
}

