const puppeteer = require('puppeteer')
const {html} = require('common-tags')

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.setContent(html`
      <!DOCTYPE html>
      <html>
        <head>
  
        </head>
  
        <body>
          <div id="app">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better than this one over <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a> <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of the Interior (@Interior) <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5, 2014</a></blockquote>
          </div>
        </body>
      </html>
  `)

  await page.addScriptTag({url: 'https://platform.twitter.com/widgets.js'})

  page.on('console', msg => console.log('PAGE LOG:', msg.text()))

  const data = await page.evaluate(() => new Promise((resolve) => {
    window.twttr.events.bind('rendered', (event) => {
      console.log('Created widget', event.target.id)

      const node = document.querySelector(`#${event.target.id}`)
      const shadowRootHTML = node.shadowRoot.innerHTML

      // clone host node of Twitter card.
      const cloned = node.cloneNode()
      // inject serialized shadowRoot to parent.
      cloned.innerHTML = shadowRootHTML

      const rendered = cloned.outerHTML
      resolve(rendered)
    })
  }))

  await page.screenshot({path: 'example.png'})

  console.log('=========')
  console.log(data)
  console.log('=========')

  console.log('done!', new Date())

  await browser.close()
}

main()