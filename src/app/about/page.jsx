"use client";

import { useContext } from "react";
import { GlobalPortfolioContext } from "@/components/global/GlobalPortfolioContext";
import CurrentRouteBreadcrumbs from "@/components/routing/CurrentRouteBreadcrumbs";
import { LandingText } from "@/components/styles/typography";
import { MainContent } from "@/components/global/common";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import { linkStyling } from "@/components/styles/routing";

const Blurb = styled(Box)(({ isSmallScreen, theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 20,
  height: isSmallScreen ? "70%" : "auto",
  maxWidth: "100%",
  maxWidth: 800,
  padding: isSmallScreen ? "0 2rem" : 0,
  overflowY: "auto",
  overflowX: "clip",
  marginBottom: 64,
  ...linkStyling({ theme }),
}));

export default function About() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  return (
    <MainContent isSmallScreen={isSmallScreen}>
      <CurrentRouteBreadcrumbs theme={theme} />
      <LandingText isSmallScreen={isSmallScreen} variant="h5">
        A little bit about me.
      </LandingText>
      <Blurb isSmallScreen={isSmallScreen} theme={theme}>
        <Typography variant="body1">Hey, I'm Andy!</Typography>
        {isSmallScreen ? (
          <Box
            sx={{
              minHeight: 300,
              width: "100%",
              maxWidth: 300,
              border: "1px solid black",
            }}
          >
            Placeholder image
          </Box>
        ) : null}
        <Typography variant="body1">
          I'm a Mechatronics Engineering student at the University of Waterloo.
          Although I've primarily worked in software development, I'm currently
          learning the everything I need to build a comprehensive
          electro-mechanical system (think robots). In my free time, I like
          lifting weights, hiking, and gaming.
        </Typography>
        <Typography variant="body1">
          I've worked with a variety of languages such as <b>JavaScript</b>,{" "}
          <b>Python</b>, <b>PHP</b>, <b>Java</b>, <b>C</b>, and <b>C++</b> in a
          variety of fields from full-stack web development to low-level
          hardware. I also have proficiency using frameworks and libraries such
          as <b>React</b>, <b>JavaFX</b>, and the <b>AWS SDK</b>. Regardless of
          what's thrown at me, I do my best to adapt.
        </Typography>
        <Typography variant="body1">
          If you'd like to see some of my work, feel free to check out the{" "}
          <Link href="/projects">Projects</Link> page.
        </Typography>
      </Blurb>
    </MainContent>
  );
}
