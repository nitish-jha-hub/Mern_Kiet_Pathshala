import Navbar from "../common/Navbar/navbar";
import {useState, useEffect} from "react";
import "./historyPage.css";

const HistoryPage = () => {
    // let data = [
    //     {'id':'1', title:'hello'},
    //     {'id':'2', title:'world'},
    // ];
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const getData = async() => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const obj = await res.json();
        // data = obj.products;
        setData(obj.products);
        console.log(data);
    }
    useEffect(() => {
        getData();
    }, [searchText]);

    return (
        <div>
            <Navbar />
            <input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <div className="history-main-container">
                {data.map((item)=>(
                        <div key={item.id} className="history-card">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default HistoryPage;