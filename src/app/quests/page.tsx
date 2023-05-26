'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import {
  Button,
  Chip,
  CircularProgress,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { ChangeEvent, FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TransitionGroup } from 'react-transition-group'

import { Quest } from 'api/services/quests/types'
import { TooltipButton } from 'components/atoms/TooltipButton'
import useWindowSizes from 'hooks/useWindowSizes'
import { TableCell, TableRow } from 'types/tableRow'

import { FormControl, InputLabel, MenuItem } from '@mui/material'
import useToast from 'hooks/useToast'
import { CLASSIFICATIONS, QUESTS_CATEGORIES } from 'utils/constants/quests'
import useStyles from './Quests.styles'
import { fetchQuests } from './api'
import { QuestForm, schema } from './schema'

const staticColumns: GridColDef[] = [
  {
    field: 'category',
    headerName: 'Category',
    minWidth: 120,
    flex: 1,
    renderCell: ({ value }) => {
      const category = QUESTS_CATEGORIES.find(
        ({ value: categoryValue }) => categoryValue === value
      )
      if (!category) return null
      const { color, icon: Icon, name } = category
      return (
        <Chip
          color={color}
          label={name}
          icon={<Icon />}
          size="medium"
          sx={{
            fontWeight: 500,
          }}
        />
      )
    },
  },
  {
    field: 'classification',
    headerName: 'Classification',
    minWidth: 120,
    flex: 1,
    renderCell: ({ value }) => {
      const classification = CLASSIFICATIONS.find(
        ({ value: classificationValue }) => classificationValue === value
      )
      if (!classification) return null
      const { color, colorText } = classification

      return (
        <Chip
          label={value}
          size="small"
          sx={{
            bgcolor: color,
            color: colorText,
            fontWeight: 500,
          }}
        />
      )
    },
  },
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 80,
    flex: 1,
  },
  {
    field: 'xp',
    headerName: 'XP',
    description: 'XP gain from the quest',
    align: 'right',
    headerAlign: 'right',
    minWidth: 80,
    flex: 1,
  },
  {
    field: 'unlockXp',
    headerName: 'XP to unlock',
    description: 'XP required to unlock the quest',
    align: 'right',
    headerAlign: 'right',
    minWidth: 80,
    flex: 1,
  },
  {
    field: 'duration',
    headerName: 'Duration (minutes)',
    description: 'Estimated duration of the quest in minutes',
    align: 'right',
    headerAlign: 'right',
    minWidth: 80,
    flex: 1,
  },
]

const Quests: FC = () => {
  const {
    data: quests,
    isLoading,
    refetch,
    isFetching,
  } = fetchQuests.useQuests()

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<QuestForm>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })
  const { isMobile } = useWindowSizes()
  const classes = useStyles()
  const toast = useToast()

  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null)
  const [newExercise, setNewExercise] = useState<string>('')
  const [exercises, setExercises] = useState<string[]>(
    selectedQuest?.exercises || []
  )
  const [openExercises, setOpenExercises] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const { category: categoryHookForm, classification: classificationHookForm } =
    getValues()

  const FUNCTIONS = {
    createQuest: async (values: QuestForm) => {
      const payload = values
      const res = await fetchQuests.create(payload)
      HANDLERS.handleCloseForm()

      if (res.status) {
        toast.handleToast({
          message: 'Ops, something went wrong',
          type: 'error',
        })
        return
      }

      refetch()
      toast.handleToast({
        message: 'Quest created successfully',
        type: 'success',
      })
    },
    editQuest: async (values: QuestForm) => {
      const payload: Quest = {
        ...values,
        id: selectedQuest?.id || '',
      }

      const res = await fetchQuests.update(payload)
      HANDLERS.handleCloseForm()

      if (res.status) {
        toast.handleToast({
          message: 'Ops, something went wrong',
          type: 'error',
        })
        return
      }

      refetch()
      toast.handleToast({
        message: 'Quest updated successfully',
        type: 'success',
      })
    },
    deletePack: async () => {
      if (selectedQuest) {
        const res = await fetchQuests.remove(selectedQuest.id)
        HANDLERS.handleCloseDelete()

        if (res.status !== 200) {
          toast.handleToast({
            message: 'Ops, something went wrong',
            type: 'error',
          })
          return
        }

        refetch()
        toast.handleToast({
          message: 'Quest removed successfully',
          type: 'success',
        })
      }
    },
    updateExercises: async () => {
      if (selectedQuest) {
        const payload: QuestForm = {
          category: selectedQuest.category,
          classification: selectedQuest.classification,
          description: selectedQuest.description,
          duration: selectedQuest.duration,
          exercises,
          name: selectedQuest.name,
          unlockXp: selectedQuest.unlockXp,
          xp: selectedQuest.xp,
        }

        await FUNCTIONS.editQuest(payload)
        HANDLERS.handleCloseExercises()
        refetch()
      }
    },
  }

  const HANDLERS = {
    handleResetExercises: () => setExercises([]),
    handleCloseExercises: () => {
      HANDLERS.handleResetExercises()
      setOpenExercises(false)
    },
    handleOpenExercises: (quest?: Quest | null) => {
      setOpenExercises(true)
      if (!quest) return
      setExercises(quest.exercises)
      setSelectedQuest(quest)
    },
    handleCloseForm: () => {
      HANDLERS.handleResetExercises()
      setOpenForm(false)
    },
    handleOpenForm: (quest?: Quest) => {
      reset()
      setExercises(quest?.exercises || [])
      setSelectedQuest(quest || null)
      setValue('exercises', quest?.exercises || [], { shouldTouch: true })
      setOpenForm(true)
      if (!quest) return

      setValue('category', quest.category, { shouldTouch: true })
      setValue('name', quest.name, { shouldTouch: true })
      setValue('duration', quest.duration, { shouldTouch: true })
      setValue('xp', quest.xp, { shouldTouch: true })
      setValue('unlockXp', quest.unlockXp, { shouldTouch: true })
      setValue('description', quest.description, { shouldTouch: true })
      setValue('classification', quest.classification, { shouldTouch: true })
    },
    handleCloseDelete: () => setOpenDelete(false),
    handleOpenDelete: (quest: Quest) => {
      setSelectedQuest(quest)
      setOpenDelete(true)
    },
    handleChangeNewExercise: (e: ChangeEvent<HTMLInputElement>) =>
      setNewExercise(e.target.value),
    handleRemoveExercise: (index: number) =>
      setExercises(curr => curr.filter((_, i) => i !== index)),
    handleAddExercise: () => {
      setNewExercise('')
      setExercises(curr => [...curr, newExercise])
    },

    handleUpdateExercises: () => {
      if (openForm) {
        setOpenExercises(false)
        setValue('exercises', exercises, { shouldTouch: true })
        return
      }

      FUNCTIONS.updateExercises()
    },
    handleDeletePack: () => FUNCTIONS.deletePack(),
  }

  const columns: GridColDef[] = [
    ...staticColumns,
    {
      field: 'action',
      headerName: 'Actions',
      description: 'Possible actions to the quest',
      disableReorder: true,
      disableColumnMenu: true,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
      minWidth: 160,
      renderCell: ({ row: quest }: TableCell<Quest>) => (
        <Stack columnGap={1} direction="row">
          <TooltipButton
            buttonProps={{
              sx: {
                borderColor: 'primary.main',
                ...classes.tooltipActions,
              },
              onClick: e => {
                e.stopPropagation()
                HANDLERS.handleOpenExercises(quest)
              },
            }}
            tooltipProps={{
              title: 'Open exercises',
            }}
          >
            <VisibilityRoundedIcon color="primary" fontSize="small" />
          </TooltipButton>
          <TooltipButton
            buttonProps={{
              sx: {
                ...classes.tooltipActions,
              },
              onClick: e => {
                e.stopPropagation()
                HANDLERS.handleOpenForm(quest)
              },
            }}
            tooltipProps={{
              title: 'Edit',
            }}
          >
            <EditRoundedIcon fontSize="small" />
          </TooltipButton>
          <TooltipButton
            buttonProps={{
              sx: {
                borderColor: 'error.main',
                ...classes.tooltipActions,
              },
              onClick: e => {
                e.stopPropagation()
                HANDLERS.handleOpenDelete(quest)
              },
            }}
            tooltipProps={{
              title: 'Delete',
            }}
          >
            <DeleteRoundedIcon color="error" fontSize="small" />
          </TooltipButton>
        </Stack>
      ),
    },
  ]

  if (isLoading)
    return (
      <Stack sx={{ ...classes.loadingWrapper }}>
        <CircularProgress />
      </Stack>
    )

  return (
    <>
      {/* TABLE VIEW */}
      <Stack sx={{ ...classes.root }}>
        <Stack sx={{ ...classes.rootButtonWrapper }}>
          <Button
            onClick={() => HANDLERS.handleOpenForm()}
            size="large"
            startIcon={<AddCircleRoundedIcon />}
            variant="outlined"
          >
            Create pack
          </Button>
        </Stack>
        <DataGrid
          autoPageSize
          columns={columns}
          disableColumnSelector
          disableRowSelectionOnClick
          hideFooterSelectedRowCount
          isCellEditable={() => false}
          onRowClick={({ row: quest }: TableRow<Quest>) =>
            HANDLERS.handleOpenForm(quest)
          }
          rows={quests || []}
          sx={{ ...classes.dataGrid }}
        />
      </Stack>

      {/* EXERCISES */}
      <Dialog
        fullScreen={isMobile}
        fullWidth
        maxWidth="md"
        open={openExercises}
        onClose={HANDLERS.handleCloseExercises}
      >
        <DialogTitle align="center" component="div">
          <TooltipButton
            buttonProps={{
              onClick: HANDLERS.handleCloseExercises,
            }}
            tooltipProps={{
              sx: { ...classes.modalCloseIcon },
              title: 'Close',
            }}
          >
            <CloseRoundedIcon />
          </TooltipButton>
          <Typography
            color="primary"
            component="h1"
            fontWeight={500}
            gutterBottom
            variant="h5"
          >
            Exercises
          </Typography>
          <Stack sx={{ ...classes.exercisesInputWrapper }}>
            <TextField
              label="Add exercise"
              onChange={HANDLERS.handleChangeNewExercise}
              value={newExercise}
              variant="filled"
            />
            <TooltipButton
              buttonProps={{
                disabled: !newExercise,
                onClick: HANDLERS.handleAddExercise,
              }}
              tooltipProps={{
                placement: 'right',
                title: 'Add exercise',
              }}
            >
              <SendRoundedIcon color={newExercise ? 'primary' : 'disabled'} />
            </TooltipButton>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <List>
            <TransitionGroup>
              {exercises?.map((exercise, index) => (
                <Collapse key={index}>
                  <ListItem
                    secondaryAction={
                      <TooltipButton
                        buttonProps={{
                          onClick: () => HANDLERS.handleRemoveExercise(index),
                        }}
                        tooltipProps={{
                          placement: 'left',
                          title: 'Remove exercise',
                        }}
                      >
                        <RemoveCircleRoundedIcon color="error" />
                      </TooltipButton>
                    }
                  >
                    <ListItemIcon
                      sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <CircleRoundedIcon
                        color="primary"
                        sx={{
                          fontSize: 16,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ mr: 2 }} primary={exercise} />
                  </ListItem>
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            color="error"
            onClick={HANDLERS.handleCloseExercises}
            variant="contained"
          >
            Cancel
          </Button>
          <Button onClick={HANDLERS.handleUpdateExercises} variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* DELETE */}
      <Dialog
        fullScreen={isMobile}
        fullWidth
        maxWidth="sm"
        open={openDelete}
        onClose={HANDLERS.handleCloseDelete}
      >
        <DialogTitle align="center" component="div">
          <TooltipButton
            buttonProps={{
              onClick: HANDLERS.handleCloseDelete,
            }}
            tooltipProps={{
              sx: { ...classes.modalCloseIcon },
              title: 'Close',
            }}
          >
            <CloseRoundedIcon />
          </TooltipButton>
          <Typography
            color="primary"
            component="h1"
            fontWeight={500}
            gutterBottom
            variant="h5"
          >
            Delete pack
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography align="center" gutterBottom variant="h6">
            Are you sure you want to delete the pack:{' '}
            <Typography
              color="error"
              component="span"
              display="inline"
              fontWeight={700}
              variant="h6"
            >
              {selectedQuest?.name}
            </Typography>
            ?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            color="error"
            onClick={HANDLERS.handleCloseDelete}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            disabled={!selectedQuest}
            onClick={HANDLERS.handleDeletePack}
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* CREATE/EDIT */}
      <Dialog
        fullScreen={isMobile}
        fullWidth
        maxWidth="lg"
        open={openForm}
        onClose={HANDLERS.handleCloseForm}
      >
        <DialogTitle align="center" component="div">
          <TooltipButton
            buttonProps={{
              onClick: HANDLERS.handleCloseForm,
            }}
            tooltipProps={{
              sx: { ...classes.modalCloseIcon },
              title: 'Close',
            }}
          >
            <CloseRoundedIcon />
          </TooltipButton>
          <Typography
            color="primary"
            component="h1"
            fontWeight={500}
            gutterBottom
            variant="h5"
          >
            {selectedQuest ? 'Edit' : 'Create'} pack
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid
            component="form"
            container
            onSubmit={handleSubmit(
              selectedQuest ? FUNCTIONS.editQuest : FUNCTIONS.createQuest
            )}
            spacing={2}
          >
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="filled">
                <InputLabel>Category</InputLabel>
                <Select
                  error={!!errors.category}
                  name="category"
                  onChange={(e: SelectChangeEvent<string>) =>
                    setValue('category', e.target.value, {
                      shouldDirty: true,
                      shouldValidate: true,
                      shouldTouch: true,
                    })
                  }
                  value={categoryHookForm || selectedQuest?.category}
                >
                  {QUESTS_CATEGORIES.map(
                    ({ color, icon: Icon, name, value }) => (
                      <MenuItem key={value} value={value}>
                        <Chip
                          color={color}
                          label={name}
                          icon={<Icon />}
                          size="small"
                          sx={{
                            fontWeight: 500,
                          }}
                        />
                      </MenuItem>
                    )
                  )}
                </Select>
                <FormHelperText
                  error={!!errors.category}
                  sx={{ fontWeight: 500 }}
                >
                  {errors.category?.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                defaultValue={selectedQuest?.name}
                error={!!errors.name}
                fullWidth
                helperText={errors.name?.message}
                label="Name"
                sx={{ ...classes.formModalHelperText }}
                variant="filled"
                {...register('name')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                defaultValue={selectedQuest?.duration}
                error={!!errors.duration}
                fullWidth
                helperText={errors.duration?.message}
                label="Duration"
                sx={{ ...classes.formModalHelperText }}
                variant="filled"
                {...register('duration')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                defaultValue={selectedQuest?.xp}
                error={!!errors.xp}
                fullWidth
                helperText={errors.xp?.message}
                label="XP"
                sx={{ ...classes.formModalHelperText }}
                variant="filled"
                {...register('xp')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                defaultValue={selectedQuest?.unlockXp}
                error={!!errors.unlockXp}
                fullWidth
                helperText={errors.unlockXp?.message}
                label="XP to unlock"
                sx={{ ...classes.formModalHelperText }}
                variant="filled"
                {...register('unlockXp')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                defaultValue={selectedQuest?.description}
                error={!!errors.description}
                fullWidth
                helperText={errors.description?.message}
                label="Description"
                sx={{ ...classes.formModalHelperText }}
                variant="filled"
                {...register('description')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="filled">
                <InputLabel>Classification</InputLabel>
                <Select
                  error={!!errors.classification}
                  name="category"
                  onChange={(e: SelectChangeEvent<string>) =>
                    setValue('classification', e.target.value, {
                      shouldDirty: true,
                      shouldValidate: true,
                      shouldTouch: true,
                    })
                  }
                  value={
                    classificationHookForm || selectedQuest?.classification
                  }
                >
                  {CLASSIFICATIONS.map(({ color, colorText, value }) => (
                    <MenuItem key={value} value={value}>
                      <Chip
                        label={value}
                        size="small"
                        sx={{
                          color: colorText,
                          bgcolor: color,
                          fontWeight: 500,
                        }}
                      />
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText
                  error={!!errors.classification}
                  sx={{ fontWeight: 500 }}
                >
                  {errors.classification?.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                onClick={() => HANDLERS.handleOpenExercises(selectedQuest)}
                size="large"
                type="button"
                variant="contained"
              >
                {`${exercises.length} exercise${
                  exercises.length > 1 ? 's ' : ' '
                }added`}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Stack sx={{ ...classes.formModalButtonsWrapper }}>
                <Button
                  color="error"
                  onClick={HANDLERS.handleCloseForm}
                  variant="contained"
                >
                  Cancel
                </Button>
                <Button
                  disabled={Object.keys(errors).length > 0}
                  type="submit"
                  variant="contained"
                >
                  {selectedQuest ? 'Edit' : 'Create'}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Quests
