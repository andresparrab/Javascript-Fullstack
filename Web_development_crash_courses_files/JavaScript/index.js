{
  let childrenNodes = document.childNodes[1];
  console.log(childrenNodes);

  let myButton = document.getElementById("confirmButton");
  myButton.disabled = false;

  let orderList = document.childNodes[1].childNodes[2].childNodes[1];
  console.log(orderList);
  console.log(orderList.parentNode);
  console.log(orderList.nextSibling);

  let getOrderListBtTag = document.getElementsByTagName("ol");
  console.log(getOrderListBtTag);

  getOrderListBtTag[0].onmouseover = function () {
    console.log("mouseOOOVER");
  };

  let getOrderListBtTagName = document.getElementsByTagName("li");
  console.log(getOrderListBtTagName[0].childNodes[0].nodeType);

  if (getOrderListBtTagName[0].childNodes[0].nodeType === 1) {
    console.log("is an element");
  } else if (getOrderListBtTagName[0].childNodes[0].nodeType === 3) {
    console.log("This is a text");
  }

  let parag = document.getElementsByTagName("p");
  console.log(parag);
  console.log((parag[0].childNodes[0].childNodes[0].nodeValue = "awsome"));

  myButton.onclick = function () {
    let newItem = document.createElement("li");

    newItem.appendChild(
      document.createTextNode(document.getElementById("inputField").value)
    );
    myorderlist = document.getElementById("orderlist");
    console.log(myorderlist);
    myorderlist.appendChild(newItem);
  };
}
