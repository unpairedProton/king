import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import gsap from 'gsap';

const Loading = () => {
  const loadpage = useRef(null);
  const loadBar = useRef(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const tl = useRef(gsap.timeline()); 

  useGSAP(() => {
    const timeline = tl.current;

    timeline.to(loadBar.current, {
      width: '100%',
      x: 0,
      duration: 4,
      ease: 'power1.out',
    })
    .to(
      loadBar.current,
      {
        x: '100%',
        duration: 1.2,
        ease: 'power1.out',
      },
      'a'
    )
    .to(
      loadpage.current,
      {
        y: '-100%',
        duration: 1.2,
        ease: 'power2.out',
        onComplete: () => setIsAnimationComplete(true)
      },
      'a'
    );

    timeline.restart();
  }, []);

  if (isAnimationComplete) return null;

  return (
    <>
      <div ref={loadpage} className='loadingPage absolute z-10 w-full h-full bg-zinc-800'></div>
      <div ref={loadBar} className="loadingBar fixed top-0 z-20 w-0 h-1 bg-zinc-100"></div>
    </>
  );
};

export default Loading;