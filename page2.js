let tbody = document.getElementById("tbody");
let companyName = document.getElementById("companyName");
let contactName = document.getElementById("contactName");
let contactTitle = document.getElementById("contactTitle");
let update_id = [];
function page() {
  tbody.innerHTML = "";
  instance.getAll("suppliers").then((data) => {
    //    console.log(data)
    data.forEach((element) => {
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      td1.innerText = element.companyName;

      let td2 = document.createElement("td");
      td2.innerText = element.contactName;

      let td3 = document.createElement("td");
      td3.innerText = element.contactTitle;

      let td4 = document.createElement("td");
      //   td4.innerText = element.address.region;

      let td_update = document.createElement("td");
      let update = document.createElement("button");
      update.innerText = "Update";
      td_update.appendChild(update);
      update.addEventListener("click", (e) => {
        update_id.push(element.id);
        console.log(update_id);

        let row = e.target.parentElement.parentElement;
        companyName.value = row.children[0].innerText;
        contactName.value = row.children[1].innerText;
        contactTitle.value = row.children[2].innerText;
      });

      tr.append(td1, td2, td3, td4, td_update);
      tbody.append(tr);
    });
  });
}
page();

const change = () => {
  let id = update_id;
  let company = companyName.value;
  let contact = contactName.value;
  let contactTittle = contactTitle.value;
  console.log(company);
  axios
    .put(`https://northwind.vercel.app/api/suppliers/${id}`, {
      companyName: company,
      contactName: contact,
      contactTitle: contactTittle,
    })
    .then((res) => {
      console.log(res);
      page(res.data);
      companyName.value = " ";
      contactName.value = " ";
      contactTitle.value = " ";
      update_id.pop();
    });
};
change();
