import React, { useRef } from 'react';
import Luna from './assets/moon.jpg';
import Terra from './assets/land.png';
import Paratroopers from './assets/paratroopers.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

  const ref = useRef();

  return (
    <>
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${Luna})`,
          }}
          className='bg-contain bg-center'
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${Terra})`,
          }}
          className='bg-cover'
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
          className='text-center'
        >
          <img src={Paratroopers} alt="task force" className='m-auto w-full sm:w-[50%]' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2 className='text-gray-300 text-center text-4xl sm:text-8xl'>
            Bravo Six, going dark.
          </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 className='text-gray-300 text-center text-5xl sm:text-6xl'>
            Roger that, Actual. Hold orbit.
          </h2>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
