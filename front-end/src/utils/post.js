import React, { Component, Redirect} from 'react';
import {Coockie} from './pegarCookie';



export async function Post (url,dados) 
{
    let csrftoken = Coockie('csrftoken');
    const res = await fetch(url,{
                headers: {"X-CSRFToken": csrftoken},
                method: "POST",
                body: dados
                });
    const json = await res.json();
    return json;
}
export default {Post};

