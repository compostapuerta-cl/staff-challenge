import React from 'react'
import { Label } from 'reactstrap'

export default ({name, dni, gray}) =>
<div {...gray && {
    style: {backgroundColor: '#f8f9fa'},
    className: "container"
    } }>
  <div className="row">
      <div className="col-4">
        <Label for="name" size="lg">Nombre</Label>
      </div>
      <div className="col-8">
        {name}
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <Label for="dni" size="lg">DNI</Label>
      </div>
      <div className="col-8">
        {dni}
      </div>
    </div>
</div>