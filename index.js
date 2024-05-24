var res = fetch("https://restcountries.com/v3.1/all")
res.then((data)=>{
    return data.json()
}).then((data1)=>foo(data1)).catch((error)=>console.log(error))

var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        var col=document.createElement("div");
        col.className="col-lg-4";
        col.innerHTML =`<div class="card-deck">
        <div class="card">
        <p class="card-text"><small class="text-muted"><center>${data1[i].name.common}</center></small></p>  
        <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">Capital: ${data1[i].capital}</p>
            <p class="card-text">Region: ${data1[i].region}</p>
            <p class="card-text">Country code: ${data1[i].cca3}</p>
            <a href="#" class="btn btn-primary">Click for weather</a>
          </div>
        </div>`
      
      
      row.append(col);
      container.append(row);
      document.body.append(container);
    }
}