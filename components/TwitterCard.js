import React from 'react'
import { hot } from 'react-hot-loader'
import fetch from 'isomorphic-unfetch'

let TwitterCard = hot(module)((props) => {
  const {
    meta,
    links
  } = props

  const thumbnail = links.thumbnail[0]

  return (
    <div>
      <h3>{meta.title}</h3>
      <p>{meta.description}</p>

      <img src={thumbnail.href} alt="" />
    </div>
  )
})

TwitterCard.getInitialProps = async () => {
  const uri = 'https://twitter.com/Interior/status/463440424141459456'

  const data = await fetch(`http://localhost:8061/iframely?uri=${uri}`).then((res) => {
    return res.json()
  })

  return {
    ...data
  }
}

export default TwitterCard