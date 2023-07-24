import { Typography } from '../../components/element';
import { Card } from '../../components/modules';
import { useThemeContext } from '../../hooks/theme/useThemeContext';
import { Slide } from 'react-awesome-reveal';

interface Props {
   title?: string;
   description?: string;
   icon?: React.ReactNode;
}

export const WhyCard = ({ title, description, icon }: Props) => {
   const { theme } = useThemeContext();

   return (
      <Slide direction="left" damping={0.5} triggerOnce={true} duration={2000}>
         <Card
            className={`p-5 me-6 tabletXS:me-0 mb-6 w-[300px] h-[350px] tabletXS:w-[280px]
        cursor-pointer rounded-md
         ${
            theme === 'lightMode'
               ? ' text-black-950'
               : theme === 'darkMode' && 'bg-white-200 text-black-950'
         }`}
         >
            <div className=" text-center text-5xl mb-4 font-bold">{icon}</div>
            <Typography variant={3} className="text-2xl mobileXL:text-xl  mb-8">
               {title}
            </Typography>
            <p className="text-base">{description}</p>
         </Card>
      </Slide>
   );
};
