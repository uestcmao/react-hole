import React, {
  Component
} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
const recentsIcon = <ActionHome />;
const favoritesIcon = <ActionGrade />;
const nearbyIcon = <IconLocationOn />;

class BottomNavigationExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    }
    this.select = (index) => this.setState({
      selectedIndex: index
    });
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;