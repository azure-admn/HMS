import '../styles/custom.global.scss'

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
  </div>
}
export default MyApp
