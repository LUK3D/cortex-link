import LineChart from "../../components/charts/lineChart";
import Layout from "../../components/layout";


const Index = () => {


    return (
        <Layout>
            <div className="w-full  px-10 py-10 flex flex-col  p-10">
                <div className="w-full h-100 bg-white rounded-lg shadow p-10 flex flex-col">
                    <LineChart></LineChart>
                </div>
                <div className="w-full h-100 bg-white rounded-lg shadow mt-5"></div>
                <div className="w-full h-100 bg-white rounded-lg shadow mt-5"></div>
            </div>
        </Layout>);
}

export default Index;