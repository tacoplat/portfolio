"use client";

import { useContext } from "react";
import { GlobalPortfolioContext } from "@/components/global/GlobalPortfolioContext";
import CurrentRouteBreadcrumbs from "@/components/routing/CurrentRouteBreadcrumbs";
import { LandingText } from "@/components/styles/typography";
import { MainContent } from "@/components/styles/common";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const Blurb = styled(Box)(({ isSmallScreen }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 20,
  height: isSmallScreen ? 600 : "auto",
  width: isSmallScreen ? "80%" : "100%",
  maxWidth: 600,
  overflow: "auto",
}));

export default function About() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  return (
    <MainContent isSmallScreen={isSmallScreen}>
      <CurrentRouteBreadcrumbs theme={theme} />
      <LandingText variant="h5">A little bit about me.</LandingText>
      <Blurb isSmallScreen={isSmallScreen}>
        <Typography variant="body1">Hey, I'm Andy!</Typography>
        <Typography variant="body1">
          I'm a Mechatronics Engineering student at the University of Waterloo.
          Although I've primarily worked in software development, I also enjoy
          doing hobby projects that involve mechanical work. In my free time, I
          like lifting weights, hiking, and playing computer games.
        </Typography>
        <Typography variant="body1">
          I have about 3 years of experience in the realm of software
          development. I've worked with a variety of languages such as
          JavaScript (incl. Node), Python, PHP, Java, and C++. I also have
          proficiency using frameworks and libraries such as React, JavaFX, and
          the AWS SDK. Regardless of what's thrown at me, I do my best to adapt.
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
