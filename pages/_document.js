import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    const a = 0
    return (
      <html>
        <Head>
          <title>YWC</title>
          {this.props.styleTags}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" async />
          <link rel="stylesheet" href="/static/css/style.css" async />
          <link rel="stylesheet" href="/static/css/animate.css" async />
          <link
            rel="stylesheet"
            href="/static/font-awesome/css/font-awesome.min.css"
            async
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
