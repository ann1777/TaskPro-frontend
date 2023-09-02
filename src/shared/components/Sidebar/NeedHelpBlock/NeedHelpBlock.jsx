import PropTypes from "prop-types";
import {
  BlockWrapper,
  SupportMessage,
  // MessageWrapper,
  HelpPicture,
  HelpBtn,
  HelpIcon,
} from "./NeedHelpBlock.styled";
import cactus1x from "../../../images/cactus1x.png";
import cactus2x from "../../../images/cactus2x.png";
import cactus1xWebp from "../../../images/cactus1xWebp.webp";
import cactus2xWebp from "../../../images/cactus2xWebp.webp";
import sprite from "../../../images/icons.svg";

export const NeedHelpBlock = ({ onOpenHelp }) => {
  return (
    <BlockWrapper>
      <HelpPicture>
        <source
          srcSet={cactus2xWebp}
          type="image/webp"
          media="(min-width: 1200px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={cactus1xWebp}
          type="image/webp"
          media="(min-width: 1200px)"
        />
        <source
          srcSet={cactus2xWebp}
          type="image/webp"
          media="(min-width: 768px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={cactus1xWebp}
          type="image/webp"
          media="(min-width: 768px)"
        />
        <source
          srcSet={cactus2xWebp}
          type="image/webp"
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={cactus1xWebp}
          type="image/webp"
          media="(max-width: 767px)"
        />
        <source
          srcSet={cactus2x}
          media="(min-width: 1200px) and (min-resolution: 2dppx)"
        />
        <source srcSet={cactus1x} media="(min-width: 1200px)" />
        <source
          srcSet={cactus2x}
          media="(min-width: 768px) and (min-resolution: 2dppx)"
        />
        <source srcSet={cactus1x} media="(min-width: 768px)" />
        <source
          srcSet={cactus2x}
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={cactus1x} media="(max-width: 767px)" />
        <img src={cactus1x} alt="User" />
      </HelpPicture>

      <SupportMessage>
        If you need help with
        <br /> <span>TaskPro</span>, check out our
        <br /> support resources or <br /> reach out to our <br /> customer
        support team.
      </SupportMessage>

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
