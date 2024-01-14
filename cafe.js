
/*function orderReadyMessage(customerName){
    console.log("เครื่องดื่มของคุณ " + customerName + " ได้รับแล้วครับ");
}
orderReadyMessage("Ink");
orderReadyMessage("Fon");*/

function sayWelcome(customerName,){
    console.log("Welcome " + customerName);
}

sayWelcome("Ink");
sayWelcome("Fon");

function orderReadyMessage(menu, customerName){
    console.log(menu + "ของคุณ " + customerName + " ได้รับแล้วครับ");
}

orderReadyMessage("ลาเต้","Ink");

orderReadyMessage("มัทฉะ","Fon");