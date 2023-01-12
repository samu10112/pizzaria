var menuListArray=["Pizza Vegetariana", "Pizza Calabresa", "Pizza Quatro queijos", "Pizza Portuguesa", "Pizza Pepperoni"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[1] + '<br>'
}
document.getElementById("displaymenu").innerHTML = hymldata;

}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src=image/pizzaImg.png>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
 document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function addTop(){
    var item=document.getElementById("addItem").value;
     menuListArray.push(item);
    addItem();
}