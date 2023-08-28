 import {
  TitleHelp,
  StyledForm,
    FormField,
  InputField,
  SubmitButton,
  Row,
  RadioLabel,
  BackgroundIcon,
  IconContainer,
    Svg,
    BoardText,
    RadioField,
  ImageContainer
} from './EditBoard.styled'; 
import { Formik, Field, ErrorMessage } from 'formik';
import icon from '../../../images/icons.svg';

const BOARD_ICONS = [
  'icon-Project',
  'icon-star-04',
  'icon-loading-03',
  'icon-puzzle-piece-02',
  'icon-container',
  'icon-lightning-02',
  'icon-colors',
  'icon-hexagon-01',
  
];

function EditBoard({ onClose }) {
  return (
    <>
      <TitleHelp>Edit board</TitleHelp>

      <StyledForm>
        <Formik
          initialValues={{
            title: '',
            background: 'empty',
            icon: BOARD_ICONS[0],
          }}
       
        >
          {({ isSubmitting }) => (
            <StyledForm onChange={() => setErrorMessage(null)}>
              <FormField>
                <InputField
                  autoFocus
                  name="title"
                  component="input"
                  placeholder="Title"
                />
                <ErrorMessage name="title" component="div" />
              </FormField>

               <BoardText>Icons</BoardText>
              <Row>
                {BOARD_ICONS.map(id => (
                  <RadioLabel key={id} title={id}>
                    <RadioField
                      name="icon"
                      type="radio"
                      value={id}
                      component="input"
                    />
                    <IconContainer className="icon-label">
                      <Svg>
                        <use xlinkHref={`${icon}#${id}`} />
                      </Svg>
                    </IconContainer>
                  </RadioLabel>
                ))}
              </Row>

             <BoardText>Background</BoardText>
              <Row>
             <RadioLabel>
  <RadioField
    name="background"
    type="radio"
    value="empty"
    component="input"
  />
  <ImageContainer>
    <BackgroundIcon src="https://res.cloudinary.com/doc0gvy9u/image/upload/v1693183018/block_fbhcsq.png" alt="Background Description" />
  </ImageContainer>
                              </RadioLabel>
                              
                              
             
              </Row>

              <SubmitButton disabled={isSubmitting}>Edit</SubmitButton>
            </StyledForm>
          )}
        </Formik>
      </StyledForm>
    </>
  );
}

export default EditBoard;