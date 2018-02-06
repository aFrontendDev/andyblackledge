import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import AppExample from '../appExample.jsx';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const AppExampleContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppExample));

export default AppExampleContainer;