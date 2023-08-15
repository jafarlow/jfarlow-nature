// docs for this plugin: https://github.com/remarkablemark/html-react-parser

import parse from 'html-react-parser'

// italicizes any text between parentheses in strings passed into this function
export default function scientificRef(str:string) {
  return parse(str.replace(/\(/g, '<i>(').replace(/\)/g,")</i>"))
}
