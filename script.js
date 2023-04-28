let searchBar = document.querySelector('.search-bar input')
// let apiKey = 'tsqjORZl6xIKThgQVNB-jAsQvKNe1PthE-AlOVir-Yk'
// let secretKey = 'GgeZ8j1xvYje9sRyyPynqO1TlgSWapxG1khuWaTASLs'
// let urlBase = `https://api.unsplash.com/search/photos/?query=${searchBar.value}/?client_id=YOUR_ACCESS_KEY`





searchBar.addEventListener('keypress',(e)=>{
    // console.log(e.key)
    if(e.key == 'Enter'){
        // console.log(searchBar.value)
        fetch(`https://api.unsplash.com/search/photos/?query=${searchBar.value}/?client_id=tsqjORZl6xIKThgQVNB-jAsQvKNe1PthE-AlOVir-YktsqjORZl6xIKThgQVNB-jAsQvKNe1PthE-AlOVir-Yk`)
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
})