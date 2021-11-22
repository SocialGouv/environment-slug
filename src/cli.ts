import { Command, flags } from "@oclif/command";

import { generate } from ".";

class EnvSlug extends Command {
  static description =
    "Generate slug for K8S namespace or DB name from git branch";

  static flags = {
    help: flags.help({ char: "h" }),
    version: flags.version({ char: "v" }),
  };

  static args = [{ name: "project-branch", required: true }];

  // eslint-disable-next-line @typescript-eslint/require-await
  async run(): Promise<void> {
    const { args } = this.parse(EnvSlug);
    const projectBranch: string = args["project-branch"];
    this.log(generate(projectBranch));
  }
}

export default EnvSlug;
