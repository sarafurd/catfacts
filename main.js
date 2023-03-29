document.querySelector('button').addEventListener('click', getFact)

function getFact() {


    fetch('https://meowfacts.herokuapp.com')
        .then(res => res.json())
        .then(response => {
            console.log(response);
            document.querySelector("h2").innerText = response.data;
        })

    .catch(err => {
        console.log(`error ${err}`)
    });
}