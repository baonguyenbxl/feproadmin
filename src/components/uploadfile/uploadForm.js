import React, { useState } from "react";

export const Upload = () =>
{
  const [ name, setName ] = useState( "" );
  const [ selectedFile, setSelectedFile ] = useState( null );
  return (
    <div className="upload_form">
      <form>
        <input
          type="text"
          value={ name }
          onChange={ ( e ) => setName( e.target.value ) }
        />

        <input
          type="file"
          value={ selectedFile }
          onChange={ ( e ) => setSelectedFile( e.target.files[ 0 ] ) }
        />
      </form>
    </div>
  );
};
