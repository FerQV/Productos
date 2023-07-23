
function getData(){
      let promesa = fetch("https://fakestoreapi.com/products/", {
          method:"GET"
      });
      promesa.then( (response)=>{
          response.json().then()
          .then((data)=>{
            createCards(data);
          })
          .catch (
            (error)=>{console.error("Problema en el json", error)
          });
      })
      .catch( (error)=>{
        console.error(error, "Ocurrió un error en la solicitud");
      });

} // getData

getData()

let mainProds = document.getElementById("mainProds")
function createCards(prods){
  prods.forEach(prod =>{
    mainProds.insertAdjacentHTML("beforeend", 
    `<div class="card mb-3" style="max-width: 540px; padding:25px; border-radius:20px">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${prod.image}" class="img-fluid rounded-start" alt="${prod.description}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${prod.title}</h5>
        <p class="card-text"><strong>${prod.category}</strong></p>
        <p class="card-text">${prod.description.slice(0,105)} ...</p>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${prod.id}">More info</button>
      </div>
    </div>
<!-- Modal -->
<div class="modal" id="exampleModal_${prod.id}" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${prod.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      ${prod.description}
      <p class="text-end"><strong> $ ${prod.price} USD </strong></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      
  </div>
</div>
`)
  });
}



//function createCards(data){
  //  data.forEach(producto => {
    //  console.log(producto.id, producto.title);
    //});
//}

