/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){

  if(document.getElementById("same").checked == true){
    var shippingName = document.getElementById("shippingName").value;
    var shippingZip = document.getElementById("shippingZip").value;
    
    document.getElementById("billingName").value = shippingName;
    document.getElementById("billingZip").value = shippingZip;
  }
  
  else{
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";   
  }

  if(document.getElementById("same").checked == false){
    document.getElementById("billingName").removeAttribute("required");
    document.getElementById("billingZip").removeAttribute("required");
  }

}