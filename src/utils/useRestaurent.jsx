import { useState,useEffect } from "react"

const useRestaurent = (id) => {


   const [menu,setMenu] = useState();
  
  
      
      useEffect(()=>{
          getRestaurentInfo();
      
      },[])
    
  
     async function getRestaurentInfo() {
      const d = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await d.json();
      setMenu(json.data)
      console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR);
     }

  return menu;
}

export default useRestaurent;