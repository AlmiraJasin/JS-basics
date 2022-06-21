import { useEffect, useState } from 'react';
import './bootstrap.css';
import './crud.scss';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import TreeContext from './Components/TreeContext';
import axios from 'axios';
import Message from './Components/Message';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [trees, setTrees] = useState(null);
  const [modalData, setModalData] = useState(null);


  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [message, setMessage] = useState(null)

  //Read
  useEffect(() => {
    axios.get('http://localhost:3003/medziai')
    .then(res => setTrees(res.data));
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) return;
    axios.post('http://localhost:3003/medziai', createData)
    .then(res => {
      showMessage(res.data.msg);
      setLastUpdate(Date.now());
    })
    .catch(error => {
      showMessage({text: 'error.message', type: 'danger'})
    })    
  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) return;
    axios.delete('http://localhost:3003/medziai/' + deleteData.id)
    .then(_ => {
      setLastUpdate(Date.now());
    });
  }, [deleteData]);

  // Edit
  useEffect(() => {
    if (null === editData) return;
    axios.put('http://localhost:3003/medziai/' + editData.id, editData)
    .then(_ => {
      setLastUpdate(Date.now());
    });
  }, [editData]);

  // Message
  const showMessage = msg => {
    setMessage(msg);
    setInterval(() => setTimeout(null), 5000);
  }

  return (
    <TreeContext.Provider value={
      {
        trees,
        setCreateData,
        setDeleteData,
        setModalData,
        modalData,
        setEditData,
        message
      }
    }>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create/>
          </div>
          <div className="col-8">
            <List></List>
          </div>
        </div>
      </div>
      <Edit/>
      <Message />
    </TreeContext.Provider>
  );


}
export default App;