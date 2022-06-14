function Search() {
    var name = document.getElementById('name').value;
    fetch(`https://www.omdbapi.com/?t=${name}&apikey=1ea40174`)
        .then(function (res) {
            res.json().then(function (res) {
                if (res.Response == "False") {
                    ERROR();
                } else {
                    Diaplay(res);
                }
            })
        }).catch(function (err) {
            console.log("ERROR OCCUR");
        })
}
// -------------------------------alter nate--------------
// async function Search() {
//     var name = document.querySelector("#name").value;
//     var url = `https://www.omdbapi.com/?t=${name}&apikey=1ea40174`;
//     try {
//         var res = await fetch(url);
//         var data = await res.json();
//         console.log(data);
//         Diaplay(data);
//     } 
//     catch{
//         var div = document.createElement("div");
//         var title = document.createElement("p");
//         title.innerText = "Error Occur ";
//         var poster = document.createElement("img");
//         poster.src = "https://c.tenor.com/hwe3vkln0_UAAAAM/error-x-error.gif";

//         div.append(title, poster);
//         document.querySelector("#second").append(div);
//     }
// }

function Diaplay(data) {
    document.querySelector("#second").innerHTML="";
    document.querySelector("#second").innerHTML = "";
    var div = document.createElement("div");
            
    var title = document.createElement("p");
    title.innerText = "Title: " + data.Title;
    var poster = document.createElement("img");
    poster.src = data.Poster;
    var type = document.createElement("p");
    type.innerText = "Type: " + data.Type;
    var year = document.createElement("p");
    year.innerText = "Year: " + data.Year;
    var rating = document.createElement("p");
    rating.innerText = "Ratting: " + data.imdbRating;
    var recom = document.createElement("p");
    if (Number(data.imdbRating) > 8) {
        recom.innerText = "RECOMMENDED";
        recom.style.color = "black";
        recom.style.backgroundColor = "yellow";
    } else {
        recom.innerText = "";
    }
    
    var div = document.createElement("div");
    div.append(title, poster, type, year, rating, recom);
    document.querySelector("#second").append(div);
}
function ERROR() {
    document.querySelector("#second").innerHTML="";
    var div = document.createElement("div");
    var title = document.createElement("p");
    title.innerText = "Error Occur ";
    var poster = document.createElement("img");
    poster.src = "https://c.tenor.com/hwe3vkln0_UAAAAM/error-x-error.gif";
    div.append(title, poster);
    document.querySelector("#second").append(div);
}