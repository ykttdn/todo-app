import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function List() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const {headers, data} = await axios.get("/api/todos");
                setItems(data);
                console.log("request headers", headers);
            } catch (err) {
                console.error("request.error", err.request.headers);
            }
        })();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Test</div>
                        <div className="card-body">{JSON.stringify(items)}</div>
                    </div>
                </div>
            </div>
            <button onClick={() => createPost()}>Send</button>
        </div>
    )
}

async function createPost() {
    try {
        const { data } = await axios.post("/api/todos", {
            "item-contents": "Hello Sample To Do Item",
        });
        console.log("posted.");
    } catch (err) {
        console.error(err.response);
    }
}

export default List;
