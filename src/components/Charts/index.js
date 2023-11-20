// ChartComponent.js
import React, { useEffect} from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {

  useEffect(() => {
    

    renderChart();
  }, []);

  const renderChart = () => {
    const data = localStorage.getItem("transactions");
    const parsedata = JSON.parse(data);
    console.log(parsedata)
    const entryamount = parsedata.filter(value => !value.expense).map(item => +item.amount)
    const expenseamount = parsedata.filter(value => value.expense).map(item => +item.amount)
    
    const entrytotal = entryamount.reduce((pv,cv )=> {return pv + cv}, 0)
    const expensetotal = expenseamount.reduce((pv,cv )=> {return pv + cv}, 0)
    const total = entrytotal - expensetotal


    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["entrada", "saida", "balanço"],
        datasets: [{
          label: 'Valores',
          data: [entrytotal, expensetotal, total],
          backgroundColor: 'rgba(130, 10, 191, 0.4)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 2
        }]
      }
    });
  };

  return (
    <div>
      <canvas id="myChart" ></canvas>
    </div>
  );
};

export default ChartComponent;
