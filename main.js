// const http = require("http");
// const fs = require("fs/promises");
// const path = require("path");

// const find = async function foo() {
//   const rootDir = path.resolve(__dirname);
//   const files = await fs.readdir(rootDir);
//   if (files.includes()) {
//     console.log("contain");
//   } else {
//     console.log("does not contain");
//   }
// };
// find();
// const server = http.createServer((req, res) => {
//   if (req.url === "/api") {
//     const data = [
//       {
//         name: "luka",
//         age: 20,
//         isTeenager: false,
//       },
//       {
//         name: "olegi",
//         age: 5,
//         isTeenager: false,
//       },
//       {
//         name: "aleksi",
//         age: 14,
//         isTeenager: true,
//       },
//     ];
//     res.setHeader("content-type", "application/json");
//     res.write(JSON.stringify(data));
//     return res.end();
//   }
//   res.write("hello");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("server running");
// });

// შემეძლო ერთში დამეწერა ვიცი მარა უკეთ დასამახსოვრებლად

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/html") {
//     res.setHeader("Content-Type", "text/html");
//     res.write(`
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Simple HTML Table</title>
//         <style>
//           table {
//             width: 50%;
//             border-collapse: collapse;
//           }
//           th, td {
//             border: 1px solid black;
//             padding: 8px;
//             text-align: left;
//           }
//           th {
//             background-color: #f2f2f2;
//           }
//         </style>
//       </head>
//       <body>
//         <h1>Simple HTML Table</h1>
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Is Teenager</th>
//           </tr>
//           <tr>
//             <td>Luka</td>
//             <td>20</td>
//             <td>No</td>
//           </tr>
//           <tr>
//             <td>Olegi</td>
//             <td>5</td>
//             <td>No</td>
//           </tr>
//           <tr>
//             <td>Aleksi</td>
//             <td>14</td>
//             <td>Yes</td>
//           </tr>
//         </table>
//       </body>
//       </html>
//     `);
//     return res.end();
//   } else if (req.url === "/random") {
//     const randomNumber = Math.random() * 10;
//     res.setHeader("Content-Type", "text/plain");
//     res.write(number.toString());
//     return res.end();
//   }

//   res.setHeader("Content-Type", "text/plain");
//   res.write("hello2");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
