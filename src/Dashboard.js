import React, {Component} from 'react';
import {connect} from 'react-redux';
import Pet from './components/Pet';
import {fetchCat, fetchDog, adoptCat, adoptDog} from './actions'

export class Dashboard extends Component {

  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  render(){
    return(
      <div className='dashboard-dontainer'>
        <Pet {...this.props.catToAdopt} onAdopt={()=>this.props.dispatch(adoptCat())}/>
        <Pet {...this.props.dogToAdopt} onAdopt={()=>this.props.dispatch(adoptDog())}/>
      </div> 
    )
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.catShelter.data,
  dogToAdopt: state.dogShelter.data
})

export default connect(mapStateToProps)(Dashboard);