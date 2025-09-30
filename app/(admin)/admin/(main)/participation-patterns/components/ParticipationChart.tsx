'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import type { ChartDataPoint, ParticipationChartProps } from '../types';

// Chart.js 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ParticipationChart({ data }: ParticipationChartProps) {
  // 기본 샘플 데이터
  const defaultChartData: ChartDataPoint[] = [
    { date: '27일', month: '7월', value: 5 },
    { date: '28일', value: 8 },
    { date: '29일', value: 6 },
    { date: '30일', value: 7 },
    { date: '1일', month: '8월', value: 9 },
    { date: '2일', value: 4 },
    { date: '3일', value: 10 },
    { date: '4일', value: 6 },
    { date: '5일', value: 8 },
    { date: '6일', value: 12 },
    { date: '7일', value: 7 },
    { date: '8일', value: 15, isHighlighted: true },
  ];

  const chartData = data || defaultChartData;

  // Chart.js 데이터 구조
  const chartJsData = {
    labels: chartData.map((item) => {
      if (item.month) {
        return [`${item.month}`, `${item.date}`];
      }
      return item.date;
    }),
    datasets: [
      {
        label: '참여 수',
        data: chartData.map((item) => item.value),
        backgroundColor: chartData.map((item) => (item.isHighlighted ? '#FE6112' : '#E6E6E6')),
        borderRadius: 0,
        barThickness: 'flex' as const,
        maxBarThickness: 50,
      },
    ],
  };

  // Chart.js 옵션
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        displayColors: false,
        callbacks: {
          title: () => '',
          label: (context) => `${context.parsed.y}개`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: true,
          color: '#E6E6E6',
        },
        ticks: {
          color: '#666666',
          font: {
            size: 14,
            family: 'Pretendard',
          },
          callback: function (tickValue, index) {
            const item = chartData[index];
            return item?.month ? [item.month, item.date] : item?.date;
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: '#F5F5F5',
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#666666',
          font: {
            size: 14,
            family: 'Pretendard',
          },
          stepSize: 5,
          callback: (tickValue) => `${tickValue}개`,
        },
      },
    },
  };

  return (
    <div className="h-[191px] w-full">
      <Bar data={chartJsData} options={options} />
    </div>
  );
}
