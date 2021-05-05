import PamSequences from "./PamSequences";

export const App = async () => {
  const pam_sequences = new PamSequences();
  const matches = await pam_sequences.checkGene("./assets/C.txt");
  for (const match of matches) {
    console.log(match);
  }
};
