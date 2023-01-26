import Button from "../../components/button";
import BarChart from "../../components/charts/barChart";
import LineChart from "../../components/charts/lineChart";
import Layout from "../../components/layout";
import Cursos from "../cursos";
import Dashboard from "../dashboard";


const Index = () => {


    return (
        <Layout>
            {/* <Dashboard></Dashboard> */}
            <Cursos></Cursos>
        </Layout>);
}

export default Index;