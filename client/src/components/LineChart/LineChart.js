import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";


// this Line chart can be use anywhere just you need to pass to properties "config" & "dataProvider"
//"config" for graph styling and "dataProvider" for real time data to show graph

class LineChart extends Component {
  
    render(){
      const {config} = this.props
      const Chart={...config,dataProvider:this.props.dataProvider}
      return (
        <AmCharts.React style={{ width: "100%", height: "300px" }} options={Chart} />    
      );
    }
  }
  LineChart.defaultProps = {
    config:{
      "type": "serial",
      "theme": "light",
      "legend":{
        "data":[{
          "title":"practiceperformance",
          "color":"green",
          "markerType": "circle"
        },
        {
          "title":"registry average",
          "color":"black",
          "markerType": "circle",
        }],
        "position":"top",
        "autoMargins":false,
        "align":"right"
    },
      "guides": [{
        "value": 0,
          "expand":true,
          "lineColor":"black",
          "value": 85,
          "lineAlpha":1,
          "lineThickness":1
      }],
      "dataProvider": [ {
        "quarter": "x-axis label",
        "performance":30,
        "AVG":85
      } 
    ],
      "graphs": [{
          "id": "practiceperformance",
          "lineColor": "green",
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "green",
          "title": "practiceperformance",
          "valueField": "performance",
          "lineThickness":1
      },
      {
        "id": "Average",
        "lineColor": "black",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "Black",
        "title": "Average",
        "valueField": "AVG",
        "lineThickness":1
    }],
      "categoryField": "quarter",
      "AxisBase":{
        "autoGridCount":false,
      },
      "valueAxes": [{
        "strictMinMax": true,
        "autoGridCount": false,
        "gridCount":5,
        "axisThickness": 0.5,
        "gridAlpha": 0.2,
        "axisAlpha": 1,
        "position": "left",
        "minimum": 0,
        "maximum": 100,
        "baseCoord":0,
        "offset":1,  
        "tickLength":0      
      }],
      "categoryAxis": {
        "lineAlpha": 1,
        "startOnAxis":true,             //start quarter on vertical line
        "axisColor": "green",
        "minorGridEnabled": true
      },
      "export": {
          "enabled": true
      }
  },
  dataProvider:[ {
            "quarter": "2017/Q1",
            "performance":10,
            "AVG":85
          },
          {
            "quarter": "2017/Q2",
            "performance": 20,
            "AVG":85
          },
          {
            "quarter": "2017/Q3",
            "performance": 30,
            "AVG":85
          },
          {
            "quarter": "2017/Q4",
            "performance":40,
            "AVG":85
          } 
        ]
}
export default LineChart;
 
