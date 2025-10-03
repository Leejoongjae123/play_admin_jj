'use client';

import { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Chart.js 컴포넌트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function MemberTrendChart() {
  const chartRef = useRef<ChartJS<'line'>>(null);

  // 차트 준비 완료 시 그라데이션 생성
  useEffect(() => {
    const chart = chartRef.current;
    if (chart && chart.ctx) {
      const ctx = chart.ctx;

      // 그라데이션 생성
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(145, 26, 0, 0.3)'); // #911A00 with opacity
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // transparent white

      // 그라데이션을 데이터셋에 직접 적용
      if (chart.data.datasets[0]) {
        chart.data.datasets[0].backgroundColor = gradient;
        chart.update();
      }
    }
  }, []);

  // 차트 데이터
  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '가입',
        data: [63, 110, 45, 80, 87, 150],
        borderColor: '#911A00',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#911A00',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4, // 곡선 효과
        fill: true, // 그라데이션 fill 활성화
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
            return `가입: ${context.parsed.y}명`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
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
        max: 200,
        ticks: {
          stepSize: 40,
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
      point: {
        hoverBackgroundColor: '#FFFFFF',
        hoverBorderColor: '#911A00',
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
      <div className="flex h-[300px] w-full items-center justify-center">
        <Line ref={chartRef} data={data} options={options} />
      </div>
      <div className="flex items-start self-stretch pt-2">
        {['1월', '2월', '3월', '4월', '5월', '6월'].map((month) => (
          <div key={month} className="flex-1 text-center text-xs text-gray-3">
            {month}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center self-stretch pt-4">
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-4" style={{ backgroundColor: '#911A00' }} />
          <div
            className="h-2 w-2 rounded-full border"
            style={{
              borderColor: '#911A00',
              backgroundColor: '#FFFFFF',
              borderWidth: '1px',
            }}
          />
          <span className="text-xs text-gray-3">가입</span>
        </div>
      </div>
    </div>
  );
}
