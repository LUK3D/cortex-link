import Button from "../../components/button";
import BarChart from "../../components/charts/barChart";
import LineChart from "../../components/charts/lineChart";
import Layout from "../../components/layout";

import ReactDataGrid from '@inovua/reactdatagrid-community'

import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter'
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter'
import StringFilter from '@inovua/reactdatagrid-community/StringFilter'
import DateFilter from '@inovua/reactdatagrid-community/DateFilter'

import { useCallback, useEffect } from "react";
import Sidepanel from "../../components/sideDialog";
import { sidePanelStore } from "../../stores/sidePanelStore";
import { divide } from "lodash";

const Cursos = () => {

    const columns = [
        {
            name: 'name',
            defaultFlex: 2,
            header: 'Nome',
            sortable: true,
            // defaultWidth: 100,
        },
        { name: 'created_at', defaultFlex: 1, header: 'Criado Em', sortable: true },
    ]

    const gridStyle = { minHeight: 550 }

    const dataSource = [
        { name: 'Lingua Portuguesa', created_at: '2022/05/03', id: 0, },
        { name: 'Inglês', created_at: '2022/05/03', id: 0, },
        { name: 'Informática', created_at: '2022/05/03', id: 0, },

    ]


    const filterValue = [
        {
            name: 'name', operator: 'startsWith', type: 'string', value: '', filterEditor: StringFilter,
        },
        {
            name: 'created_at',
            operator: 'before',
            type: 'date',
            value: '',
            filterEditor: DateFilter
        },
    ];



    const onEditComplete = (val: any) => {
        console.log(val)
    }

    const {open } = sidePanelStore((state) => state);

    return (
        <div className="w-full h-full  px-10 pb-10 pt-5 flex flex-col  p-10 relative">
            <div className="w-full flex justify-between items-center   mb-5 py-2">
                <div className="flex flex-col">
                    <h3 className="font-bold">Cursos</h3>
                    <p className="text-xs opacity-50">Lista de cursos cadastrados no sistema</p>
                </div>
                <Button onClick={() => { open()}} className="w-auto pr-4 shadow bg-indigo-400 hover:bg-indigo-600 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <p className="text-white">Adicionar</p>
                </Button>
            </div>

            <div className="w-full bg-white rounded-xl overflow-hidden shadow mb-5" >
                <ReactDataGrid
                    theme="default-light"
                    columns={columns}
                    dataSource={dataSource}
                    style={gridStyle}
                    pagination
                    defaultLimit={10}
                    onEditComplete={onEditComplete}
                    editable={true}
                    defaultFilterValue={filterValue}
                />
            </div>
            
            <Sidepanel
                onClick={() => { console.log('Teste basico') }}
                tittle={
                    <div className="w-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Novo Curso</p>
                    </div>
                }
                description="Adicionar novo Curso" >
                <div className="w-full h-full flex flex-col overflow-y-auto p-5">
                    <p>Teste basico</p>
                </div>
            </Sidepanel>
            

        </div>
    );
}

export default Cursos;