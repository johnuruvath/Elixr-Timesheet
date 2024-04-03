import React, { useEffect, useState } from 'react';
import './index.scss';
import Header from '../../components/Header/index.tsx';
import SideBar from '../../components/SideBar/index.tsx';
import Table from '../../components/table/index.tsx';
import data from '../../timesheets.json';
import FilterHeader from '../../components/FilterHeader/index.tsx';

interface TimeSheetData {
  name: string;
  allocation: number;
  time?: { date: number };
}

const Timesheet = () => {

  const [timesheetData, setTimesheetData] = useState<TimeSheetData[]>([]);

  useEffect(() => {
    setTimesheetData(data);
  }, []);

  const columns = [{
    label: "Name", accessor: "name", sortable: true, basecolumn: true,
    footer: "Total"
  },
  {
    label: "Total", accessor: "total", sortable: false, basecolumn: false,
    render: row => {
      const values = Object.values(row.time);
      return values.reduce((total, current) => {
        return Number(total) + Number(current);
      }, 0)


    },
    footer: data.reduce((total, current) => {
      const rowtotal = Object.values(current.time).reduce((a, b) => {
        return a + b;
      }, 0)

      return total + rowtotal;
    }, 0)
  }
    ,
  {
    label: "Allocated", accessor: "allocation", sortable: false, basecolumn: false,
    footer: timesheetData.reduce((total, current) => {
      return total + current.allocation;
    }, 0)
  },

  ...Object.keys(data[0].time).map(date => {

    const dateObj = new Date(date);
    const weekDays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const formattedDate = (`${dateObj.getDate().toString().padStart(2, "0")}-${(dateObj.getMonth() + 1).toString().padStart(2, "0")}-${weekDays[dateObj.getDay()]}`)
    return {
      label: formattedDate,
      accessor: date,
      sortable: false,
      basecolumn: false,
      classname: "column-date",

      render: row => {

        const value = row.time[date];
        let classname: string = '';
        if (value > 0 && value <= 4) {
          classname = 'halfday';
        } else if (value === 0) {
          classname = 'leave';
        } else {
          classname = 'fullday';
        }
        return <div className={classname}> {value} </div>
      },
      footer: data.reduce((total, current) => {

        const totalValue = total + current.time[date]

        return totalValue

      }, 0)

    }
  }),

  ]

  return (
    <div className='main-container'>
      <div className='sidebar-container'>
        <SideBar />

      </div>
      <div className='content-container'>
        <Header />
        <FilterHeader />
        <Table columns={columns} data={timesheetData} />
      </div>
    </div>
  )
}

export default Timesheet;

