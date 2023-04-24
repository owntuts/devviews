---
sidebar_position: 1000
sidebar_label: Nodejs Child Process
title: Nodejs Child Process
tags:
  - Nodejs Knowledge
---

<!-- https://brandfolder.com/workbench/extract-text-from-image -->
<!-- ![for root](/img/interviews/angular/forroot.png) -->

<details open>
<summary><h5>`spawn` vs `fork` vs `execFile` vs `exec`</h5></summary>

`spawn`, `fork`, `execFile` and `exec` are four ways to ***run another program (child process) from your Node.js program (parent process)***. They are different in ***how they run the other program and how they communicate with it***.


#### Here is a table that summarizes some of the key differences between them:

| Method | Shell | Streaming | Buffering | IPC |
|--------|-------|-----------|-----------|-----|
| spawn  | No    | Yes       | No        | No  |
| fork   | No    | Yes       | No        | Yes |
| execFile| No   | No        | Yes       | No  |
| exec   | Yes   | No        | Yes       | No  |

- inter-process communication (**IPC**) channel established that allows sending messages between parent and child
- **Buffering**: means waiting for the other program to finish (buferring) and then gives you all the data it produced
- **Streaming**: Sending data in chunks
- **Shell**: (a shell is a program that lets you type commands and run other programs). Using a shell means running commands via shell program.

---

#### Details & Examples

- `spawn`: runs the other program directly without using a shell. It sends and receives data from the other program as it runs. It is good for running programs that run for a long time and produce a lot of data.

**Example**: runs the `ls` command directly ***without using a shell*** and ***streams the output*** to the console

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

```

- `fork`: Similar but the biggest difference between spawn and fork is that a ***communication channel*** is established to the child process when using fork, that lets you send messages back and forth. It is good for running Node.js programs that work together.

**Example**: runs a Node.js module that executes the `ls` command using a shell and ***sends (streams) the output back to the parent process using IPC***

```js
// child.js
const { exec } = require('child_process');
exec('ls -lh /usr', (error, stdout, stderr) => {
  if (error) {
    process.send({ error });
  } else {
    process.send({ stdout });
  }
});

// parent.js
const { fork } = require('child_process');
const child = fork('./child.js');

child.on('message', (message) => {
  if (message.error) {
    console.error(`stderr: ${message.error}`);
  } else {
    console.log(`stdout: ${message.stdout}`);
  }
});

```

- `execFile`: runs the other program directly without using a shell It waits for the other program to finish and then gives you all the data it produced. It is good for running programs that finish quickly and produce a small amount of data.

**Example**: runs the `ls` command directly ***without using a shell*** and ***buffers the outpu***t to the callback function.

```js
const { execFile } = require('child_process');
execFile('ls', ['-lh', '/usr'], (error, stdout, stderr) => {
  if (error) {
    console.error(`stderr: ${stderr}`);
    throw error;
  }
  console.log(`stdout: ${stdout}`);
});

```

- `exec`: runs the other program ***using a shell***. It waits for the other program to finish and then gives you all the data it produced. It is good for running programs that need a shell to work properly.

**Example**: runs the `ls` command ***using a shell*** and ***buffers the output*** to the callback function.

```js
const { exec } = require('child_process');
exec('ls -lh /usr', (error, stdout, stderr) => {
  if (error) {
    console.error(`stderr: ${stderr}`);
    throw error;
  }
  console.log(`stdout: ${stdout}`);
});

```

</details>
