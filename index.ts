import { createServer, Server, IncomingMessage, ServerResponse } from 'http'
import { totalmem, freemem, cpuCount, cpuUsage } from 'os-utils'
import * as fs from 'fs';

const chalk = require('chalk')

const port: number = 3001

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(`${chalk.bgBlue(req.method)} - ${chalk.blue(req.url)}`)

  cpuUsage(cpuUsagePercentage => {
    const data = JSON.stringify({
      totalmem: totalmem(),
      freemem: freemem(),
      cpuCount: cpuCount(),
      cpuUsagePercentage
    });
    fs.writeFile('cpu_usage.json', data, err => {
      if (err) throw err;
      console.log('CPU usage written to file.');
    });
    res.end(data);
  });
})


server.listen(port, () => console.log(chalk.black.bgGreen(`Server listening at port ${port}`)))