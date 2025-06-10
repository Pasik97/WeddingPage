import React, { useEffect, useRef } from 'react';
import * as S from "./App.styles";
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
// import Informations from './Informations/Informations';
// import WeddingPlan from './WeddingPlan/WeddingPlan';
// import Menu from './Menu/Menu';
// import Bar from './Bar/Bar';
// import Transport from './Transport/Transport';
import Media from './Media/Media';
import Contact from './Contact/Contact';
import ThankYou from './ThankYou/ThankYou';

console.log("A ja wiem od kogo wy są. To Wy xDevsy! Naughty naughty 😏")

const App: React.FC = () => {
  const scrolled = useRef(false);
  const hash = window?.location?.hash?.substring(1);

  useEffect(() => {
    if (!scrolled.current && hash) {
      scrolled.current = true;
      window.scrollTo({ top: document.getElementById(hash)?.getBoundingClientRect()?.top });
    }
  }, [hash])

  return (
    <S.PageWrapper>
      <S.PageContent>
        <Header />
        <ThankYou />
        <AboutUs />
        {/* <Informations /> */}
        {/* <WeddingPlan /> */}
        {/* <Menu /> */}
        {/* <Bar /> */}
        {/* <Transport /> */}
        <Media />
        <Contact />
      </S.PageContent>
    </S.PageWrapper>
  )
};

export default App;
