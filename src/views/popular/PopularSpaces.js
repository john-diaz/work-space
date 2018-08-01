import React, {Component} from 'react';

import Header from '../../components/global/Header';
import Footer from '../../components/global/Footer';
import Sidemenu from '../../components/global/Sidemenu';
import SpaceCard from '../../components/SpaceCard';
import CouldNotLoad from '../../components/util/CouldNotLoad';
import { connect } from 'react-redux';
import { fetchPopularSpaces } from '../../redux/actions';
import LoadingScreen from '../util/LoadingScreen';

class PopularSpaces extends Component {
  componentDidMount() {
    this.props.fetchPopularSpaces()
  }
  render(){
    return(
      <div>
      <Header/>
      <Sidemenu/>

      <div className="content">
        <div className="d-flex w-100 justify-content-between align-items-center container-fluid">
          <h1>Popular Spaces</h1> <a href="/space/create">Create your own</a>
        </div>
        <div className="row-fluid">
          {this.props.spaces === 'pending' ? <LoadingScreen /> : Array.isArray(this.props.spaces) ? this.props.spaces.map((space, i) => {
            return (<SpaceCard key={i} space={space}/>)
          }) : <CouldNotLoad name="popular spaces" />}
        </div>
      </div>

      <Footer/>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  spaces: state.popularSpaces
});

export default connect(mapStateToProps, {fetchPopularSpaces})(PopularSpaces);