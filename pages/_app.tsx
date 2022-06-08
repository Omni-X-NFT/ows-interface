import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect, ComponentType} from 'react'
import dynamic from 'next/dynamic'

// const AppWithoutSSR:ComponentType<{}> = dynamic(() => import('./index'), {
//   ssr: false,
// })
function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState<boolean>(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      // <AppWithoutSSR>
        <Component {...pageProps} />
    // </AppWithoutSSR>
    );
  }
}

export default MyApp
