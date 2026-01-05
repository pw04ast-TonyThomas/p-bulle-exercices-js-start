//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = ''
  String(dna).split('').forEach(element => {
    if (element === 'G') rna += 'C'
    else if (element === 'C') rna += 'G'
    else if (element === 'T') rna += 'A'
    else if (element === 'A') rna += 'U'
  });
  return rna
};
