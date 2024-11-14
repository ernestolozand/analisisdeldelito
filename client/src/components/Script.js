import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart');
let myChart;
let jsonData;

fetch("data.json")
.then(function(response){
	if(response.ok == true){
	   return response.json();
	}
})

.then(function(data){ 
	//console.log(data);
	jsonData = data; 
	createChart(data, 'doughnut');
 });	

 function setChartType(chartType){
	myChart.destroy();
	createChart(jsonData, chartType);
}

function createChart(data, type){
  myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: data.map(row => row.delito),
      datasets: [{
        label: '# Delitos de Género',
        data: data.map(row => row.total),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}