import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState('loading...');
  useEffect(() => {
    fetch('https://zkd3gloogkyn4u5atq46ko5ov40ndail.lambda-url.eu-north-1.on.aws/')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount('error'));
  }, []);

  return (
    <div style={{fontFamily:'Inter, sans-serif',textAlign:'center',marginTop:'100px'}}>
      <h1>Your Name</h1>
      <p>B.Tech Student | Cloud Developer</p>
      <h3>Visitor Count: {count}</h3>
    </div>
  );
}

export default App;
