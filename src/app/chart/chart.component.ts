import { Component, OnInit } from '@angular/core';
import {EChartsOption} from 'echarts'
import * as echarts from 'echarts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit{

  // option:EChartsOption = {
  //   xAxis: {
  //     type: 'category',
  //     boundaryGap: false,
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   series: [
  //     {
  //       data: [820, 932, 901, 934, 1290, 1330, 1320],
  //       type: 'line',
  //       areaStyle: {}
  //     }
  //   ]
  // };
  
  


  ngOnInit(): void {
    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

  option = {
    color: ['#8A74F9'],

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Line 1'],
      left:70,
      top:20
    },
    toolbox: {
      
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير']
      }
    ],
    yAxis: [
      {
        type: 'log'
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 3
        },
        showSymbol: true,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: '#8A74F9'
            },
            {
              offset: 0,
              color: 'rgba(93, 86, 250, 0.2)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [140, 232, 101, 264, 400, 110, 300,170,100,90,300,340],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' }
            
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      

    ],
    
    
  };


  option && myChart.setOption(option);

  }
}