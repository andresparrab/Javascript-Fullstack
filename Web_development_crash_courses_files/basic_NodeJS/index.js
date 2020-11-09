const http = require("http");
const path = require("path");
const fs = require("fs");

const server = new http.createServer((req, res) => {
  // Build fila path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Get the extension of the file
  let extName = path.extname(filePath);

  //Initial content type
  let contentType = "text/html";

  // Check ext ans set type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //READ file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "not_found.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });

  console.log(filePath);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// THIS IS FOR LOADING HTML FILES
// const server = new http.createServer((req, res) => {
//     if (req.url === "/about") {
//               fs.readFile(path.join(__dirname, 'public', 'about.html'),
//               (err, content)=>{
//                   if (err) throw err;
//                       res.writeHead(200, {'Content-Type': 'text/html'});
//                       res.end(content)
//               })
//     }
//   });

// THIS IS FOR LOADING JSON FILES
// const server = new http.createServer((req, res) => {
//     if (req.url === "/api/users/") {
//            const users =[
//                { name: "Bob Smith", age: 50},
//                {name: "John Dow", age: 30}
//                   ]
//                       res.writeHead(200, {'Content-Type': 'application/json'});
//                       res.end(content)
//               })
//     }
//   });