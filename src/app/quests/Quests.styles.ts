import { makeStyles } from 'utils/helpers/makeStyles'

export default makeStyles(theme => ({
  dataGrid: {
    '& .MuiDataGrid-row': {
      cursor: 'pointer',
    },
    '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
      outline: 'none !important',
    },
    '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus':
      {
        outline: 'none !important',
      },
  },
  exercisesInputWrapper: {
    alignItems: 'center',
    columnGap: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formModalButtonsWrapper: {
    alignItems: 'center',
    columnGap: 2,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  formModalHelperText: {
    '& .MuiFormHelperText-root': {
      fontWeight: 500,
    },
  },
  loadingWrapper: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  modalCloseIcon: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  root: {
    height: '100%',
    width: '100%',
  },
  rootButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    pb: 2,
    pr: 2,
    width: '100%',
  },
  tooltipActions: {
    borderWidth: 2,
    borderStyle: 'solid',
  },
}))
