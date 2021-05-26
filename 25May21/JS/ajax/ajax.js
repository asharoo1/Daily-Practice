console.log("ajax check");

let fetchBtn = document.getElementById('demo1');
fetchBtn.addEventListener('click', buttonClickHandler);


// function buttonClickHandler(){

//     // instatanise the xhr object
//     const xhr = new XMLHttpRequest();

   
//     // Post Request
//     xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    
//     // xhr.setRequestHeader("Content-type", "text/plain");


//     // On Progress(optional)
//     xhr.onprogress = function(){
//         console.log("On Progress");
//     }

//      xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           console.log(xhr.readyState);
//         }
//     }

//     // what to do when response is ready
//     xhr.onload = function(){
//         console.log(this.responseText);
//     }

//     // send the request
//     xhr.send();
//     // xhr.send("Ashar Ansari");

//     console.log("Completed.")
// }

function buttonClickHandler(){
    
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            
            console.log(this.getAllResponseHeaders('Last-Modified'));
        }
    }
    xhr.open("GET", "info.txt", true);
    xhr.send();
}