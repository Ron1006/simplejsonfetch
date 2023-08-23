// Make a fetch request to load monster.json
fetch('monsters.json')
// check if data received from request is readable translate from JSON to JS readable content
.then(response => response.json())
// Do something with the data
.then(
    // variable function monsters
    monsters => {
        const rootDiv = document.getElementById("root");

        // loop through JSON data and display within HTML
        for(let i = 0; i < monsters.length; i ++)
        {
            const HTML =  document.createElement('div');
            HTML.innerHTML = `
            $<strong>Monster: </strong> ${monsters[i].monster}
            <br>
            $<strong>Location: </strong> ${monsters[i].location}
            <br>
            $<strong>Movies:</strong> ${monsters[i].movies}
            <hr>
            `;

            rootDiv.appendChild(HTML);
        }
    }

)
// any errors with the above process deal with it here
.catch(error => console.error(error))