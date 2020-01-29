import React from 'react';

const Coockie = (props) =>{
    let name = props
    console.log(name)
    let cookieValue = null;
      if (document.cookie) {
          let cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
              let cookie = cookies[i].trim();
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
}

export {Coockie}