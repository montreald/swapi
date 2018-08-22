import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

/*import items and component*/
import ItemButtons from '../ItemButtons'
import Search from '../Content/Search'

export const styles = theme => ({
  root: {
    flexGrow: 1,
    '&$selected': {
      backgroundColor: theme.palette.action.selected
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
    '&$selected': {
      backgroundColor: theme.palette.action.selected
    }
  },
  selected: {
    backgroundColor: '#00aeef'
  }
})

const links = [
  { isExact: true, linkTo: '/', textIn: 'Home' },
  { isExact: false, linkTo: '/people', textIn: 'People' },
  { isExact: false, linkTo: '/planets', textIn: 'Planets' },
  { isExact: false, linkTo: '/vehicles', textIn: 'Vehicles' }
]

class TopBar extends Component {
  button = null

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    anchorEl: null,
    selectedIndex: 1
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    const {
      classes,
      className,
      component,
      selected,
      role,
      ...other
    } = this.props

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon onClick={this.toggleDrawer('left', true)} />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Star Wars
            </Typography>
            <ItemButtons />
            <Search />
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {links.map((link, i) => (
              <MenuItem
                component={Link}
                to={link.linkTo}
                key={i}
                selected={i === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, i)}
              >
                {link.textIn}
              </MenuItem>
            ))}
          </div>
        </Drawer>
      </div>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)
