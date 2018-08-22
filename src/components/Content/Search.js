import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit
  }
})

class ComposedTextField extends React.Component {
  state = {
    name: 'Composed TextField'
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <FormControl
          className={classes.formControl}
          error
          aria-describedby="name-error-text"
        >
          <InputLabel htmlFor="name-error">Search a people</InputLabel>
          <Input
            id="name-error"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormControl>
      </div>
    )
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ComposedTextField)
