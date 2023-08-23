// using XMLHttpRequest()

var request = new XMLHttpRequest();

// open JSON file
request.open('GET','monsters.json');

// load information within a custom function thats called when page loads
request.onload = function()
{
    // reference to our root div
    const rootDiv = document.getElementById('root');
    // parse JSON data
    const data = JSON.parse(this.response);

    // if request and JSON parseing is sucessful
    if(request.status >= 200 && request.status < 400)
    {
        data.forEach(
            monsters => {
                const name = document.createElement('h1');
                name.textContent = monsters.monster;

                const location = document.createElement('h1')
                location.textContent = monsters.location;

                const movies = document.createElement('h1')
                location.textContent = monsters.movies;

                rootDiv.appendChild(name);
                rootDiv.appendChild(location);
                rootDiv.appendChild(movies);
            }
        );
    }
    else
    {
        const errorMessage = document.createElement('h1');
        errorMessage.textContent = "Data did not load";
        rootDiv.appendChild(errorMessage);

    }
}

request.send();