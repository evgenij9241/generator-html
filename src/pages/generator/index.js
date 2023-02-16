import {useEffect, useState} from "react";
import {getAllData, getOneField} from "@/services/getData";
import styles from "./Generated.module.css"

export default function Generated({data}) {
    if (data === null) return <div>Loading...</div>
    return (
        <ul className={styles.list}>
            {data?.records.map((item) => {

                return (
                    <li key={item.id}>
                            <img height="40px" src={item.fields['Image']?.[0].url} alt=""/>
                        <a href={`/generator/${item.id}`}>{item.fields["Campaign Name"]}</a>
                    </li>
                )
            })
            }
        </ul>
    )
}

export async function getStaticProps(context) {
    const data = await getAllData()
    return {
        props: {
            data
        },
    }
}
