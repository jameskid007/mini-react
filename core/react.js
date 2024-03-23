const createElement = function (tag, props, ...children) {
  let element = {
    type: tag,
    props: {
      ...props,
      children: children.map((o) => {
        return typeof o === 'string' ? createTextNode(o) : o
      })
    }
  }
  element.props.children.forEach(ele => {
    if (typeof ele === 'string') {
      ele = createTextNode(ele)
    } else {
      ele = createElement(ele)
    }
  });
  return element
}

const createTextNode = function (value) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: value,
      children: []
    }
  }
}

export default {
  createElement,
  createTextNode
}
