import { FC, ReactNode } from 'react';
import { ThemeProvider } from '../providers/theme-provider';
import { ColorPrefrencesProvider } from '../providers/color-preferences';
import MainContent from '@/components/main-content';

 

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
        <div>
            <ThemeProvider 
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange                
            >
            <ColorPrefrencesProvider>
            <MainContent>
                <p>Layout</p>
            </MainContent>
            </ColorPrefrencesProvider>
                </ThemeProvider>
            {children}
            </div>
  );
};

export default MainLayout;