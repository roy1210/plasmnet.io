import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        background: '#47BCFF',
    },
    link: {
        color: 'navy',
    },
    headerText: {
        color: 'white',
    },
}));

const Issues: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} id="issues-section">
            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" className={classes.headerText} gutterBottom>
                    Public Blockchains are &quot;full&quot;,
                    <br />
                    but we can fix that
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Ever since the blockchain technology was released to the public, people from different backgrounds
                    came together to create something magnificent, something that can change the structure of
                    information as we know it. The <b>Web3</b> revolution. <br />
                    However,{' '}
                    <a
                        className={classes.link}
                        href="https://www.bloomberg.com/news/articles/2019-08-26/ethereum-almost-full-as-controversial-coin-gobbles-up-capacity"
                    >
                        existing blockchains{' '}
                    </a>
                    are just not scalable enough to make this dream into a reality. People deserve something better.
                </Typography>
            </Container>
        </div>
    );
};

export default Issues;
