import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

function SimpleCard(props) {
  const { classes } = props
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            It is a dark time for the Rebellion. Although the Death Star has
            been destroyed, Imperial troops have driven the Rebel forces from
            their hidden base and pursued them across the galaxy. Evading the
            dreaded Imperial Starfleet, a group of freedom fighters led by Luke
            Skywalker has established a new secret base on the remote ice world
            of Hoth. The evil lord Darth Vader, obsessed with finding young
            Skywalker, has dispatched thousands of remote probes into the far
            reaches of space….
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleCard)
