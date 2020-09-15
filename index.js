const url = 'https://polisen.se/api/events?locationname=Stockholm;';
const categoriesToDisplay = ['Date', 'Type', 'Location'];

    function getData(asset = 'Stockholm') {
         return fetch(url)
        .then(response => response.json())
        .then(response => renderTable(response))
        }
    




    function onClick() {
        let asset = document.getElementById("textInputCategory").value;
        
        getData(asset)
        

        }

        
        

    function renderTable(response) {
        var tableBody = document.querySelector("#crimeTable");
        var crimes = response;
        tableBody.innerHTML = "";
        console.log(response);
       
    
    


        crimes.forEach(crime => {
            let tableRow = document.createElement("tr");
            let crimeTypeDate = document.createElement("td");
            crimeTypeDate.innerHTML = new Date(crime.datetime).toDateString();

            let crimeTypeId = document.createElement("td");
            crimeTypeId.innerHTML = crime.type;

            let crimeTypeLocation = document.createElement("td");
            crimeTypeLocation.innerHTML = crime.location.name

            tableRow.appendChild(crimeTypeId);
            tableRow.appendChild(crimeTypeDate);
            tableRow.appendChild(crimeTypeLocation);
            tableBody.appendChild(tableRow);

            });
        
        }

        
renderTable(response);
