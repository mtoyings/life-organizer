import React, { useEffect, useState } from 'react';
import "./WhatDoPage.css"
import spinnerArrow from '../../assets/spinner-arrow-.svg';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';


Chart.register(ChartDataLabels);

const WhatDoPage = () => {

    // const [barData, setBarData] = useState({});

    // // set options
    // const [barOptions, setBarOptions] = useState({});

    // set data
    const [barData, setBarData] = useState({
        labels: ['label 1', 'label 2', 'label 3', 'label 4'],
        datasets: [
            {
                label: 'test label',
                data: [
                    100 / 4,
                    100 / 4,
                    100 / 4,
                    100 / 4
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 0
            }
        ]
    });
    // set options
    const [barOptions, setBarOptions] = useState({
        plugins: {
            legend: {
                display: false  // Hide legend
            },
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 24 },
            },
            tooltip: {
                enabled: false  // Disable tooltips on hover
            }
        },
        hover: {
            mode: null // Disable hover mode to prevent shadow effect
        },
        animation: {
            duration: 0 // Disable animation for hover effect
        },
        rotation: 0

    });

    useEffect(() => {
        console.log("HEY", barOptions);
        // handleClickSpinWheel()
    }, [barOptions]);

    const handleClickSpinWheel = () => {

        console.log("clicked");
        let count = 0;
        let resultValue = 101;
        let randomDegree = Math.floor(Math.random() * 360); // Random degree between 0 and 359
        console.log("RandomDegree", randomDegree);
        const newRotation = 0;
        const rotationInterval = window.setInterval(() => {
            // Update rotation
            setBarOptions(prev => {
                const newRotation = (prev.rotation + 5) % 360; // Increment and wrap around (in degrees)
                // console.log("NewRotation", newRotation);
                return { ...prev, rotation: newRotation };
            });
            console.log("NewRotation", barOptions);

            // Access updated rotation state inside the interval
            setBarOptions(prev => {
                const rotation = prev.rotation;

                duimm()
                // Check if rotation is greater than or equal to 360
                if (rotation >= 360) {
                    count += 1;
                    resultValue -= 5;

                    // Reset rotation to 0
                    setBarOptions({ ...prev, rotation: 0 });
                } else if (count > 15 && Math.abs(rotation - randomDegree) <= 10) {
                    valueGenerator(randomDegree);
                    clearInterval(rotationInterval);
                    count = 0;
                    resultValue = 101;
                    console.log("HERE");
                }

                return prev;
            });
        }, 10);

        setBarOptions(prev => {
            const newRotation = (prev.rotation + 5) % 360; // Increment and wrap around (in degrees)
            // console.log("NewRotation", newRotation);
            return { ...prev, rotation: newRotation };
        });
    };

    const duimm = () => {
        console.log("Stopping at:", barOptions);
    };
    // Dummy function to handle value generation
    const valueGenerator = (degree) => {
        console.log("Stopping at:", degree);
    };


    // console.log("barOptions" + barOptions.rotation)

    // return JSX
    return (
        <div className='spinning-wheel'>
            <div className="pie-container">
                <Pie
                    className='pie-chart'
                    data={barData}
                    options={barOptions} />
                <button className='spin-btn' onClick={handleClickSpinWheel}>
                    Spin
                </button>

            </div>


        </div>
    );
}

export default WhatDoPage