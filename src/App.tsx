import Card from './Card';
import profileList from './profiles.json';



function App(){

    return (
        <div id="contact">
            {profileList.map((item)=>{
               return (
               
               <div className={"contact"}>
                   <Card name={item.name} id={item.id} phno={item.phno}/>
               </div>
               
               
               )
               
            })}
        </div>
    );
}


export default App;