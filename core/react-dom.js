function createRoot(container) {
  return {
    render(vDom) {
      createElement(vDom, container)
    }
  }
}

function createElement(vDom, container) {
  if (vDom.type === 'TEXT_ELEMENT') {
    createTextNode(vDom.props.nodeValue, container)
  } else {
    const dom = document.createElement(vDom.type)
    for (let key in vDom.props) {
      if (key !== 'children') {
        dom[key] = vDom.props[key]
      }
    }
    vDom.props.children.forEach(element => {
      createElement(element, dom)
    });
    container.append(dom)
  }
}

function createTextNode(val, dom) {
  let node = document.createTextNode(val)
  dom.append(node)
}

export { createRoot }
