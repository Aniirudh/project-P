import React,{useRef,useEffect} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import createGlobe from "cobe";

export default function GetInTouch() {

    return(
        <div className="bg-black text-white py-20 px-6 md:px-12">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl  font-sans py-2 md:pt-10 md:pb-6 relative z-20 font-bold tracking-tight text-center">Build impactful products faster than in-house, smarter than the competition</h2>
        <p className="text-lg mb-12 text-center text-gray font-dmsans">Whether you want to consult an idea, add missing capabilities, quickly expand your team, or hand over a project – we've got you covered.</p>
<div  className="text-center">
                <a
                  to="/contact"
                  className="text-center text-sm font-semibold leading-6 px-4 py-2 bg-[#00E5A0] text-black rounded-md hover:bg-[#00c288] text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Estimate project
                </a>
                </div>
                <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="" />
    </div>
        </div>
    )

}



export const Globe = ({ className }) => {
    const canvasRef = useRef(null);
   
    useEffect(() => {
      let phi = 0;
   
      if (!canvasRef.current) return;
   
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        },
      });
   
      return () => {
        globe.destroy();
      };
    }, []);
   
    return (
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        className={className}
      />
    );
  };