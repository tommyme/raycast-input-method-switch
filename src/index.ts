import { showHUD, Clipboard } from "@raycast/api";

import { ChildProcess, exec } from 'child_process';

const runCommand = async (cmd: string) => {
  await exec(cmd, (error, stdout, stderr) => {
    return
  });
};

export default async function main() {
  const command = 'swim use `swim list | grep -v $(/usr/local/bin/swim list --current)`'; // 要执行的 shell 命令
  await runCommand(command);
  await showHUD("switched.");
}


