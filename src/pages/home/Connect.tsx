import { Button, Typography } from '../../components/element';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/auth/useAuthContext';
import { Fade } from 'react-awesome-reveal';

export const Connect = (): React.JSX.Element => {
   const { user } = useAuthContext();
   const navigate = useNavigate();

   //handle view write
   const handleViewWrite = () => {
      if (user) {
         navigate('/write');
      } else {
         navigate('/onboard');
      }
   };
   return (
      <div className="contact-container flex justify-between py-12 tabletM:flex-col">
         <div className=" relative w-1/2 tabletM:w-full h-[400px] ms-8 rounded-sm cursor-pointer  tabletM:ms-0 tabletXS:h-[250px] tabletM:mb-6">
            <img
               src={
                  'https://firebasestorage.googleapis.com/v0/b/chatter-be02c.appspot.com/o/chatterImages%2Fconnect.svg?alt=media&token=84ef304e-e8bb-481d-9da0-3f95081a3237'
               }
               alt="connect"
               title="connect"
               className="rounded-sm object-contain w-full h-full hover:transform hover:scale-90 transition duration-500 ease-in-out "
            />
         </div>

         <div className="w-1/2 tabletM:w-full ">
            <Fade duration={2000} direction="up" triggerOnce>
               <Typography
                  variant={2}
                  className="text-4xl tabletM:text-2xl mb-6 font-semibold leading-relaxed"
               >
                  Write, read and <span className=" text-pink-600 animate-pulse"> connect </span>{' '}
                  with great minds on chatter
               </Typography>
            </Fade>

            <Fade duration={2000} direction="up" triggerOnce>
               <p className="mb-4 text-lg">
                  Share people your great ideas, and also read write-ups based on your interests.
                  with people of same interests and goals
               </p>
            </Fade>

            <div>
               <Fade duration={2000} direction="up" triggerOnce>
                  <Button
                     onClick={handleViewWrite}
                     title="Get Started"
                     className="bg-blue-600 w-[150px] text-white-50 rounded-[5px] p-4 font-semibold"
                  >
                     Get Started
                  </Button>
               </Fade>
            </div>
         </div>
      </div>
   );
};
