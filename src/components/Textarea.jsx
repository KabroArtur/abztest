import React from 'react';

function Textarea(props){

      return (
        <div className='custom-file'>
          <label className="custom-file-upload">
            <input type="file" name={props.name} onChange={props.onChange} />
            <span>Upload</span>
          </label>
          <div className='file-preview'>

           </div>
        </div>
      );
    
  }

export default Textarea; 