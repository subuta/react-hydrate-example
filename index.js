import ReactDOM from 'react-dom'
import App from './App'
import { html } from 'common-tags'

const body = document.querySelector('body')

body.innerHTML = html`
    <div id="app"><button>click me!</button></div>
`

const node = document.querySelector('#app')

ReactDOM.hydrate(<App />, node)