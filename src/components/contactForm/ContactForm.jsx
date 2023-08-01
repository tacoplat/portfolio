"use client";

import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { colors } from "../styles/colors";
import { GlobalPortfolioContext } from "../global/GlobalPortfolioContext";
import {
  ActionWrapperBase,
  LabelFieldWrapper,
  StyledButton,
  StyledLabel,
} from "./formComponents";
import CircleIcon from "@mui/icons-material/Circle";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const FormWrapper = styled("form")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  gap: "1.2rem",
  width: "70%",
  "div[data-lastpass-icon-root]": {
    display: "none",
  },
  scrollBehavior: "smooth",
});

const getInputWidth = (size) => {
  switch (size) {
    case "small":
      return 160;
    case "medium":
      return 240;
    case "large":
      return 360;
    default:
      return 240;
  }
};

const Input = styled("input")(({ size, theme }) => ({
  padding: "6px 12px",
  width: getInputWidth(size),
  maxWidth: "100%",
  border: `1px solid ${colors[theme].borderHighContrast}`,
  borderRadius: "2rem",
  boxSizing: "border-box",
}));

const TextArea = styled("textarea")(({ theme }) => ({
  width: getInputWidth("large"),
  maxWidth: "100%",
  height: 140,
  padding: 12,
  fontSize: 14,
  lineHeight: "140%",
  fontFamily: "sans-serif",
  border: `1px solid ${colors[theme].borderHighContrast}`,
  borderRadius: "1rem",
  boxSizing: "border-box",
}));

const Indicator = styled(CircleIcon)(({ invalid }) => ({
  color: invalid ? "orangered" : "forestgreen",
  fontSize: 8,
  marginLeft: "0.5rem",
}));

const Field = ({ label, size, type, value, updater, finalValidator }) => {
  const { theme } = useContext(GlobalPortfolioContext);
  return (
    <LabelFieldWrapper>
      <StyledLabel theme={theme}>
        {label}
        {<Indicator invalid={finalValidator && !finalValidator(value)} />}
      </StyledLabel>
      <Input
        type={type}
        size={size}
        theme={theme}
        value={value}
        onChange={(e) => updater(e.target.value)}
      />
    </LabelFieldWrapper>
  );
};

const TextAreaField = ({ label, value, updater }) => {
  const { theme } = useContext(GlobalPortfolioContext);
  return (
    <LabelFieldWrapper>
      <StyledLabel theme={theme}>
        {label} <span>{value.length} / 500</span>
      </StyledLabel>
      <TextArea
        value={value}
        theme={theme}
        onChange={(e) => updater(e.target.value)}
      />
    </LabelFieldWrapper>
  );
};

const ActionWrapper = styled(ActionWrapperBase)(({ isSmallScreen }) => ({
  marginTop: "0.5rem",
  justifyContent: isSmallScreen ? "center" : "start",
}));

const defaultFormValues = {
  name: "",
  email: "",
  message: "",
};

const MAX_MESSAGE_LENGTH = 500;

// Inputs valid when
const validators = {
  inProgress: {
    message: (value) => value.length <= MAX_MESSAGE_LENGTH,
  },
  final: {
    name: (value) => value.length > 0,
    email: (value) => value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) !== null,
  },
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  const generateUpdater = ({ field, validator }) => {
    if (!formValues.hasOwnProperty(field)) return () => {};
    return (newValue) => {
      if (!validator || validator(newValue)) {
        setFormValues({ ...formValues, [field]: newValue });
      }
    };
  };

  return (
    <FormWrapper autocomplete="off">
      <Field
        label="Name"
        type="text"
        value={formValues.name}
        updater={generateUpdater({ field: "name" })}
        finalValidator={validators.final.name}
      />
      <Field
        label="E-mail"
        type="email"
        value={formValues.email}
        updater={generateUpdater({
          field: "email",
        })}
        finalValidator={validators.final.email}
      />
      <TextAreaField
        label="Message"
        size="large"
        value={formValues.message}
        updater={generateUpdater({
          field: "message",
          validator: validators.inProgress.message,
        })}
      />
      <ActionWrapper isSmallScreen={isSmallScreen}>
        <StyledButton theme={theme} endIcon={<SendIcon />}>
          Submit
        </StyledButton>
        <StyledButton
          theme={theme}
          endIcon={<DeleteIcon />}
          onClick={() => setFormValues(defaultFormValues)}
        >
          Clear
        </StyledButton>
      </ActionWrapper>
    </FormWrapper>
  );
}
