import React from 'react'
import { hot } from 'react-hot-loader'
import fetch from 'isomorphic-unfetch'

import {
  compose,
  withHandlers
} from 'recompose'

const enhance = compose(
  hot(module),
  withHandlers({
    onClick: () => (e) => console.log('clicked!', e)
  })
)

let TwitterCard = enhance((props) => {
  const {
    onClick,
    meta,
    links
  } = props

  const thumbnail = links.thumbnail[0]

  return (
    <div>
      <h3>{meta.title}</h3>
      <p>{meta.description}</p>

      <img src={thumbnail.href}
           alt=""
           onClick={onClick}
      />
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