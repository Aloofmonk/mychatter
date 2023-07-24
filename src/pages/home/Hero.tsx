import React from 'react';
import { Typography, Button } from '../../components/element';
import { Fade } from 'react-awesome-reveal';

export const Hero = (): React.JSX.Element => {
   return (
      <div className=" flex-container flex justify-center items-center gap-12">
         <div className="w-1/2 tabletM:w-full tabletM:mt-16 mobileXL:mt-12 mobileL:mt-0">
            <Fade direction="left" duration={3000} triggerOnce>
               <Typography
                  variant={1}
                  className=" text-7xl mb-6 tabletS:text-5xl mobileXL:text-3xl "
               >
                  <span className="text-blue-700"> Let Technology Do The Communicating </span>
               </Typography>
            </Fade>

            <Fade direction="left" duration={3000} triggerOnce>
               <p data-testid="hero-text" className=" text-lg mobileXL:text-base leading-relaxed ">
                  Unleash your creative potential on Chatter—an inclusive platform for diverse content and connections. Join our community today to inspire others with your unique perspective and connect with like-minded individuals. Discover, create, and thrive with Chatter's vibrant and empowering environment.
               </p>
            </Fade>

            <div className="mt-8">
               <Fade direction="right" duration={2000} triggerOnce>
                  <Button className="bg-blue-600 w-[150px] text-white-50 rounded-[5px] p-4 font-semibold">
                     Get Started!
                  </Button>
               </Fade>
            </div>
         </div>

         <div className=" cursor-pointer  ">
            <Fade direction="right" duration={3000} triggerOnce>
               <img
                  src={
                     'https://ouch-cdn2.icons8.com/0339W8k7rVubjRbq50U0AsZLn5keN5K94W9V6uAKBVQ/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTg3/LzBiNWQ5ZDJiLTAw/ZDEtNDQyMS04Yjg1/LTEwNGFjMDg5ZDU4/Ni5wbmc.png'
                  }
                  title="hero"
                  alt="hero"
                  className="img-hero rounded-sm object-cover w-3/5 h-full hover:transform ml-10 mb-20 "
               />
            </Fade>
         </div>
      </div>
   );
};
