import { useState,  useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { NavBarBackgroundColor, TimespanDropdownOptions, BarChartHoverColor, ChartLabelColor, ChartFont } from '../../config';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function DiseaseBarChart() {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const [diseaseCount, setDiseaseCount] = useState<number>(5);
  const [timespan, setTimespan] = useState<string>(TimespanDropdownOptions[0]);

  
  const fullData = [
    { disease: 'Disease A', cases: 6 },
    { disease: 'Disease B', cases: 7 },
    { disease: 'Disease C', cases: 8 },
    { disease: 'Disease D', cases: 9 },
    { disease: 'Disease E', cases: 10 },
    { disease: 'Disease F', cases: 12 },
    { disease: 'Disease G', cases: 5 },
    { disease: 'Disease H', cases: 11 },
    { disease: 'Disease I', cases: 8 },
    { disease: 'Disease J', cases: 14 }
  ];

  const sortedData = fullData.sort((a, b) => b.cases - a.cases)
  const filteredData = sortedData.slice(0, diseaseCount);

  useEffect(() => {
    if (!chartRef.current) return;

    d3.select(chartRef.current).selectAll('*').remove();
    const width = 540;
    const height = 320;

    const margin = { top: 50, right: 30, bottom: 60, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height);

    const chartGroup = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(filteredData.map(d => d.disease))
      .range([0, innerWidth])
      .padding(0.3);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(filteredData, d => d.cases) || 0])
      .nice()
      .range([innerHeight, 0]); 

    chartGroup.selectAll('.bar')
      .data(filteredData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.disease) || 0)
      .attr('y', d => yScale(d.cases))
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d.cases))
      .attr('fill', NavBarBackgroundColor)
      .attr('rx', 4)
      .attr('ry', 4)
      .on('mouseover', function(event, d){
        d3.select(this)
          .transition()
          .duration(200)
          .attr('fill', BarChartHoverColor);

          tooltip
            .style('opacity', 1)
            .html(`<strong>${d.disease}</strong>: ${d.cases} cases<br/><small>Timespan: ${timespan}</small>`)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 28) + 'px');
            
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('fill', NavBarBackgroundColor);

          tooltip.style('opacity', 0);
      });


      chartGroup.selectAll('.value-label')
      .data(filteredData)
      .enter()
      .append('text')
      .attr('class', 'value-label')
      .attr('x', d => (xScale(d.disease) || 0) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.cases) - 5)
      .attr('text-anchor', 'middle')
      .text(d => d.cases)
      .attr('fill', ChartLabelColor)
      .attr('font-size', '12px')
      .attr('font-weight', 'bold');

    chartGroup.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale)) 
      .selectAll('text')
      .attr('font-size', '12px')
      .attr('font-family', ChartFont)
      .attr('transform', 'rotate(-15)')
      .style('text-anchor', 'end');

    chartGroup.append('g')
      .call(d3.axisLeft(yScale).ticks(5))
      .selectAll('text')
      .attr('font-size', '12px')
      .attr('font-family', ChartFont);
    
      svg.append('text')
        .attr('x', width / 2)
        .attr('y', 25)
        .attr('text-anchor', 'middle')
        .attr('font-size', '18px')
        .attr('font-weight', 'bold')
        .attr('font-family', ChartFont)
        .text(`Disease Cases (${timespan})`);
      
      svg.append('text')
        .attr('transform', 'rotate(-90')
        .attr('x', -(height / 2))
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .attr('font-size', '14px')
        .attr('font-family', ChartFont)
        .text('Number of Cases');
      
      const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'chart-tooltip')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('background-color', 'rgba(255, 255, 255, 0.9)')
        .style('border', '1px solid #ddd')
        .style('border-radius', '4px')
        .style('padding', '8px')
        .style('pointer-events', 'none')
        .style('font-family', ChartFont)
        .style('font-size', '12px')
        .style('box-shadow', '0 2px 4px rgba(0,0,0,0.1)');
      
      return () => {
        d3.select('body').selectAll('.chart-tooltip').remove();
      };
  }, [diseaseCount, timespan, filteredData]);


  return (
    <div className="bar-chart-container">
      <div className="chart-filters mb-3">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Number of Diseases</Form.Label>
              <Form.Select 
                value={diseaseCount}
                onChange={(e) => setDiseaseCount(Number(e.target.value))}
                className="filter-select"
              >
                {[3, 5, 7, 10].map(count => (
                  <option key={count} value={count}>{count} Diseases</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Timespan</Form.Label>
              <Form.Select 
                value={timespan}
                onChange={(e) => setTimespan(e.target.value)}
                className="filter-select"
              >
                {TimespanDropdownOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </div>
      
      <div className="bar-chart-container" style={{ 
        width: '540px', 
        height: '320px',
        margin: '0 auto',
        borderRadius: '8px',
        backgroundColor: '#f5f2ec',
        padding: '10px',
        marginBottom: '2rem',
      }}>
        <svg ref={chartRef}></svg>
      </div>
    </div>
  );
}

export default DiseaseBarChart;
