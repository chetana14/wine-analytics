import React, { useEffect, useState } from 'react';

const WineStatistics = () => {
  const [wineData, setWineData] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Fetch the Wine Data Set
    fetch('https://jsonblob.com/api/1168134201668395008')
      .then((response) => response.json())
      .then((data) => setWineData(data))
      .catch((error) => console.error('Error fetching data:', error));

      calculateStatistics(wineData);
  }, [wineData]);

//   useEffect(() => {
//     // Calculate statistics when wineData changes
//     calculateStatistics(wineData);
//   }, [wineData]);

  const calculateStatistics = (wineData) => {
    // Implement your utility functions to calculate statistics for Flavanoids and Gamma properties
    // and store the results in the "stats" state.

    const arraySorted = wineData.sort();
    const classWiseFlavanoidsMean =  (...wineData) => wineData.reduce((acc, val) => acc + val, 0) / wineData.length;
    const classWiseFlavanoidsMedian = arraySorted.length % 2 === 0 ? (arraySorted[arraySorted.length / 2 - 1] + arraySorted[arraySorted.length / 2]) /2 : arraySorted[Math.floor(arraySorted.length / 2)];
    const classWiseFlavanoidsMode = wineData.reduce((a, b) => {
        return a[b] ? a[b] + 1 : 1;
      }, {});
    const classWiseGammaMean = 0;
    const classWiseGammaMedian = 0;
    const classWiseGammaMode = 0;

    setStats({
      classWiseFlavanoidsMean,
      classWiseFlavanoidsMedian,
      classWiseFlavanoidsMode,
      classWiseGammaMean,
      classWiseGammaMedian,
      classWiseGammaMode,
    });
  };

  return (
    <div>
      <h1>Wine Statistics</h1>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Flavanoids Mean</th>
            <th>Flavanoids Median</th>
            <th>Flavanoids Mode</th>
            <th>Gamma Mean</th>
            <th>Gamma Median</th>
            <th>Gamma Mode</th>
          </tr>
        </thead>
        <tbody>
        {stats.map((stat) => (
            <tr key={stat.class}>
              <td>{stat.class}</td>
              <td>{stat.meanFlavanoids}</td>
              <td>{stat.medianFlavanoids}</td>
              <td>{stat.modeFlavanoids}</td>
              <td>{stat.meanGamma}</td>
              <td>{stat.medianGamma}</td>
              <td>{stat.modeGamma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WineStatistics;
