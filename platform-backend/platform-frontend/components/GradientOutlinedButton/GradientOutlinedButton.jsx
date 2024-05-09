import { Button, CircularProgress, Grid, useTheme } from '@mui/material';

import styles from './styles';

/**
 * Function for rendering a gradient outlined button with optional icon, text, and loading state.
 *
 * @param {object} props - Object containing the following button properties:
 *  @param {object} props.color -   string representing the color of the button
 *  @param {object} props.id -   string representing the id of the button
 *  @param {object} props.icon  - icon element to be displayed on the button
 *  @param {object} props.iconPlacement -  string representing the placement of the icon
 *  @param {object} props.text -  string representing the text to be displayed on the button
 *  @param {object} props.loading -  boolean representing the loading state of the button
 *  @param {object} props.disabled -  boolean representing whethere the button should be disabled
 *  @param {object} props.bgcolor  - string representing the background color of the button
 *  @param {object} props.clickHandler  - function to be called on button click
 *  @param {object} props.active -  boolean representing the active state of the button
 *  @param {object} props.inverted -  boolean representing the inverted state of the button
 *  @param {object} props.extraProps - extra properties for the button
 *  @param {object} props.extraButtonProps - extra properties for the button component
 *  @param {object} props.otherProps - other properties for the button
 *
 * @return {JSX.Element} Rendered button component
 */
const GradientOutlinedButton = (props) => {
  const {
    color,
    id,
    icon,
    iconPlacement,
    text,
    loading,
    disabled,
    bgcolor,
    clickHandler,
    active,
    inverted,
    textColor,
    extraProps,
    extraButtonProps,
    ...otherProps
  } = props;

  const theme = useTheme();

  const setBackgroundColor = () => {
    if (disabled || loading) return theme.palette.Greyscale[650];
    if (inverted || active) return theme.palette.Background.gradient[color];
    return bgcolor;
  };

  const renderButtonContent = () => {
    if (iconPlacement === 'left') {
      return (
        <>
          {icon}
          <span>{text}</span>
        </>
      );
    }

    return (
      <>
        <span>{text}</span>
        {icon}
      </>
    );
  };

  const renderLoader = () => <CircularProgress color="secondary" size={25} />;

  return (
    <Grid
      {...styles.mainGridProps(color, inverted, extraProps, disabled, loading)}
    >
      <Button
        id={id || 'button-selector'}
        disabled={loading || disabled}
        onClick={clickHandler}
        {...styles.buttonProps(
          color,
          bgcolor,
          active,
          extraButtonProps,
          inverted,
          textColor,
          disabled,
          loading,
          setBackgroundColor()
        )}
        {...otherProps}
      >
        {loading ? renderLoader() : renderButtonContent()}
      </Button>
    </Grid>
  );
};

export default GradientOutlinedButton;
