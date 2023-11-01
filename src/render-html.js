var http = require("http"); // Impor modul http server
var fs = require("fs"); // Import modul FS render file HTML

function renderHtml(path, response) { // memanggil file html
    fs.readFile(path, null, function (error,data) { //membaca menangani file html
        if (error){
            response.writeHead(404);
            response.write("File tidak ditemukan");
        } else{
            response.write(data);
        }
        response.end();
    });
}
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Cotent-type": "text/html"});
    renderHtml("./index.html", response); //alamat port file html
});
server.listen(3000);
console.log("server berjalan lancar");