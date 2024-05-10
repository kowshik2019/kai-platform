import { Card, Grid, Typography } from '@mui/material';

import Image from 'next/image';

import { useRouter } from 'next/router';

import styles from './styles';

import { getRandomBackgroundColor } from '@/utils/MiscellaneousUtils';

/**
 * Returns a Tool Card component with an image and a chip displaying the amount of coins.
 *
 * @return {JSX.Element} The Tool Card component.
 */
const ToolCard = (props) => {
  const { maskedToolUrl, name, image, description } = props;

  const router = useRouter();

  const handleRoute = () => {
    return router.push(`/${maskedToolUrl}`);
  };

  const renderImage = () => {
    return (
      <Grid {...styles.imageGridProps}>
        <Image src={image} alt="kai logo" {...styles.imageProps} />
      </Grid>
    );
  };

  const renderTitle = () => {
    return (
      <Grid {...styles.contentGridProps}>
        <Typography {...styles.titleProps}>{name}</Typography>
        <Typography {...styles.descriptionProps}>{description}</Typography>
      </Grid>
    );
  };

  return (
    <Grid onClick={handleRoute} {...styles.mainGridProps}>
      <Card {...styles.cardProps(getRandomBackgroundColor())}>
        <Grid {...styles.toolDetailsGridProps}>
          {renderImage()}
          {renderTitle()}
        </Grid>
      </Card>
    </Grid>
  );
};

export default ToolCard;
