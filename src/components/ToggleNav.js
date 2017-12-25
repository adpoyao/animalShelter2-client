import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggle} from '../actions';

export class ToggleNav extends Component {
  onSelectView(animalView){
    this.props.dispatch(toggle(animalView))
  }

  render(){
    return(
      <div className='toggleNav-container'>
        <input type="button" value="View Cats" onClick={()=>this.onSelectView('cat')} />
        <input type="button" value="View Dogs" onClick={()=>this.onSelectView('dog')} />
        <input type="button" value="View All" onClick={()=>this.onSelectView('both')} />
        <input type="button" value="View Oldest" onClick={()=>this.onSelectView('oldest')} />
      </div>
    )
  }
}

export default connect()(ToggleNav);