import Head from 'next/head'
import {getAllData, getOneField} from "@/services/getData";

export const config = {
    unstable_runtimeJS: false,
}

export default function Field() {
    return (
        <>
            <p>asdasdasd</p>
        </>
    )
}



export async function getStaticPaths() {
    const fields = await getAllData()
    return {
        paths: fields.records.map((elm) => ({params: {id: elm.id.toString()}})),
        fallback: false,
    }
}
