import Head from 'next/head'
import {getAllData, getOneField} from "@/services/getData";

export const config = {
    unstable_runtimeJS: false,
}

export default function Field({field}) {
    return (
        <>
          <p>{field}</p>
        </>
    )
}

export async function getStaticProps(context) {
    const field = 'asdasdasd'
    return {
        props: {
            field
        },
    }
}

export async function getStaticPaths() {
    const fields = await getAllData()
    return {
        paths: fields.records.map((elm) => ({params: {id: elm.id.toString()}})),
        fallback: false, // can also be true or 'blocking'
    }
}
