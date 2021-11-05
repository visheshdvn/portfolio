import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html className="dark" lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

                    {/* fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Raleway:wght@600;700&display=swap" rel="stylesheet"></link>
                    {/* <link rel="shortcut icon" href="/logo/FavIcon2.png" /> */}

                </Head>
                <body className="lg:pl-36">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
