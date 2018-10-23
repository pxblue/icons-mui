const reactDomTemplate = (code, config, state) => {
    let result = `import React from 'react';\n`
    result += `import createSvgIcon from '@material-ui/icons/utils/createSvgIcon';\n\n`
    result += `export default createSvgIcon(\n`
    result += `<React.Fragment>${code}</React.Fragment>\n`
    result += `, '${state.componentName}');`

    return result
}
module.exports = reactDomTemplate
  