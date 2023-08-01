"use client";

import {
  GlobalPortfolioContext,
  ProjectViewerContext,
} from "@/components/global/GlobalPortfolioContext";
import { colors } from "@/components/styles/colors";
import styled from "@emotion/styled";
import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { formatDate, noSelect } from "@/components/styles/utils";
import { PROJECT_SUMMARY_MODAL_STATES } from "@/app/projects/page";
import { ChipDisplay, StyledChip } from "../ProjectTile";

const ModalContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
  padding: 24,
  backgroundColor: colors[theme].background,
  color: colors[theme].textColorPrimary,
  border: `1px solid ${colors[theme].borderHighContrast}`,
  borderRadius: "1rem",
  minWidth: 240,
  maxWidth: 500,
  ...noSelect,
}));

const ModalHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ModalTitle = styled(Typography)({
  fontWeight: 600,
});

const ContentWrapper = styled(Box)(({ isSmallScreen }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: 12,
  flexFlow: isSmallScreen ? "row wrap" : "none",
}));

const LinkWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: 12,
  a: {
    color: colors[theme].textColorPrimary,
  },
}));

const DescriptionWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
});

const CompletionDate = styled(Typography)({
  fontWeight: 600,
});

export default function ProjectSummaryModal({ project }) {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);
  const { modalState, setModalState } = useContext(ProjectViewerContext);

  const isModalOpen = modalState === PROJECT_SUMMARY_MODAL_STATES.ACTIVE;
  const isProjectSet = Object.keys(project).length;

  return (
    <Modal open={isProjectSet && isModalOpen}>
      <ModalContainer theme={theme}>
        <ModalHeader>
          <ModalTitle variant="h5">{project.displayName}</ModalTitle>
          <CloseIcon
            onClick={() => setModalState(PROJECT_SUMMARY_MODAL_STATES.IDLE)}
            sx={{ cursor: "pointer" }}
          />
        </ModalHeader>

        <ContentWrapper isSmallScreen={isSmallScreen}>
          <DescriptionWrapper>
            <ChipDisplay type="skills" list={project.skills} />
            <Typography variant="body2">{project.description}</Typography>
            {isSmallScreen ? null : (
              <>
                {project.hasOwnProperty("extendedDescription") ? (
                  <Typography variant="body2">
                    {project.extendedDescription}
                  </Typography>
                ) : null}
              </>
            )}
            {project.hasOwnProperty("completionDate") ? (
              <CompletionDate variant="body2">
                {">"} {formatDate(project.completionDate)}
              </CompletionDate>
            ) : null}
          </DescriptionWrapper>
          {project.img ? (
            <Image src={project.img} width={200} height={200} />
          ) : null}
        </ContentWrapper>

        {project.hasOwnProperty("links") ? (
          <LinkWrapper theme={theme}>
            {project.links.map((link) => (
              <Link href={link.href}>
                <Typography variant="body2">{link.label}</Typography>
              </Link>
            ))}
          </LinkWrapper>
        ) : null}
      </ModalContainer>
    </Modal>
  );
}
