import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '30vw',
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: 300,
    marginRight: 30,
    marginLeft: 'auto'
  },
  container: {
    display: 'flex',
    flexWrap: 'nowrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssRoot: {
    color: '#FFF',
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700]
    }
  },
  button: {
    color: '#fff',
    minWidth: '120px',
    border: '1px solid #fff'
  },
  bootstrapRoot: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '8px 18px',
    border: '1px solid',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
  }
})

const theme = createMuiTheme({
  palette: {
    primary: green
  }
})

function ItemButtons(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        component={Link}
        to="/people"
        className={classes.button}
      >
        People
      </Button>
      <Button
        variant="outlined"
        component={Link}
        to="/planets"
        className={classes.button}
      >
        Planets
      </Button>
      <Button
        variant="outlined"
        component={Link}
        to="/vehicles"
        className={classes.button}
      >
        Vehicles
      </Button>
    </div>
  )
}

ItemButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ItemButtons)
