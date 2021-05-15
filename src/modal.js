import React from 'react'; 

export default function SimpleModal() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const editingTemplate = (
  <div>
   <form>
  <label>
    Name:
    <input type="text" name="name" value="this.state.activeItem.title"/>
  </label>
  <input type="submit" value="Submit" />
</form>
 <p> LOLOOOO</p>
  </div>
  );
 const viewTemplate = (
  <div>
  
  </div>
  );
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
     
     {open? editingTemplate : viewTemplate}
     
    </div>
  );
}

