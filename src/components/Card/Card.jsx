import style from "./Card.module.css"
import "../Cards/Cards";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";

export default function Card(props) {
            
   const {
      id, 
      onClose, 
      name, 
      status, 
      species, 
      gender, 
      origin, 
      image,
   } = props

   const mapDispatchToProps =()=>{   
      const addFav = ()=>{
         
      }
      const removeFav =()=>{}
      const isFav = false;
   }

   const handleFavorite =()=>{
      if(isFav){
         setState({
            
         })
      }
   }

   return (
      <div className={style.container}>
            <div className={style.containerImagen}>
               <img className={style.imagen}  src={(image)} alt='imagen'/>
            </div>
        <div className={style.blockText}>
            <Link to={`/detail/${id}`} >
            <h2 className={style.texto}>{name}</h2>
            </Link>
            
            <h2 className={style.texto}>{status} </h2>
            <h2 className={style.texto}>{species} </h2>
            <h2 className={style.texto}>{gender} </h2>
            <h2 className={style.texto}>{origin} </h2> 
       
         </div>
      <div className={style.containerBoton}>
         
         <button 
            className={style.button}
            onClick={()=> onClose(id)}
            >X</button>
      </div>
   </div>
   );
 }
 