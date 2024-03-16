import React from 'react'

export default function Home({title}:{title:string}) {
    return (
        <section id="home">
        <div className="home container">
          <div>
            <h1>Hello,<span /></h1>
            <h1>I am<span /></h1>
            <h1>{title}<span></span></h1>
            <a href="#projects" type="button" className="cta">Portfolio</a>
          </div>
        </div>
      </section>
    )
}
