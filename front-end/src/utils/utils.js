import React from 'react';

const filhoProps = (props) =>{
    return React.Children.map(props.children, filho =>{
        return React.cloneElement(filho, {...props});
    })
}

export {filhoProps}