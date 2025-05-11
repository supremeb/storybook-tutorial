import '../src/styles/main.css'
import '../src/styles/tokens.css'
import '../components/Alert/Alert.css'
import '../components/Button/Button.css'
import '../components/Card/Card.css'
import '../components/Modal/Modal.css'
import '../components/Avatar/Avatar.css'
import '../components/Badge/Badge.css'
import '../components/Input/Input.css'
import '../components/Tooltip/Tooltip.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
