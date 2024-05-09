import { Grid, Typography } from '@mui/material';

import ToolsListingContainer from '@/components/ToolsListingContainer';

import styles from './styles';

const DEFAULT_TOOLS = [
  {
    id: 1,
    name: 'Kai Tools',
    description:
      'Kai Tools is a collection of AI tools that can be used to help you with your AI learning journey.',
  },
  {
    id: 2,
    name: 'Kai Chatbot',
    description:
      'Kai Chatbot is a chatbot that can help you with your AI learning journey.',
  },
  {
    id: 3,
    name: 'Kai AI',
    description:
      'Kai AI is a collection of AI tools that can be used to help you with your AI learning journey.',
  },
];

const HomePage = (props) => {
  const { data, loading, error } = props;

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>
          Welcome to{' '}
          <Typography {...styles.highlightTextProps}>Kai Tools</Typography> 👋
        </Typography>
        <Typography {...styles.subtitleProps}>
          Made for{' '}
          <Typography {...styles.highlightTextProps}>educators</Typography>
        </Typography>
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {renderTitle()}
      <ToolsListingContainer data={DEFAULT_TOOLS} category="All Tools" />
    </Grid>
  );
};
export default HomePage;
