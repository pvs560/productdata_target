import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {coloumnData} from '../utils/Utils';

export default class ProductTableData extends React.Component {
  constructor(props){
    super(props);
  }

  onRowsSelected = rows => {
    let selectedProdIndexes = this.props.selectedRowId.concat(rows.map(r => r.rowIdx)); 
    console.log("onRowsSelected::",selectedProdIndexes);
    this.props.setSelectedRowData(selectedProdIndexes);
  };

  onRowsDeselected = rows => {
    let rowIndexes = rows.map(r => r.rowIdx);
    let selectedProdIndexes = this.props.selectedRowId.filter(
      i => rowIndexes.indexOf(i) === -1
    );
    console.log("onRowsDeselected::",selectedProdIndexes);
    this.props.setSelectedRowData(selectedProdIndexes);
  };

  render(){
    return (<ReactDataGrid
      columns={coloumnData()}
      rowGetter={i => this.props.productListData[i]}
      rowsCount={this.props.productListData.length}
      minHeight={450}
      rowSelection={{
        showCheckbox: true,
        onRowsSelected: this.onRowsSelected,
        onRowsDeselected: this.onRowsDeselected,
        selectBy: {
          indexes: this.props.selectedRowId
        }
      }}
       />);

  }
}