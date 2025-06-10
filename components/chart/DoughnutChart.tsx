import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ChartDataLabels);

const DoughnutChart = ({ chartData }: any) => {
    const options = {
        plugins: {
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold' as const,
                    size: 14,
                },
                formatter: (value: any) => `${value}`,
            },
        },
    };

    return <Doughnut data={chartData} options={options} plugins={[ChartDataLabels]} />;
};

export default DoughnutChart;