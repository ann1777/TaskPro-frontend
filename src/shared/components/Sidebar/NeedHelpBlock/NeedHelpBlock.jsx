import PropTypes from "prop-types";
import {
  BlockWrapper,
  SupportMessage,
  // MessageWrapper,
  HelpBtn,
  HelpIcon,
} from "./NeedHelpBlock.styled";
import Helper from "../../../images/help.png";
import sprite from "../../../images/icons.svg";

export const NeedHelpBlock = ({ onOpenHelp }) => {
  return (
    <BlockWrapper>
      <img src={Helper} style={{ width: "54px", height: "78px" }} alt="/" />

      {/* <MessageWrapper> */}
        <SupportMessage>
          If you need help with
          <br /> <span>TaskPro</span>, check out our
          <br /> support resources or <br /> reach out to our <br /> customer
          support team.
        </SupportMessage>
      {/* </MessageWrapper> */}

      <HelpBtn type="button" onClick={onOpenHelp}>
        <HelpIcon>
          <use href={sprite + "#icon-help-circle"} />
        </HelpIcon>
        Need help?
      </HelpBtn>
    </BlockWrapper>
  );
};

NeedHelpBlock.propTypes = {
  onOpenHelp: PropTypes.func.isRequired,
};
