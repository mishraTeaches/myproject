let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", bttonClickHandler);
function bttonClickHandler() {
    const xhr = new XMLHttpRequest();
    // xhr.open("GET", "ishu.txt", true);
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhr.getResponseHeader("Content-type", "application/json");
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
        }
        else {
            console.log("else not");
        }
    };
    xhr.onreadystatechange = function () {
        console.log("ready state", xhr.readyState);
    };
    xhr.onprogress = function () {
        console.log("in progress");
    };
    params = `
  {"name":"test","salary":"123","age":"23"}
  `;
    xhr.send(params);
}
//# sourceMappingURL=ajax.js.map