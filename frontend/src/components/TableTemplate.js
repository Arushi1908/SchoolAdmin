import React, { useState } from 'react'
import { StyledTableCell, StyledTableRow } from './styles';
import { Table, TableBody, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

const TableTemplate = ({ buttonHaver: ButtonHaver, columns, rows }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    return (
        <>
            <TableContainer sx={{bgcolor:' #122C4F'}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    customHeadBg=' #9cb6d1'
                                    customHeadColor= ' #122C4F'
                                    style={{ minWidth: column.minWidth }}
                                    sx={{fontSize:'100%'}}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                            <StyledTableCell 
                                align="center" 
                                customHeadBg=' #9cb6d1' 
                                customHeadColor= ' #122C4F'
                                sx={{fontSize:'100%'}}
                            >
                                Actions
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <StyledTableCell key={column.id} align={column.align} >
                                                    {
                                                        column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value
                                                    }
                                                </StyledTableCell>
                                            );
                                        })}
                                        <StyledTableCell align="center">
                                            <ButtonHaver row={row} />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{color: ' #122C4F'}}
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(parseInt(event.target.value, 5));
                    setPage(0);
                }}
            />
        </>
    )
}

export default TableTemplate