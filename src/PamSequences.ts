import FileParser from "./FileParser";

export default class PamSequences {
  sequences!: string[];
  regex!: RegExp;
  constructor() {
    this.init();
  }
  async init() {
    const fp = new FileParser("./assets/pam_sequences.txt");
    await fp.scanFile();
    this.sequences = fp.getLines();
    this.regex = new RegExp(this.sequences.join("|"), "g");
  }
  async checkGene(path: string) {
    const fp = new FileParser(path);
    const gene = await fp.scanFile();
    return gene.matchAll(this.regex);
  }
}
