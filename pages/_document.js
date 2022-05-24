import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Mint Omniverse NFT and Transfer between networks"
          />
          <link rel="icon" href="/static/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
          
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument