import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { menuAction } from '../actions/menuAction';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    menuIsIn: state.menuIsIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuAction: (menuIsIn) => dispatch(menuAction(menuIsIn)),
  };
};

const AppContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));

export default AppContainer;