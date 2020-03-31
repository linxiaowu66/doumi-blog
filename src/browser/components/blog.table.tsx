// import * as React from 'react';
// import MaterialTable, { Column } from 'material-table';

interface Row {
  id: number,
  name: string;
  count: number;
}

// interface TableState {
//   columns: Array<Column<Row>>;
//   data: Row[];
// }

interface BlogTableProps {
  title: string,
  data: Row[]
}

export default function BlogTable(props: BlogTableProps) {
  // const [state, setState] = React.useState<TableState>({
  //   columns: [
  //     { title: 'id', field: 'id'},
  //     { title: `${props.title}名称`, field: 'name' },
  //     { title: '文章个数', field: 'count', type: 'numeric' },
  //   ],
  //   data: props.data,
  // });

  // return (
  //   <MaterialTable
  //     title={`${props.title}管理`}
  //     columns={state.columns}
  //     data={state.data}
  //     style={{ marginBottom: 20, }}
  //     options={{
  //       search: false,
  //       paging: false
  //     }}
  //     editable={{
  //       onRowAdd: newData =>
  //         new Promise(resolve => {
  //           setTimeout(() => {
  //             resolve();
  //             setState(prevState => {
  //               const data = [...prevState.data];
  //               data.push(newData);
  //               return { ...prevState, data };
  //             });
  //           }, 600);
  //         }),
  //       onRowUpdate: (newData, oldData) =>
  //         new Promise(resolve => {
  //           setTimeout(() => {
  //             resolve();
  //             if (oldData) {
  //               setState(prevState => {
  //                 const data = [...prevState.data];
  //                 data[data.indexOf(oldData)] = newData;
  //                 return { ...prevState, data };
  //               });
  //             }
  //           }, 600);
  //         }),
  //     }}
  //   />
  // );
}
