import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { setActiveNote } from '../../store/journal/journalSlice'


export const SideBarItem = ({title='', body='', id, date, imageUrls=[]}) => {

    const dispatch = useDispatch();

    const onClicknote = () =>{
        dispatch(setActiveNote({title, body, id, date, imageUrls}))
    }

    const newTitle = useMemo(()=>{
        return title.length > 17
                ? title.substring(0,17) + '...'
                :title;
    },[title])

    const newBody = useMemo(() =>{
        return body.length > 30
                ? body.substring(0,30) + '...'
                :body;
    },[body])


    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClicknote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText primary={newBody} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
