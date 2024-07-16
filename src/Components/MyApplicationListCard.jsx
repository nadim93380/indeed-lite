/* eslint-disable react/prop-types */

import { CiSaveDown2 } from "react-icons/ci";
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 20,
        flexGrow: 1
    },
    text: {
        fontSize: 12,
        color: 'black'
    },
    status: {
        fontSize: 12,
        color: 'green'
    }
});








const MyApplicationListCard = (props) => {
    const item = props.item
    const idx = props.idx

    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text}>Applicant : {item.applicant_name}</Text>
                    <Text style={styles.text}>Job Position : {item.applied_job_title}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>Employer Email : {item.employer_email}</Text>
                    <Text style={styles.text}>Application Status : <Text style={styles.status}>{item.application_status}</Text></Text>
                </View>
            </Page>
        </Document>
    );
    return (
        <tr className="hover:bg-slate-50">
            <td>{idx + 1}</td>
            <td>{item.applied_job_title}</td>
            <td className="text-red-600">{item.applicant_CV}</td>
            <td>{item.employer_email}</td>
            <td><span className="bg-sky-300 py-2 px-4 rounded-full">{item.application_status}</span></td>
            <td className="flex justify-start gap-3 items-center">

                <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
                    {({ loading }) =>
                        loading ? 'Loading document...' : <button className="text-black flex justify-center items-center gap-2 p-2 rounded-lg bg-slate-300">Download <CiSaveDown2 /></button>
                    }
                </PDFDownloadLink>
            </td>
        </tr>
    );
};

export default MyApplicationListCard;