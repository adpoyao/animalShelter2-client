import React from 'react';

export default function Pet(props){
  
  return(
    <section>
      <h2>{props.name}</h2>
      <img src={props.imageURL} alt={props.imageDescription}/>
      <main>
        <dl>
          <dt>Sex:</dt>
          <dd>{props.sex}</dd>
          <dt>Age:</dt>
          <dd>{props.age}</dd>
          <dt>Breed:</dt>
          <dd>{props.breed}</dd>
          <dt>Story:</dt>
          <dd>{props.story}</dd>
        </dl>
      </main>
      <button onClick={props.onAdopt} type='button' className='adopt-button'>Adopt</button>
    </section>
  )
}
