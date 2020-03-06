var allJobs =[];

$(document).ready(function() {
    $("#holi").hide();
});

let button = document.getElementById("boton");
button.addEventListener("click", function(event){
    window.location.href = "/"
});



let form = document.getElementById("formulario");
document.addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById('list-tab').innerHTML = "";
    document.getElementById('list-home').innerHTML = "";
    let localizacion = document.querySelector("#localizacion").value;
    console.log(localizacion)
    getJobs(localizacion)
});

const getJobs = async (localizacion)=>{
    let url="https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?" + "location=" + localizacion;
    let response = await axios.get(url);
    console.log(response.data);
    let jobs = response.data;
    

    allJobs=jobs;
    jobs.forEach((job, index)=>{
        
        let div = document.getElementById("list-tab");

        let trabajo = `<a class="list-group-item list-group-item-action" id="holi" data-toggle="list" href="#list-home" role="tab" aria-controls="home"  onclick="showDescription(${index})">${job.title}</a>`
div.innerHTML+=trabajo

})
}
function showDescription(index){    
    let dov = document.getElementById("list-home");   
    dov.innerHTML=""
    let trebajo = `<div class="tab-pane fade show" id="list-home" role="tabpanel" aria-labelledby="holi">${allJobs[index].description}</div>`
    dov.innerHTML+=trebajo
}

// Para que las descripciones sean dinamicas, se agrego una variable global (var) y una busqueda 


