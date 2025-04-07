import { useState } from "react";

const Sections = ({ title, description, isVisible,setIsvisible}) => {
   

    return (
        <div className="border border-black m-2 p-2" >
            <div className="flex justify-between" >
                <h1 className="text-xl font-bold" >{title}</h1>
                {
                    (!isVisible) ? <button className="bg-white text-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                        onClick={() => setIsvisible()}>Show</button>
                        : <button className="bg-white text-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                            onClick={() => setIsvisible()}>Hide</button>
                }
            </div>
            {isVisible ? <p>{description}</p> : null}
        </div>
    );
}







const InstaServices = () => {
    const [isconfig, setIsConfig] = useState("");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">InstaServices</h1>
            <Sections title={"About InstaServices"}
            isVisible={isconfig==="about"}
            setIsvisible={()=>isconfig==="about"?setIsConfig(""):setIsConfig("about")}
                description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"} />
            <Sections title={"Team InstaServices"}
             isVisible={isconfig==="Team"}
             setIsvisible={()=>isconfig==="Team"?setIsConfig(""):setIsConfig("Team")}
                description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"} />
            <Sections title={"Vision of InstaServices"}
             isVisible={isconfig==="Vision"}
             setIsvisible={()=>isconfig==="Vision"?setIsConfig(""):setIsConfig("Vision")}
                description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"} />
            <Sections title={"Careers at InstaServices"}
             isVisible={isconfig==="Career"}
             setIsvisible={()=>isconfig==="Career"?setIsConfig(""):setIsConfig("Career")}
                description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"} />



        </div>
    )
}

export default InstaServices;