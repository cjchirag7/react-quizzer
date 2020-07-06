import React from 'react';
import {Form, Spinner, FormGroup, Label, Input, Alert} from 'reactstrap';

function DisplayQuestions(props)
{
  const {index, problem, active , setUsersChoice, userChoice} = props;
    if(!problem)
  {
    return <Spinner color='primary' />;
  }

  const {question, correct, choices, image, desc} = problem;

  return (
    <>
      {image === 'None' ? (
        ''
      ) : (
        <div className='row'>
          <div className='col-12 text-center'>
            <img src={image} alt="loading" />
          </div>
        </div>
      )}
      <div className='row'>
        <div className='col-12 text-center'>
          <h5>{index + 1 + '. ' + question}</h5>
        </div>
      </div>
      {choices.map((option, i) => (
        <Form key={i.toString()}>
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name={'radio' + i}
                checked={userChoice === i + 1}
                onChange={() => {
                  setUsersChoice(index, i + 1);
                }}
              />{' '}
              {option}
            </Label>
          </FormGroup>
        </Form>
      ))}
      {!active ? (
        <Alert color='info'>
          <b> Correct answer: </b> ({correct})
          <br />
          <b> Description: </b> ({desc})
        </Alert>
      ) : (
        ''
      )}
    </>
  );
}

export default DisplayQuestions;