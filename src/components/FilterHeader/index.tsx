import React from 'react';
import './index.scss';



const FilterHeader = () => {
    return (
        <div className='filter-wrapper'>
            <div className='filter-item' style={{ color: "var(--color-secondary)" }}>
                <span className="material-symbols-outlined">
                    refresh
                </span>
                <span > Refresh </span>
            </div>
            <div className='filter-item'>
                <span className="material-symbols-outlined">
                    calendar_month
                </span>
                <select name="calendar" id="calendar">
                    <option value="february"> February</option>
                    <option value="march"> March </option>
                    <option value="april"> April </option>
                    <option value="may"> May </option>
                    <option value="june"> June </option>
                    <option value="july"> July </option>
                    <option value="august"> August </option>
                    <option value="september"> September </option>
                    <option value="october"> October </option>
                    <option value="november"> November </option>
                    <option value="december"> December </option>
                    <option value="january"> January </option>
                </select>
            </div>
            <div className='filter-item'>
                <span className="material-symbols-outlined">
                    <span className="material-symbols-outlined">
                        package_2
                    </span>
                </span>
                <select name="project" id="project">
                    <option value="mh-cure"> MH- CURE </option>
                    <option value="banyan"> BANYAN </option>
                </select>
            </div>
            <div className='filter-item'>
                <span className="material-symbols-outlined">
                    toggle_off
                </span>
                <span> Show in FTE </span>
            </div>
            <div className='filter-item' style={{ color: "var(--color-secondary)" }}>
                <span className="material-symbols-outlined">
                    event_available
                </span>
                <span> Export Timesheet </span>
            </div>
            <div className='filter-item' style={{ color: "var(--color-secondary)" }}>
                <span className="material-symbols-outlined">
                    schedule
                </span>
                <span> Export leaves </span>
            </div>
        </div>
    );
}



export default FilterHeader;