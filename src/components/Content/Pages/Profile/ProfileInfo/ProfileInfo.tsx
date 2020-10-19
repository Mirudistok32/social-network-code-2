import { makeStyles, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { ProfileLine } from '../ProfileLine/ProfileLine';
import s from './ProfileInfo.module.scss';

const useStyles = makeStyles({
    table: {
        marginTop: 10
    },
    cellTitle: {
        width: "30%",
    },
    cellContent: {
        fontWeight: 700
    }
})

type PropsType = {

}

export const ProfileInfo: React.FC<PropsType> = React.memo((props) => {

    const classes = useStyles()

    return (
        <div className={s.info}>
            <span className={s.info__name}>Меня Зовут</span>
            <ProfileLine />
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    <TableRow hover>
                        <TableCell size="small" className={classes.cellTitle}>Ищу ли я работу?</TableCell>
                        <TableCell size="small" className={classes.cellContent}>ДА!</TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell size="small" className={classes.cellTitle}>Кодовое имя?</TableCell>
                        <TableCell size="small" className={classes.cellContent}>123213</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div >
    )
})
