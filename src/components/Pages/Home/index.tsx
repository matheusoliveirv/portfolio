import React from "react";
import { Header } from "../../Molecules/Header";
import { PrimarySection } from "../../Organism/PrimarySection";
import { SecondarySection } from "../../Organism/SecundarySection";
import { ThirdySection } from "../../Organism/ThirdySection";
import { QuadSection } from "../../Organism/QuadSection";

interface Props{
    toggleTheme(): void,
}

export const Home: React.FC<Props> = ({toggleTheme}) => {

  return (
    <>
      <Header toggleTheme={toggleTheme}/>
      <PrimarySection />
      <SecondarySection />
      <ThirdySection />
      <QuadSection />
    </>
  )
}