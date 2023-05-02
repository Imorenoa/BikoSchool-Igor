import { createServer } from "http";
import chalk from "chalk";

const myString: string = "BikoSchool";

const hostname = "127.0.0.1";

const port: number = 3000;

const server = createServer((req, res) => {
  console.log(chalk.blue("Peticion realizada"));
  console.log(res.statusCode);
  res.end(myString);
});

server.listen(port, hostname, () => {
  console.log(chalk.green(`Server running at http://${hostname}:${port}/`));
});
