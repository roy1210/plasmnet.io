import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { Links } from '../../../database/links';
import { TeamMembers } from '../../../database/teamMembers';

const useStyles = makeStyles(theme => ({
    icon: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        color: '#7FD1FF',
    },
    heroContent: {
        //backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        background: '#47BCFF',
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    btnPrimary: {
        background: 'linear-gradient(45deg, #1d417f 30%, #2e8ec0 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    media: {
        height: 210,
    },
}));

const cards = TeamMembers;

const OurTeam: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} id="ourTeam-section">
            <Container maxWidth="sm">
                <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Our team can get the job done
                </Typography>
            </Container>

            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map(card => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                {/* <card.icon style={{ fontSize: 60 }} className={classes.icon}></card.icon> */}

                                <CardMedia className={classes.media} image={card.image} title={card.heading} />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.heading}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {card.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="sm">
                <div className={classes.heroButtons}>
                    <a href={Links.discord}>
                        <Button variant="contained" color="primary" size="large" className={classes.btnPrimary}>
                            Learn more about the team
                        </Button>
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default OurTeam;
