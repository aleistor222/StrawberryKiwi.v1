import React from 'react'

export default function Warning(props) {
  const error = props.error;
 console.log(`error ${JSON.stringify(error)}`)
  var warning = '';

  switch (error) {
    
  }

  return (
    <div className="warningDiv">
      <p className="warningText">
        {warning}
      </p>
    </div>
  )
}