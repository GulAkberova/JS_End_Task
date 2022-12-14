let tbody = document.getElementById("tbody");

function load() {
  // instance.getAll("suppliers").then((data) => {
  //   console.log(data);
  // });
  instance.getAll("orders").then((data) =>{
    console.log(data)
   let cvb= data.sort(function(a,b){
      return new Date(b.orderDate)-new Date(a.orderDate)
    })
    

     cvb.forEach(element=>{
      let tr=document.createElement('tr')
      let td1=document.createElement('td')
      td1.innerText=element.customerId
      let td2=document.createElement('td')
      td2.innerText=element.employeeId
      let td3=document.createElement('td')
      td3.innerText=element.orderDate
      tr.append(td1,td2,td3)
      tbody.append(tr)
    })

  }
  
  );
 
}

load();
