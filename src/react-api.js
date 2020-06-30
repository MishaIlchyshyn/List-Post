class ReactApi {
    addProps(props, result) {
        if (typeof props === 'object') {
            if (props.style) {
                for (let prop in props.style) {
                    result.style[prop] = props.style[prop];
                }
            }
            if (props.textContent) {
                result.appendChild(
                    document.createTextNode(props.textContent),
                );
            }
        }
    }

    addChildren(children, result) {
        if (!children) {
            return result;
        }

        if (Array.isArray(children)) {
            for (let child of children) {
                if (typeof child === 'string') {
                    result.appendChild(document.createTextNode(child));
                } else {
                    result.appendChild(child);
                }
            }
        } else if (typeof children === 'string') {
            result.appendChild(document.createTextNode(children));
        } else {
            result.appendChild(children);
        }
    }

    createElement(tag, props, children) {
        let result = document.createElement(tag);
    
        this.addProps(props, result);
    
        this.addChildren(children, result);
    
        return result;
    }
    
    
    render(element, container) {
        container.appendChild(element);
    }
}  

const React = new ReactApi();

export default React;
