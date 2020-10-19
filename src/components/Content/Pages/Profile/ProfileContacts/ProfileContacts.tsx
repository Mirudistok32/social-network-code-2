import { makeStyles, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React from 'react';
import { ProfileTitle } from '../ProfileTitle/ProfileTitle';
import s from './ProfileContacts.module.scss';


const useStyles = makeStyles({
    container: {
        maxHeight: 130,
        paddingLeft: 20
    },
    cellTitle: {
        width: "35%",
    },
})

type PropsType = {

}

export const ProfileContacts: React.FC<PropsType> = React.memo((props) => {

    const classes = useStyles()

    return (
        <div className={s.contacts}>
            <ProfileTitle title={"Мои контакты"} />
            <TableContainer className={classes.container}>
                <Table aria-label="simple table" >
                    <TableBody>
                        <TableRow hover>
                            <TableCell className={classes.cellTitle} padding="none">Ищу ли я работу?</TableCell>
                            <TableCell padding="none">ДА!</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell className={classes.cellTitle} padding="none">Кодовое имя?</TableCell>
                            <TableCell padding="none">123213</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell className={classes.cellTitle} padding="none">Кодовое имя?</TableCell>
                            <TableCell padding="none">123213</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell className={classes.cellTitle} padding="none">Кодовое имя?</TableCell>
                            <TableCell padding="none">123213</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell className={classes.cellTitle} padding="none">Кодовое имя?</TableCell>
                            <TableCell padding="none">123213</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell className={classes.cellTitle} padding="none">Кодовое имя?</TableCell>
                            <TableCell padding="none">123213</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell className={classes.cellTitle} padding="none">Кодовое имя?</TableCell>
                            <TableCell padding="none">123213</TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell className={classes.cellTitle} padding="none">Кодовое имя?</TableCell>
                            <TableCell padding="none">123213</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
})
