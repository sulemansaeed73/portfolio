import React from 'react'

export default function NameSeperator({name}:{name:string}) {
    let splitedName = name.split(" ");

    return (
    <h1><span>{splitedName[0].charAt(0)}</span>{splitedName[0].substring(1)} <span>{splitedName[1].charAt(0)}</span>{splitedName[1].substring(1)}</h1>

    )
}
