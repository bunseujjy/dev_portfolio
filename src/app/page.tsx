import React from "react";
import { useDeveloperInfo } from "./actions/useDeveloperInfo";
import HeroSection from "./component/HeroSection";

export default async function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const config = await useDeveloperInfo();
  return (
    <React.Fragment>
      <HeroSection config={config} />
    </React.Fragment>
  );
}
