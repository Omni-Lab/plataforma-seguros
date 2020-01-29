import React, { Component, Redirect} from 'react';
import {Coockie} from './pegarCookie';



export async function Get (url) 
{
    let csrftoken = Coockie('csrftoken');
    const res = await fetch(url,{
                headers: {"X-CSRFToken": csrftoken},
                method: "GET",
                });
    const json = await res.json();
    return json;
}
export default {Get};
