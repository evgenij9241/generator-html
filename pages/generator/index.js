import {useEffect, useState} from "react";
import {getAllData} from "@/services/getData";
import styles from "./Generated.module.css"

export default function Generated() {
    const [data, setData] = useState(null)
    const [showMessages, setShowMessages] = useState(false)
    useEffect(() => {
        getAllData().then((data) => setData(data))
    }, [])
    const copyText = (html) => {
        navigator.clipboard.writeText(html).then(
            () => {
                setShowMessages((prev) => !prev)
                setTimeout(() => setShowMessages((prev) => !prev), 500)
            }
        )
    }
    if (data === null) return <div>Loading...</div>
    return (
        <>
            {
                showMessages && <div
                    style={{
                    position: "fixed",
                    right: 0,
                    top: 0,
                    background: "#278c27",
                    color: "#fff",
                    padding: "20px 40px",
                }}>Copied to your clipboard</div>

            }
            <ul className={styles.list}>
                {data?.records.map((item) => {
                    const html = `
                <html>
                    <head>
                        <style>
                            table, td {
                                border: 1px solid black;
                                border-collapse: collapse;
                            }
                            th, td {
                                padding: 5px;
                                text-align: left;
                            }
                        </style>
                    </head>
                    <body>
                    <table style="width:100%">
                    <tr>
                        <td style="width:25%"><strong><font color="red">Special Note</font></strong></td>
                        <td style="width:75%">${item.fields["User Requirements"]}</td>
                    </tr>
                    <tr>
                        <td style="width:25%"><strong>Conversion Action</strong></td>
                        <td style="width:75%">${item.fields["Conversion Action"]}</td>
                    </tr>
                    <tr>
                        <td style="width:25%"><strong>Simple Description</strong></td>
                        <td style="width:75%">${item.fields["User Offer"]}</td>
                    </tr>
                    <tr>
                        <td style="width:25%"><strong>Detailed Description</strong></td>
                        <td style="width:75%">${item.fields["Detailed Description"]}</td>
                    </tr>
                    <tr>
                        <td style="width:25%"><strong>Advertiser Details</strong></td>
                        <td style="width:75%">${item.fields["About Company"]}</td>
                    </tr>
                    <tr>
                        <td style="width:25%"><strong>Creatives / Assets</strong></td>
                        <td style="width:75%">
                        <a
                                href=${item.fields["Creatives Folder"]}
                        target="_blank" rel="noreferrer">Available
                        at this link</a></td>
                    </tr>
                    <tr>
                        <td style="width:25%"><strong>Sample Blog Post</strong></td>
                        <td style="width:75%">
                        <a href=${item.fields["Example Posts"]}
                        target="_blank" rel="noreferrer">
                        Good Driver? Prove It, and This Insurance Company Will Give You a Lower Rate</a></td>
                    </tr>
                    </table>
                    
                    </body>
                    </html>`
                    if (Object.keys(item.fields).length === 0) return null
                    return (
                        <li key={item.id}>
                            <img height="40px" src={item.fields['Image']?.[0].url} alt=""/>
                            <p>{item.fields["Campaign Name"]}</p>
                            <textarea style={{width: "1px", height: "1px", display: "none"}}>
                          {html}
                        </textarea>
                            <button style={{margin: "0 0 0 20px", cursor: "pointer"}}
                                    onClick={() => copyText(html)}>Copy html code
                            </button>
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
}



