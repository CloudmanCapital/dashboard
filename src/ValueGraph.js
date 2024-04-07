import { LinePlot, LineChart, MarkPlot } from '@mui/x-charts/LineChart';
export function ValueGraph({accountValues, accountDates}) {
    
    //accountDates = [1,2,3,4,5,6,7,8];
    //accountValues = [1,2,3,4,5,6,7,8];
    return (<LineChart
        id="graph"
        height={300}
        leftAxis={null}
        bottomAxis={null}
        series={[{label: 'Current Value', type: 'line', curve: 'linear', data: accountValues },
    ]}
        xAxis={[{
            scaleType: 'point', data: accountDates }]}
        tooltip={{
            formatter: (value) => value.toFixed(2),
          }}
        sx={{
            '.MuiLineElement-root': {
                stroke: '#35D2A2',
                strokeWidth: 5,
            },
            '.MuiMarkElement-root': {
                stroke: '#35D2A2',
                scale: '0.5',
                fill: '#35D2A2',
                strokeWidth: 2,
            },
        }} />);
}