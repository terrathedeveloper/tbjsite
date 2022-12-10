document.querySelector('form').addEventListener('submit',evt=>{
    let formData = new FormData(evt.target);
    let userObj = Object.fromEntries(formData);
    evt.preventDefault();
    console.log(userObj);
    axios.post('http://localhost:5001/thebigjokerqa/us-central1/signUp',userObj).then(console.log);
// https://us-central1-thebigjokerqa.cloudfunctions.net/signUp'
})