var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
 xhr.onload = function(){
     var t =JSON.parse(this.response);
     for(i=0;i<250;i++){
        console.log(t[i].flag);
    }
    
    };
  xhr.onerror = function () {
      console.log("Error", this.statusText);
    };
   xhr.send();
   
