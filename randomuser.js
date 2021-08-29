
document.getElementById('btn').addEventListener('click', async ()=>{
  document.getElementById('spinner').classList.remove('d-none');
      const contain = document.getElementById('container');
    contain.textContent = '';
  const res = await fetch(
    'https://randomuser.me/api/?results=' + `${Math.floor(Math.random() * 2)}`
  );
  const data = await res.json();
  showdata(data.results);
  console.log();
   document.getElementById('spinner').classList.add('d-none');


})

const showdata=(users)=>{
 const contain=document.getElementById('container')
 contain.textContent=""
  
 console.log(contain)
    users.forEach( user=>{
       ;
      const div=document.createElement('div')
      const { city, coordinates, timezone, street } = user.location;
       div.innerHTML = `
            <div class="card text-center w-25 mx-auto mt-5 border-primary bg-info">
            <img src="${user.picture.thumbnail}" class="card-img-top  text-center rounded-circle" alt="...">
            <div class="card-body">
                <h5 class="card-title"> City ${city}</h5>
                <p class="card-text"> coordinates ${coordinates.latitude}</p>
                <h6>Time :${timezone.offset}  ${timezone.description}  </h6>
                <h6>street :${street.number}  ${street.name}  </h6>
            </div>
            </div>

       `;
    
       console.log(user)
    div.classList.add('col',"text-center")
    contain.appendChild(div)
    })

}