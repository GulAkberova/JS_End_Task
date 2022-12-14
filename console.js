
function consolee(){
    instance.getAll("orders")
    .then((data)=>{
         data.forEach(element => {
            if(element.shipAddress.city=="London"){
                console.log(element.name)
            }
            // console.log(element.shipAddress.city="London")
         });

    })
}
consolee()