import { useState } from 'react';
import Sidebar from './components/Sidebar'
import Workarea from './components/Workarea'
import { TField } from './common/types';
import './App.css';

function App() {
  const [fields, setFields] = useState<TField[]>([])

  const addField = (fieldType: string) => {
    setFields(fields => [...fields, { type: fieldType, id: fields.length + fieldType }])
  }

  return (
    <div className="container">
      <div className="sidebar border">
        <Sidebar addField={addField}/>
      </div>
      <div className="workarea border">
        <Workarea fields={fields}/>
      </div>
    </div>
  );
}

export default App;
