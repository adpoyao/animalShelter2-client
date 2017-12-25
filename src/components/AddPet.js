import React, {Component} from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import Input from './Input';
import { error } from 'util';

import {submitCat} from '../actions'

export class AddPet extends Component {
  onSubmit(values) {
    const timeStamp = Date.Now();
    const newAnimal = {
      imageURL: values.imageURL,
      imageDescription: values.imageDescription,
      name: values.name,
      sex: values.sex,
      age: values.age,
      breed: values.breed,
      story: values.story,
      timeStamp
    }
    const type = values.animalType;
    this.props.dispatch(submitCat(newAnimal, type));

    values.imageURL = '',
    values.imageDescription = '',
    values.name = '',
    values.sex = '',
    values.age = '',
    values.breed = '',
    values.story = ''
  }
  
  render(){
    let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="signup sigup-success">
                    Submitted up successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="signup signup-error">{this.props.error}</div>
            );
        }
    return(
      <form
        className="adoption-form"
        onSubmit = {this.props.handleSubmit(values => {
          this.onSubmit(values);
        })}
      >

        {successMessage}
        {errorMessage}

        <fieldset>
          <legend>Add a pet to the shelter</legend>

          <label htmlFor="animalType" >Type of Animal</label>
          <Field component="select" name="animalType" className="animalType">
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </Field>

          <br/>

          <label htmlFor="imageURL" >URL to image</label>
          <Field component={Input} type="text" name="imageURL" id="imageURL" placeholder="http://www..." 
            validate={[required, nonEmpty]}/>

          <label htmlFor="imageDescription" >Describe the image</label>
          <Field component={Input} type="text" name="imageDescription" id="imageDescription" placeholder="i.e. a brown dog, sunbathing..." 
            validate={[required, nonEmpty]}/>

          <label htmlFor="name" >Name</label>
          <Field component={Input} type="text" name="name" id="name" placeholder="http://www..." 
            validate={[required, nonEmpty]}/>

          <label htmlFor="sex" >Sex</label>
          <Field component={Input} type="text" name="sex" id="sex" placeholder="i.e. male" 
            validate={[required, nonEmpty]}/>

          <label htmlFor="age" >Age</label>
          <Field component={Input} type="number" name="age" id="age" placeholder="i.e. 2" 
            validate={[required, nonEmpty]}/>

          <label htmlFor="breed" >Breed</label>
          <Field component={Input} type="text" name="breed" id="breed" placeholder="i.e. Terrier" 
            validate={[required, nonEmpty]}/>

          <label htmlFor="story" >Story</label>
          <Field component={Input} type="textarea" name="story" id="story" placeholder="Tell us a story!" 
            validate={[required, nonEmpty]}/>
        </fieldset> 

        <button 
          className="submitAnimal"
          type="submit"
          disabled={
              this.props.pristine ||
              this.props.submitting
          }>Submit Animal</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'addNewPet',
  initialValues: { animalType: 'cat'},
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('addNewPet', Object.keys(errors)[0]))
})(AddPet);