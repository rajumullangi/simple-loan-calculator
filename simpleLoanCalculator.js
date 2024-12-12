function monthlyPay(){
    const loanAmount=document.getElementById("amount").value;
    const intrestE=document.getElementById("rate").value;
    const monthsToPay=document.getElementById("months").value;
    const intrest=(loanAmount*(intrestE*0.01))/monthsToPay;
    const mp=(loanAmount/monthsToPay+intrest).toFixed(2);
    document.getElementById("monthlyPayer").innerHTML="Monthly Payment: "+mp;
    if(loanAmount>500000){
        window.alert(`Value Should be less then equals 500000`)
    
    }
    if(intrestE>10){
        window.alert(`Intrest Rate Shoulb be less then equal to 10`)
    }
    if(monthsToPay>48){
        window.alert(`Months Shoulb be less then equal to 48`)
    }
    
    
}
