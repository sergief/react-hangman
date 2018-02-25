
export const selectWord = (elem) => {
  return {
  type: 'WORD_SELECTED',
  word: elem.word,
  definition: elem.definition
}}

export const selectLetter = (letter) =>{
  return {
  type: 'LETTER_SELECTED',
  letter: letter
}}
