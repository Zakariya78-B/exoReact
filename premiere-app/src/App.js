import React from 'react';
import logo from './logo.svg';
import './App.css';
import DocumentList from './components/DocumentList';
import AddDocument from './components/AddDocument';
import EditDocument from './components/EditDocument';
const App=()=>
{
    const documentData = [
        {id:1,docTitle:'document1',description:'desc1',publisher:'publicher1'},
        {id:2,docTitle:'document2',description:'desc2',publisher:'publicher2'},
        {id:3,docTitle:'document3',description:'desc3',publisher:'publicher3'},
    ]
    const initialFormState ={id:null,docTitle:'', description:'', publisher:''}
    //saving value to state
    const [documents,setDocuments]=React.useState(documentData);
    const[editing,setEditing]=React.useState(false);
    const [currentDocument, setCurrentDocument]=React.useState(initialFormState);
    // function to add element to the list
    const addDocument= document=>{
        console.log(document);
        //mise en place de l'id
        document.id= documents.length+1;
        // appel de la fonction setDocuments avec le spread operator
        setDocuments([...documents,document])
    }
    const editDocument = document=>{
        setEditing(true);
        setCurrentDocument({
            id:document.id,
            docTitle:document.docTitle,
            description:document.description,
            publisher:document.publisher
        })
    }
    const deleteDocument= id =>{
        const newList =documents.filter(document=>document.id!==id)
        setDocuments(newList)
    }
const updateDocument =(id, updateDocument)=>{
        setEditing(false);
        console.log(id)
    setDocuments(documents.map(item=>(item.id==id ? updateDocument :item)))
}
    return(
        <div className="container">
    <h2 className="text-center">React.js CRUD APP</h2>
            <div className="row">
                { editing ?(
                    <div>
                        <h2 className="text-center">Edit document </h2>
                        <div className="col-md-8 col-md-offset-2">
                            <EditDocument editing={editing}
                                          setEditing={setEditing}
                                          currentDocument={currentDocument}
                                          updateDocument={updateDocument}
                            />
                        </div>
                    </div>
                ):(
                    <div>
                        <h3 className="text-center">Add Document </h3>
                        <div className="col-md-8 col-md-offset-2">
                            <AddDocument addDocument={addDocument}/>
                        </div>
                    </div>
                )}
</div>
<div className="row">
            <h3 className="text-center">Documents List</h3>
    <div className="col-md6 col-md-offset-3">
    <DocumentList documents={documents} editDocument={editDocument} deleteDocument={deleteDocument} />
    </div>
    </div>
     </div>
    );
}
export default App;