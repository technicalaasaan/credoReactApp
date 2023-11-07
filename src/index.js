import React, { Profiler, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  console.log('duration', actualDuration)
}


function Loading() {
  console.log('lllloading..');
  return <h5> Loading... </h5>;
}

root.render(
  // <React.StrictMode>
    // <Profiler id='App' onRender={onRender}>
    <Suspense fallback={<Loading />}>
      <App data={{'name': 'prakash'}} /> 
      {/* name='prakash' /> */}
    </Suspense>
    // </Profiler>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
