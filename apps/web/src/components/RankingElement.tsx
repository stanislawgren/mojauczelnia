import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface Props {
    uniName: string
    uniRating: number
    uniRates: number
    star?: boolean
}

export const RankingElement = (props: Props) => {
    return (
        <Card sx={{
            width: '100%',
            borderRadius: 5
        }}>
            <CardContent sx={{ paddingBottom: 0 }}>
                <Typography gutterBottom variant="h5" component="div" sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    {
                        props.star ?  <i className="material-icons">stars</i> : null
                    }
                    {props.uniName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', }}>
                    <Rating name="read-only" precision={0.25} defaultValue={props.uniRating} readOnly />
                    <Box sx={{ ml: 2, mt: 0.5 }}>na podstawie {props.uniRates} opinii</Box>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Udostępnij</Button>
                <Button size="small">Zobacz opinie</Button>
            </CardActions>
        </Card>
    );
}