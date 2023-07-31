"use client";

import styled from "@emotion/styled";
import { formatDate } from "../styles/utils";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { GlobalPortfolioContext } from "../global/GlobalPortfolioContext";

const ExperienceHeader = styled(Typography)(({ isSmallScreen }) => ({
  fontWeight: 600,
  fontSize: 18,
  display: "flex",
  justifyContent: isSmallScreen ? "center" : "start",
}));

const TimelineContentWrapper = styled(TimelineContent)(({ isSmallScreen }) => ({
  display: "flex",
  alignItems: "center",
  gap: 24,
  padding: isSmallScreen ? 0 : "auto",
}));

const StyledTimelineItem = styled(TimelineItem)({
  alignItems: "stretch",
});

const Separator = styled("span")({
  lineHeight: 0.8,
});

export default function ExperienceContainer({ heading, items, isLast }) {
  const { isSmallScreen } = useContext(GlobalPortfolioContext);
  return (
    <Box
      id={heading.split(" ")[0].toLowerCase()}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: isLast ? "16rem" : 0,
      }}
    >
      <ExperienceHeader isSmallScreen={isSmallScreen} variant="h6">
        {heading}
      </ExperienceHeader>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
          width: "100%",
        }}
      >
        {items.map((item, index) => (
          <StyledTimelineItem>
            <TimelineOppositeContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: isSmallScreen ? "center" : "start",
              }}
            >
              {isSmallScreen ? (
                <>
                  <Typography variant="body1">{`${formatDate(
                    item.start
                  )}`}</Typography>
                  <Separator>–</Separator>
                  <Typography variant="body1">
                    {formatDate(item.end)}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="body1">{`${formatDate(
                    item.start
                  )}–`}</Typography>
                  <Typography variant="body1">
                    {formatDate(item.end)}
                  </Typography>
                </>
              )}
            </TimelineOppositeContent>
            {!isSmallScreen ? (
              <TimelineSeparator>
                <TimelineDot />
                {index === items.length - 1 ? null : <TimelineConnector />}
              </TimelineSeparator>
            ) : null}
            <TimelineContent>
              <TimelineContentWrapper isSmallScreen={isSmallScreen}>
                <img src={item.thumbnail} height={64} width={64} />
                <Box>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1">{item.organization}</Typography>
                  <Typography variant="body2">{item.location}</Typography>
                </Box>
              </TimelineContentWrapper>
            </TimelineContent>
          </StyledTimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
