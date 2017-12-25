import React, {Component} from 'react';
import {connect} from 'react-redux';
import Pet from './components/Pet';
import AddPet from './components/AddPet'
import ToggleNav from './components/ToggleNav'
import {fetchCat, fetchDog, getOldest, adoptCat, adoptDog, toggle} from './actions'
import { debug } from 'util';

export class Dashboard extends Component {

  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
    this.props.dispatch(getOldest());
  }

  render(){
    let animalView;
    if(this.props.animalView === 'cat'){
      animalView = <Pet {...this.props.catToAdopt} onAdopt={()=>this.props.dispatch(adoptCat())}/>
    } 
    else if(this.props.animalView === 'dog'){
      animalView = <Pet {...this.props.dogToAdopt} onAdopt={()=>this.props.dispatch(adoptDog())}/>
    }
    else if (this.props.animalView === 'both'){
      animalView =
      <div>
        <Pet {...this.props.catToAdopt} onAdopt={()=>this.props.dispatch(adoptCat())}/>
        <Pet {...this.props.dogToAdopt} onAdopt={()=>this.props.dispatch(adoptDog())}/>
      </div>
    }
    else if(this.props.animalView === 'oldest'){
      animalView = <Pet {...this.props.oldestToAdopt}/>
    }

    return(
      <div className='dashboard-dontainer'>
        <ToggleNav />
        {animalView}
        <AddPet />
      </div> 
    )
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.catShelter.data,
  dogToAdopt: state.dogShelter.data,
  oldestToAdopt: state.oldestShelter.data,
  animalView: state.animalView.view
})

export default connect(mapStateToProps)(Dashboard);