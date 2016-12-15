import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadStoriesIntoState } from '../actions/results';
import SelectionView from '../components/Selection/SelectionView';

class Selection extends Component {
  componentWillMount() {
    // this.props.dispatch(loadStoriesIntoState());
  }

  render() {
    console.log('stories:', this.props.stories);
    return (
      <SelectionView />
    );
  }
}

Selection.propTypes = {
  dispatch: PropTypes.func.isRequired,
  stories: PropTypes.array.isRequired,
};

export default connect((state) => ({
  stories: state.results.stories,
}))(Selection);
