"use client";

import { useContext } from "react";
import { GlobalPortfolioContext } from "@/components/global/GlobalPortfolioContext";
import CurrentRouteBreadcrumbs from "@/components/routing/CurrentRouteBreadcrumbs";
import { LandingText } from "@/components/styles/typography";
import { MainContent } from "@/components/styles/common";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import { linkStyling } from "@/components/styles/routing";

const Blurb = styled(Box)(({ isSmallScreen, theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 20,
  height: isSmallScreen ? 600 : "auto",
  width: isSmallScreen ? "80%" : "100%",
  maxWidth: 800,
  overflow: "auto",
  ...linkStyling({ theme }),
}));

export default function About() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  return (
    <MainContent isSmallScreen={isSmallScreen}>
      <CurrentRouteBreadcrumbs theme={theme} />
      <LandingText variant="h5">A little bit about me.</LandingText>
      <Blurb isSmallScreen={isSmallScreen} theme={theme}>
        <Typography variant="body1">Hey, I'm Andy!</Typography>
        <Typography variant="body1">
          I'm a Mechatronics Engineering student at the University of Waterloo.
          Although I've primarily worked in software development, I also enjoy
          doing hobby projects that involve mechanical work. In my free time, I
          like lifting weights, hiking, and playing computer games.
        </Typography>
        <Typography variant="body1">
          I have about 3 years of experience in the realm of software
          development and I've worked with a variety of languages such as{" "}
          <b>JavaScript</b> (incl. Node), <b>Python</b>, <b>PHP</b>, <b>Java</b>
          , and <b>C++</b>. I also have proficiency using frameworks and
          libraries such as <b>React</b>, <b>JavaFX</b>, and the <b>AWS SDK</b>.
          Regardless of what's thrown at me, I do my best to adapt.
        </Typography>
        <Typography variant="body1">
          Most recently, I have been involved in full stack development, with an
          emphasis on React front-ends. If you'd like to see some of my work,
          feel free to check out the <Link href="/projects">Projects</Link>{" "}
          page.
        </Typography>
      </Blurb>
    </MainContent>
  );
}
