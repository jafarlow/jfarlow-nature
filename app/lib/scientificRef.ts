// docs for this plugin: https://github.com/remarkablemark/html-react-parser

import parse from 'html-react-parser'

export default function scientificRef(str:string) {
  return parse(str.replace(/\(/g, '<i>(').replace(/\)/g,")</i>"))
}
