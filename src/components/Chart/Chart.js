import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataValues = props.data.map((dataPoint) => dataPoint.value);
    const max = Math.max(...dataValues);

    return (
        <div className="chart">
            {props.data.map((dataPoint) => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={max}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
