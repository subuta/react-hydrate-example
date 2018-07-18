import ReactDOM from 'react-dom'
import App from './App'
import { html } from 'common-tags'

const body = document.querySelector('body')

body.innerHTML = html`
    <div id="app">
      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote>
    </div>
`

const head = document.querySelector('head')

const twScript = document.createElement('script')

twScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
twScript.setAttribute('async', true)
twScript.setAttribute('char-set', 'utf-8')

head.appendChild(twScript)

const node = document.querySelector('#app')

// ReactDOM.hydrate(<App />, node)