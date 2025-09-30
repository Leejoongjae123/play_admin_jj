'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Grid,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Chart.js 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function MemberReportChart() {
  const chartRef = useRef<ChartJS<'bar'>>(null);

  // 차트 데이터
  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '신규',
        data: [157, 42, 193, 138, 45, 140],
        backgroundColor: '#911A00', // 사용자 지정 색상
        borderColor: '#911A00',
        borderWidth: 0,
        barThickness: 32,
        borderRadius: 0,
      },
    ],
  };

  // 차트 옵션
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // 범례는 별도 구성
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#911A00',
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          title: function (context: any) {
            return context[0].label;
          },
          label: function (context: any) {
            return `신규: ${context.parsed.y}명`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true, // x축 세로 격자 표시
          color: '#E5E7EB',
          lineWidth: 1,
          borderDash: [5, 5], // 점선 그리드
        },
        border: {
          display: true,
          color: '#E5E7EB',
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 0,
        max: 300,
        ticks: {
          stepSize: 50,
          color: '#9CA3AF',
          font: {
            size: 12,
          },
          callback: function (tickValue: any) {
            return tickValue;
          },
        },
        grid: {
          display: true,
          color: '#E5E7EB',
          lineWidth: 1,
          drawBorder: true,
          borderDash: [5, 5], // 점선 그리드
        },
        border: {
          display: true,
          color: '#E5E7EB',
        },
      },
    },
    elements: {
      bar: {
        borderSkipped: false,
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 0,
        left: 0,
        right: 10,
      },
    },
  };

  return (
    <div className="flex flex-1 flex-col items-start self-stretch">
      <div className="flex h-[300px] w-full items-end justify-center">
        <Bar ref={chartRef} data={data} options={options} />
      </div>
      <div className="flex items-center justify-center self-stretch pt-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2" style={{ backgroundColor: '#911A00' }} />
          <span className="text-xs text-gray-3">신규</span>
        </div>
      </div>
    </div>
  );
}
