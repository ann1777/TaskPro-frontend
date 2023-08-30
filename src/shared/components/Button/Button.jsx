import icon from '../../images/icons.svg';
import { StyledButton, StyledIcon, Svg } from './Button.styled';

export const Button = ({
  type = 'submit',
  svg = true,
  onClick,
  children,
  ...allyProps
}) => {


  return (
    <StyledButton type={type} {...allyProps}>
      {svg && (
        <StyledIcon>
          (
          <Svg width="28" height="28">
            <use xlinkHref={`${icon}#icon-plus`} />
          </Svg>
          )
        </StyledIcon>
      )}
      {children}
    </StyledButton>
  );
};