/*
@description
Creates a simple html element to inject into the header of a webpage.

@arg tagName: string      The name of the element (e.g. 'script')
@arg attributes: obj      A dictionary of the attributes to render
@arg twoSided: boolean    Whether two render a separate closing tag.
                          (e.g. <script><script> vs <script/>)
*/
function makeHTMLElement(tagName, attributes={}, twoSided=false) {
  let element = `<${tagName}`

  for (attr of Object.keys(attributes)) {
    element = `${element} ${attr}="${attributes[attr]}"`
  }

  if (twoSided) {
    element = `${element}></${tagName}>`
  } else {
    element = `${element}/>`
  }

  return element
}

/*
@description
Gets substitutions for HTMLWebpackPlugin
*/
module.exports.makeHTMLSubstitutions = function(assetPath, externals=[]) {
  return {
    title: 'Teaocha Design',
    externals: externals.reduce(
      (scripts, external) => (
        `${scripts}${makeHTMLElement('script', { src: external.src }, true)}`
      ), ''
    ),
    faviconLink: makeHTMLElement(
      'link',
      {
        rel: 'shortcut icon',
        href: `${assetPath}favicon.png`,
      }
    ),
    meta: {
      description: `
        Teaocha Design is the portfolio website of Matt Bilton.
        I specialise in full-stack web-development.
      `,
      keywords: `
        web-design, web, design, nodejs, react, redux, angular,
        angularjs, wordpress, website, freelance, front-end, back-end,
        full-stack, docker, python, microservices, portfolio
      `
    },
  }
}