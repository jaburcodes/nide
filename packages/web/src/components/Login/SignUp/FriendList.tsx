import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.

const FriendList = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{ devices: [] }}
      onSubmit={values =>
       console.log(values)
      }
      render={({ values }) => (
        <Form>
          <FieldArray
            name="devices"
            render={arrayHelpers => (
              <div>
                {values.devices && values.devices.length > 0 ? (
                  values.devices.map((friend, index) => (
                    <div key={index}>
                      <Field name={`devices.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    Add
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export default FriendList;