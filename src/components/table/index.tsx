import React, { useEffect, useState } from 'react';
import './index.scss';

interface TableProps {
    columns: {
        label: string;
        accessor: string;
        render?: (row: any, index: number) => {

        },
        sortable?: boolean,
        basecolumn?: boolean
        footer?: any
        classname?:string

    }[];
    data: any[]

}
const Table = ({ columns, data }: TableProps) => {

    const [sortType, setsortType] = useState<string>("asc");
    const [sortColumn, setSortColumn] = useState<string>("");


    useEffect(() => {
        const basecolumn = columns.find(item => {
            return item.basecolumn;
        })?.accessor || "";
        setSortColumn(basecolumn);
    }, [columns])


    const toggleSortType = (column: any) => {
        if (sortColumn === column.accessor) {
            setsortType(sortType === 'asc' ? 'desc' : 'asc');
        } else {
            setsortType('asc');
            setSortColumn(column.accessor);
        }
    }


    const renderTableColGroup = () => {
        return <colgroup>
            {columns.map(column => {
                return <col className={`col col-${column.accessor}`} key={column.label} />
            })}
        </colgroup>
    }


    const renderTableHeader = () => {
        return <thead >
            <tr>
                {columns.map(column => {
                    return <th className={`th th-${column.accessor}  ${column.classname || ""}`} key={column.label}>
                        <div className='th-div'>
                            {column.sortable && sortColumn ? sortColumn === column.accessor && (<span className="material-symbols-outlined" onClick={() => toggleSortType(column)}> {sortType === 'asc' ? "arrow_upward" : "arrow_downward"} </span>) :
                                null}
                            <span>{column.label}</span>
                        </div>
                    </th>
                })}
            </tr>
        </thead>
    }


    const sortFunction = (a: any, b: any) => {
        if (sortType === 'asc') {
            return a[sortColumn]?.toLowerCase() > b[sortColumn]?.toLowerCase() ? 1 : -1
        } else {
            return b[sortColumn]?.toLowerCase() > a[sortColumn]?.toLowerCase() ? 1 : -1
        }
    }


    const renderTableBody = () => {

        return <tbody className='table-body'>
            {
                [...data]?.sort(sortFunction).map((row, index) => {
                    return <tr key={index}>
                        {columns.map(column => {
                            return <td className={`td td-${column.accessor} ${column.classname || ""}`} key={column.label}> {column.render ? column.render(row, index) : row[column.accessor]} </td>
                        })}

                    </tr>
                }
                )}
        </tbody>
    }


    const renderTableFooter = () => {
        return <tfoot >
            <tr>
                {columns.map(column => {
                    return <td className={`td td-${column.accessor} ${column.classname || ""}`} key={column.label}>
                        <div className='td-div'>
                            {column.footer === 0 ? <span className='leave'> {column.footer} </span> : <span> {column.footer} </span>}
                        </div>
                    </td>
                })}
            </tr>
        </tfoot>
    }


    return (
        <div className='table-wrap'>
            <table>
                {renderTableColGroup()}
                {renderTableHeader()}
                {renderTableBody()}
                {renderTableFooter()}
            </table>
        </div>
    );
};

export default Table;