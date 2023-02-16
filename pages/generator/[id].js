import Head from 'next/head'
import {getAllData, getOneField} from "@/services/getData";

export const config = {
    unstable_runtimeJS: false,
}

export default function Field({field}) {
    if(Object.keys(data.fields).length === 0) return <p>no data</p>
    return (
        <>
            <table style={{"width": "100%"}}>
                <tr>
                    <td style={{"width": "25%"}}><strong><font color="red">Special Note</font></strong></td>
                    <td style={{"width": "75%"}}>{field.fields["User Requirements"]}</td>
                </tr>
                <tr>
                    <td style={{"width": "25%"}}><strong>Conversion Action</strong></td>
                    <td style={{"width": "75%"}}>{field.fields["Conversion Action"]}</td>
                </tr>
                <tr>
                    <td style={{"width": "25%"}}><strong>Simple Description</strong></td>
                    <td style={{"width": "75%"}}>{field.fields["User Offer"]}</td>
                </tr>
                <tr>
                    <td style={{"width": "25%"}}><strong>Detailed Description</strong></td>
                    <td style={{"width": "75%"}}>{field.fields["Detailed Description"]}</td>
                </tr>
                <tr>
                    <td style={{"width": "25%"}}><strong>Advertiser Details</strong></td>
                    <td style={{"width": "75%"}}>{field.fields["About Company"]}</td>
                </tr>
                <tr>
                    <td style={{"width": "25%"}}><strong>Creatives / Assets</strong></td>
                    <td style={{"width": "75%"}}>
                        <a
                            href={field.fields["Creatives Folder"]}
                            target="_blank" rel="noreferrer">Available
                            at this link</a></td>
                </tr>
                <tr>
                    <td style={{"width": "25%"}}><strong>Sample Blog Post</strong></td>
                    <td style={{"width": "75%"}}>
                        <a href={field.fields["Example Posts"]}
                           target="_blank" rel="noreferrer">
                            Good Driver? Prove It, and This Insurance Company Will Give You a Lower Rate</a></td>
                </tr>
            </table>
        </>
    )
}

export async function getStaticProps(context) {
    const field = await getOneField(context.params.id)
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
