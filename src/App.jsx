import { useState } from 'react'
import './index.css'
import Card from './components/Card.jsx'

function App() {
  const [title, setTitle] = useState("")
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [img, setImg] = useState("")
  
  const localData = JSON.parse(localStorage.getItem("all-users") || '[]')

  const [allusers, setAllusers] = useState(localData)

  function formsubmit(e){
    e.preventDefault();
    const newuser = [...allusers];
    newuser.push({title, role, email, img});

    setAllusers(newuser);
    localStorage.setItem('all-users', JSON.stringify(newuser));

    setImg('');
    setEmail('');
    setRole('');
    setTitle('');
  }

  function removeUser(idx){
    const copyusers = [...allusers];
    const conf = confirm("Are you sure you want to delete this contact?");
    if(conf){
      copyusers.splice(idx, 1);
    }else{
      alert("element not deleted");
    }
    setAllusers(copyusers);
    localStorage.setItem('all-users', JSON.stringify(copyusers))
  }

  return <div className="parent h-screen p-5 flex flex-col">
    <form onSubmit={(e)=>{
      formsubmit(e);
    }}>
      <input className='border-2 border-white rounded-2xl text-2xl text-white px-10 py-7 m-2.5 w-[47%]' required type="text" placeholder='type name'  value={title} onChange={(elem)=>{
        setTitle(elem.target.value);
      }}/>
      <input className='border-2 border-white rounded-2xl text-2xl text-white px-10 py-7 m-2.5 w-[47%]' required type="text" placeholder='type role' value={role} onChange={(elem)=>{
        setRole(elem.target.value)
      }}/>
      <input className='border-2 border-white rounded-2xl text-2xl text-white px-10 py-7 m-2.5 w-[47%]' required type="email" placeholder='type email' value={email} onChange={(elem)=>{
        setEmail(elem.target.value)
      }}/>
      <input className='border-2 border-white rounded-2xl text-2xl text-white px-10 py-7 m-2.5 w-[47%]' required type="text" placeholder='Image url' value={img} onChange={(elem)=>{
        setImg(elem.target.value)
      }}/>
      <button className='border-2 border-white font-bold bg-emerald-400 rounded-xl text-3xl text-white px-10 py-7 m-2.5 w-[95%] cursor-pointer'>Submit</button>
    </form>
    <div className="cards flex flex-row flex-wrap gap-5 mt-5">
      {allusers.map((elem, idx)=>{
        return <Card key={idx} title={elem.title} role={elem.role} email={elem.email} img={elem.img} idx={idx} removeUser={removeUser} />
      })}
    </div>
  </div>
}

export default App
