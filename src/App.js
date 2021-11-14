import { Chart } from "react-google-charts";

function App() {
  return (
    <div>
      <Chart
        width={1000}
        height={2850}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "date", id: "Date" },
            { type: "number", id: "Won/Loss" },
          ],
          [new Date(2012, 3, 13), 37032],
          [new Date(2012, 3, 14), 38024],
          [new Date(2012, 3, 15), 38024],
          [new Date(2012, 3, 16), 38108],
          [new Date(2012, 3, 17), 38229],
          [new Date(2013, 1, 4), 38177],
          [new Date(2013, 1, 5), 38705],
          [new Date(2013, 1, 12), 38210],
          [new Date(2013, 1, 13), 38029],
          [new Date(2013, 1, 19), 38823],
          [new Date(2013, 1, 23), 38345],
          [new Date(2013, 1, 24), 38436],
          [new Date(2013, 2, 10), 38447],
          [new Date(2021, 8, 27), 40000],
        ]}
        options={{
          title: "Red Sox Attendance",
        }}
        rootProps={{ "data-testid": "1" }}
      />
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="Gantt"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "string", label: "Task ID" },
            { type: "string", label: "Task Name" },
            { type: "date", label: "Start Date" },
            { type: "date", label: "End Date" },
            { type: "number", label: "Duration" },
            { type: "number", label: "Percent Complete" },
            { type: "string", label: "Dependencies" },
          ],
          [
            "Research",
            "Find sources",
            new Date(2015, 0, 1),
            new Date(2015, 0, 5),
            null,
            100,
            null,
          ],
          [
            "Write",
            "Write paper",
            null,
            new Date(2015, 0, 9),
            3 * 24 * 60 * 60 * 1000,
            25,
            "Research,Outline",
          ],
          [
            "Cite",
            "Create bibliography",
            null,
            new Date(2015, 0, 7),
            1 * 24 * 60 * 60 * 1000,
            20,
            "Research",
          ],
          [
            "Complete",
            "Hand in paper",
            null,
            new Date(2015, 0, 10),
            1 * 24 * 60 * 60 * 1000,
            0,
            "Cite,Write",
          ],
          [
            "Outline",
            "Outline paper",
            null,
            new Date(2015, 0, 6),
            1 * 24 * 60 * 60 * 1000,
            100,
            "Research",
          ],
        ]}
        rootProps={{ "data-testid": "1" }}
      />

<Chart
  width={'500px'}
  height={'300px'}
  chartType="GeoChart"
  data={[
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
    ['Cambodia', 800],
    ['Martinique', 1500],
  ]}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="YOUR_KEY_HERE"
  rootProps={{ 'data-testid': '1' }}
/>
<Chart
  width={'800px'}
  height={'500px'}
  chartType="WordTree"
  loader={<div>Loading Chart</div>}
  data={[
    ['Phrases'],
    ['cats are better than dogs'],
    ['cats eat kibble'],
    ['cats are better than hamsters'],
    ['cats are awesome'],
    ['cats are people too'],
    ['cats eat mice'],
    ['cats meowing'],
    ['cats in the cradle'],
    ['cats eat mice'],
    ['cats in the cradle lyrics'],
    ['cats eat kibble'],
    ['cats for adoption'],
    ['cats are family'],
    ['cats eat mice'],
    ['cats are better than kittens'],
    ['cats are evil'],
    ['cats are weird'],
    ['cats eat mice'],
    ['cats are better than kangaroos'],
  ]}
  options={{
    wordtree: {
      format: 'implicit',
      word: 'cats',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
  );
}

export default App;
