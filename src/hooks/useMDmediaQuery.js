import {useState,  useEffect} from 'react'

const useMDmediaQuery = () => {
    const [isMD, setIsMD] = useState(false);

    useEffect(() => {
        const value = '(min-width: 900px)'
        const mediaQuery = window.matchMedia(value);
        setIsMD(mediaQuery.matches)
        mediaQuery.addListener(e => setIsMD(e.matches));

        return () => mediaQuery.removeListener(e => setIsMD(e.matches));
    },[])

  return isMD;
}

export default useMDmediaQuery