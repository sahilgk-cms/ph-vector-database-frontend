import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { 
  NavBarBackgroundColor, 
  NavBarContactUsColor,
  LowSeverityColor,
  ModerateSeverityColor,
  HighSeverityColor,
  TimespanDropdownOptions,
  ChartFont,
  ChartBackgroundColor
} from '../../config';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DiseaseDistributionPieChart() {
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
  
  
  const colorScale = [
    NavBarBackgroundColor, 
    NavBarContactUsColor,
    LowSeverityColor,
    ModerateSeverityColor,
    HighSeverityColor
  ];


  useEffect(() => {
    if (!chartRef.current) return;

    
    d3.select(chartRef.current).selectAll('*').remove();

    
    const width = 540;
    const height = 320;
    const margin = 40;
    const radius = Math.min(width, height) / 2 - margin;


    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    
    const pie = d3.pie<any>()
      .value(d => d.cases)
      .sort(null);

    
    const arcPath = d3.arc<any>()
      .innerRadius(radius * 0.4)
      .outerRadius(radius);

    
    const labelArc = d3.arc<any>()
      .innerRadius(radius * 0.7)
      .outerRadius(radius * 0.7);

    
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('y', -height / 2 + 20)
      .attr('font-size', '18px')
      .attr('font-weight', 'bold')
      .attr('font-family', 'Helvetica')
      .text(`Disease Distribution (${timespan})`);

    
    const segments = svg.selectAll('.arc')
      .data(pie(filteredData))
      .enter()
      .append('g')
      .attr('class', 'arc');


    segments.append('path')
      .attr('d', arcPath)
      .attr('fill', (_, i) => colorScale[i % colorScale.length])
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .style('opacity', 0.8)
      .on('mouseover', function(event, d) {
      
        d3.select(this)
          .transition()
          .duration(200)
          .style('opacity', 1)
          .attr('transform', `scale(1.05)`);
        
        
        tooltip
          .style('opacity', 1)
          .html(`<strong>${d.data.disease}</strong>: ${d.data.cases} cases<br/>${Math.round(d.data.cases / d3.sum(filteredData, d => d.cases) * 100)}%<br/><small>Timespan: ${timespan}</small>`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function() {
        
        d3.select(this)
          .transition()
          .duration(200)
          .style('opacity', 0.8)
          .attr('transform', `scale(1)`);
        
        
        tooltip.style('opacity', 0);
      })
      .transition()
      .duration(1000)
      
      .attrTween('d', function(d: any) {
        const interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
        return function(t: number) {
          return arcPath(interpolate(t)) || '';
        };
      });      


    segments.append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d)})`)
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr('fill', 'white')
      .text(d => `${Math.round(d.data.cases / d3.sum(filteredData, d => d.cases) * 100)}%`)
      .style('opacity', 0)
      .transition()
      .delay(1000)
      .duration(500)
      .style('opacity', 1);

    const legend = svg.selectAll('.legend')
      .data(filteredData)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (_, i) => `translate(${radius + 20}, ${-radius + 20 + i * 20})`);

    legend.append('rect')
      .attr('width', 12)
      .attr('height', 12)
      .attr('fill', (_, i) => colorScale[i % colorScale.length]);

    legend.append('text')
      .attr('x', 20)
      .attr('y', 10)
      .attr('font-size', '12px')
      .attr('font-family', 'Helvetica')
      .text(d => `${d.disease} (${d.cases})`);

  
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
    <div className="pie-chart-container">
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
      
      <div className="pie-chart-svg-container" style={{ 
        width: '540px', 
        height: '320px',
        margin: '0 auto',

        borderRadius: '8px',
        backgroundColor: ChartBackgroundColor,
        padding: '10px'
      }}>
        <svg ref={chartRef}></svg>
      </div>
    </div>
  );
}

export default DiseaseDistributionPieChart;
