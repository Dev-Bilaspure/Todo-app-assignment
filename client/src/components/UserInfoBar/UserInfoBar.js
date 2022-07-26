import { Button, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './homeStyles.css';


const UserInfoBar = () => {
  const [fullName, setFullName] = useState('Dev Bilaspure');
  const [editedFullName, setEditedFullName] = useState(fullName);
  const email = 'dev@gmmail.com';
  const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  const [nameEditMode, setNameEditMode] = useState(false);
  const [avatarEditMode, setAvatarEditMode] = useState(false);
  const toggleNameEditMode = () => {
    setNameEditMode(!nameEditMode);
  }
  const nameSaveClicked = () => {
    console.log('save');
    toggleNameEditMode();
  }

  const toggleAvatarEditMode = () => {
    setAvatarEditMode(!avatarEditMode)
  }
  const avatarSaveClicked = () => {
    console.log('save');
    toggleAvatarEditMode();
  }
  const cancelAvatarEditClicked = () => {
    setEditedProfilePicture(null)
    toggleAvatarEditMode();
  }


  const [editedProfilePicture, setEditedProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [fileInputState, setFileInputState] = useState('');

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImagePreview(reader.result);
    };
  }
  const handleSelectPic = (e) => {
    const file = e.target.files[0];
    setEditedProfilePicture(file);
    previewFile(file);
    setFileInputState(e.target.value);
  }


  return (
    <div style={{marginTop: 120, width: '100%'}}>
      <Paper elevation={10} style={{width: '60%', margin: 'auto', padding: 20}}>
        <div style={{display: 'flex'}}>
          
            <div style={{height: 230, width: 230, background: `url(${ editedProfilePicture ? imagePreview : defaultImage}) center/100% no-repeat`, backgroundRepeat: 'no-repeat',opacity: avatarEditMode ? 0.3 : 1}} >
              {
                avatarEditMode && 
                <label htmlFor='fileInput'>
                  <div style={{width: '100%', height: '100%'}} className={avatarEditMode && 'avatarStyle'}>
                    <div style={{marginLeft: 95, marginTop: 90}}>
                      <AddCircleIcon style={{fontSize: 40, color: '#000000'}} />
                    </div>
                    
                  </div>
                </label>
                
              }
            </div>
          
          <input 
            type='file' 
            id='fileInput' 
            value={fileInputState}
            style={{display: 'none'}}
            onChange={handleSelectPic}
          />
          <div style={{paddingLeft: 20}}>
            {/* <Typography>Email:</Typography> */}
            <Typography style={{fontSize: 20}}>{email}</Typography>
            <div style={{display: 'flex', marginTop: 20}}>
              <div>
                {/* <Typography>Name:</Typography> */}
                {
                  !nameEditMode ?
                  <Typography style={{fontSize: 20}}>{fullName}</Typography> :
                  <input type='text' 
                    value={editedFullName} 
                    onChange={e => setEditedFullName(e.target.value)} 
                    style={{outline: 'none',border: 'none', borderBottom: '1px solid #000000', fontSize: 18, marginTop:7}}
                  />
                  
                }
              </div>
              <div>
                {
                  !nameEditMode ?
                  <Button 
                    variant='outlined'
                    style={{border: '1px solid #000000', borderRadius: 50, textTransform: 'none', color: '#000000', marginTop: 0, marginLeft: 60, height: 35}}
                    onClick={toggleNameEditMode}
                  >
                    Edit Name
                  </Button> :
                  <div style={{display: 'flex'}}>
                    <div>
                      <Button 
                        variant='outlined'
                        style={{border: '1px solid #CD0001', borderRadius: 50, textTransform: 'none', color: '#CD0001', marginTop: 0, marginLeft: 60, height: 35}}
                        onClick={toggleNameEditMode}
                      >
                        Cancel
                      </Button>
                    </div>
                    <div>
                      <Button 
                        variant='outlined'
                        style={{border: '1px solid #48AC50', borderRadius: 50, textTransform: 'none', color: '#48AC50', marginTop: 0, marginLeft: 30, height: 35}}
                        onClick={nameSaveClicked}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                }
                
                
              </div>
              
            </div>
            <div>
              {
                !avatarEditMode ?
                <Button 
                  variant='outlined'
                  style={{border: '1px solid #000000', borderRadius: 50, textTransform: 'none', color: '#000000', marginTop: 40, marginLeft: 0, height: 35}}
                  onClick={toggleAvatarEditMode}
                >
                  Edit Avatar
                </Button> :
                <div style={{display: 'flex'}}>
                  <div>
                    <Button 
                      variant='outlined'
                      style={{border: '1px solid #CD0001', borderRadius: 50, textTransform: 'none', color: '#CD0001', marginTop: 40, marginLeft: 0, height: 35}}
                      onClick={cancelAvatarEditClicked}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button 
                      variant='outlined'
                      style={{border: '1px solid #48AC50', borderRadius: 50, textTransform: 'none', color: '#48AC50', marginTop: 40, marginLeft: 30, height: 35}}
                      onClick={avatarSaveClicked}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              } 
            </div>
          </div>
        </div>
      </Paper>
      
    </div>
  )
}

export default UserInfoBar