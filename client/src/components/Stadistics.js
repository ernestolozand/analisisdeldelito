import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Chart from 'chart.js/auto';

export default function Stadistics() {
    
    return (
        <div>
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Incidencia delictiva</h1>
                        </div>
                    </div>
                </section>
<body2>
                <div class="chart">
			<div class="chart_types">
				<button onclick="setChartType('bar')">Barras</button>
                <br></br>
				<button onclick="setChartType('line')">Línea</button>
				<button onclick="setChartType('doughnut')">Dona</button>
				<button onclick="setChartType('polarArea')">Polar</button>
				<button onclick="setChartType('radar')">Radar</button>

                <select id="yearSelect">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            </select>
			</div>
		<canvas id="myChart"></canvas>
		</div>
	

	<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<script src="script.js"></script>
    </body2>
        </div>

    )
}
