import React from 'react'
import { Box } from '@mui/material'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'var(--background)',
  border: '2px solid #000',
  boxShadow: 24,
};

function Card({ animation: Animation, cover: Id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => !open && setOpen(true);
  const handleClose = () => open && setOpen(false);

  return (
    <Box
      onClick={handleOpen}
      sx={{
        width: '200px',
        height: '300px',
        backgroundImage: `url(animationsCover/animation${Id}.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        cursor: 'pointer'
      }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {Animation && <Animation />}
        </Box>
      </Modal>
    </Box>
  )
}

export default Card;
